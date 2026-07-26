"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

type ModalKind = "room" | "lightbox" | "booking" | null;

interface ModalContextValue {
  openModal: (content: React.ReactNode, kind?: Exclude<ModalKind, null>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<React.ReactNode>(null);
  const [kind, setKind] = useState<ModalKind>(null);
  const active = content !== null;

  const openModal = useCallback((node: React.ReactNode, k: Exclude<ModalKind, null> = "room") => {
    setContent(node);
    setKind(k);
  }, []);

  const closeModal = useCallback(() => {
    setContent(null);
    setKind(null);
  }, []);

  // Body scroll lock while open.
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Escape to close.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closeModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <div
        className={`modal-overlay${active ? " active" : ""}`}
        aria-hidden={!active}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div
          className={kind === "lightbox" ? "modal-content lightbox-content" : "modal-content"}
        >
          <span className="modal-close" onClick={closeModal} aria-label="Close" role="button" tabIndex={0}>
            &times;
          </span>
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
