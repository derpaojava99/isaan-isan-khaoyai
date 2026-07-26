"use client";

import { company } from "@/data/company";

/** Floating LINE + call buttons — the Thai market leans on LINE (playbook §8). */
export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href={company.social.line}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-line"
        aria-label="Chat on LINE"
        title="LINE"
      >
        💬
      </a>
      <a
        href={`tel:${company.phones[0].tel}`}
        className="fab fab-call"
        aria-label="Call the resort"
        title="Call"
      >
        📞
      </a>
    </div>
  );
}
