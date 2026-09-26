import { IconWhatsApp } from "@/components/Icons";
import { SITE } from "@/lib/site";

/** Botão flutuante de WhatsApp — presente em todas as páginas via layout. */
export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label={`Falar no WhatsApp ${SITE.whatsapp}`}
    >
      <IconWhatsApp />
    </a>
  );
}
