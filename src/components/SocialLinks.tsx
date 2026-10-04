import Icon, { type IconName } from "./Icon";
import { company } from "@/lib/data";

export const contactChannels: { key: string; label: string; href: string; icon: IconName; external?: boolean }[] = [
  { key: "phone", label: company.phone, href: company.phoneHref, icon: "phone" },
  { key: "telegram", label: `Telegram ${company.telegram.label}`, href: company.telegram.href, icon: "send", external: true },
  { key: "instagram", label: `Instagram ${company.instagram.label}`, href: company.instagram.href, icon: "instagram", external: true },
];

/** Round icon buttons for phone, Telegram and Instagram. */
export default function SocialLinks({ className = "", itemClassName = "", iconClassName = "h-5 w-5" }: { className?: string; itemClassName?: string; iconClassName?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {contactChannels.map((c) => (
        <li key={c.key}>
          <a
            href={c.href}
            aria-label={c.label}
            title={c.label}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`grid place-items-center rounded-full transition-colors ${itemClassName}`}
          >
            <Icon name={c.icon} className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
