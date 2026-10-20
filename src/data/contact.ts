import type { IconType } from "react-icons";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

export const contact = {
  email: "bilolmen998@gmail.com",
  telegram: "https://t.me/bilolidindev",
  instagram: "https://www.instagram.com/bilolidin.dev/",
  instagramHandle: "@bilolidin.dev",
  // Optional. Add only a confirmed number, as https://wa.me/<digits>; while
  // empty the WhatsApp button is not rendered anywhere.
  whatsapp: "",
  // Not shown in the UI; kept only for structured data (JSON-LD `sameAs`).
  github: "https://github.com/bilolidin-dev",
} as const;

export const mailtoHref = `mailto:${contact.email}`;

export type Channel = {
  id: "telegram" | "whatsapp" | "email" | "instagram";
  label: string;
  href: string;
  icon: IconType | typeof Mail;
  external: boolean;
};

/** Contact channels in display order; channels without a value are skipped. */
export const channels: Channel[] = (
  [
    { id: "telegram", label: "Telegram", href: contact.telegram, icon: SiTelegram, external: true },
    { id: "whatsapp", label: "WhatsApp", href: contact.whatsapp, icon: SiWhatsapp, external: true },
    { id: "email", label: "Email", href: mailtoHref, icon: Mail, external: false },
    { id: "instagram", label: "Instagram", href: contact.instagram, icon: SiInstagram, external: true },
  ] satisfies Channel[]
).filter((channel) => channel.href !== "");

/** Every "Discuss a project" button opens Telegram, the main channel. */
export const primaryChannel = channels.find((channel) => channel.id === "telegram")!;
