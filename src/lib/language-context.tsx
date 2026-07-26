"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, type Dict, type Lang } from "@/data/translations";

interface LanguageContextValue {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "isaanisan.lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR renders English (canonical default). Client can switch on mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "th") initial = stored;
    } catch {
      /* ignore */
    }
    if (!initial && typeof navigator !== "undefined") {
      if (navigator.language?.toLowerCase().startsWith("th")) initial = "th";
    }
    if (initial && initial !== "en") setLangState(initial);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  // Keep <html lang> + data-lang (font switch) in sync.
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dataset.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
