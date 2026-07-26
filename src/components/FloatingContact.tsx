"use client";

import { company } from "@/data/company";
import { ChatIcon, PhoneIcon } from "./icons/Icons";

/** Floating LINE + call buttons — the Thai market leans on LINE (playbook §8). */
export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href={company.social.line}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-line"
        aria-label="LINE"
        title="LINE"
      >
        <ChatIcon />
      </a>
      <a
        href={`tel:${company.phones[0].tel}`}
        className="fab fab-call"
        aria-label="Call the resort"
        title="Call"
      >
        <PhoneIcon />
      </a>
    </div>
  );
}
