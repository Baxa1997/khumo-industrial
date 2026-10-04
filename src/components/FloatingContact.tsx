"use client";

import { useState } from "react";
import Icon from "./Icon";
import { contactChannels } from "./SocialLinks";
import { useI18n } from "@/i18n/client";

const colors: Record<string, string> = {
  phone: "bg-orange-500 hover:bg-orange-600",
  telegram: "bg-[#229ed9] hover:bg-[#1c8cc1]",
  instagram: "bg-[linear-gradient(45deg,#f09433,#dc2743_50%,#bc1888)] hover:opacity-90",
};

/** Always-visible contact button for visitors arriving from ads: call, Telegram or Instagram in one tap. */
export default function FloatingContact() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <ul className="mobile-menu flex flex-col items-end gap-2.5">
          {contactChannels.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`flex items-center gap-2.5 rounded-full py-2.5 pl-4 pr-3 text-sm font-medium text-white shadow-lg ${colors[c.key]}`}
              >
                {c.label}
                <Icon name={c.icon} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t("Close contact options") : t("Contact us")}
        className="grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-white shadow-[0_10px_30px_-8px_rgba(244,81,30,0.7)] transition-colors hover:bg-orange-600"
      >
        <Icon name={open ? "close" : "chat"} className="h-6 w-6" strokeWidth={2} />
      </button>
    </div>
  );
}
