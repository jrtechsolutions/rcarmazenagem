import {
  IconFacebook,
  IconInstagram,
  IconPhone,
  IconWhatsApp,
} from "@/components/Icons";
import Link from "next/link";
import { ENDERECOS, SITE } from "@/lib/site";

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Facebook", href: SITE.facebook, Icon: IconFacebook },
  { label: "LinkedIn", href: SITE.linkedin, Icon: IconLinkedin },
  { label: "Instagram", href: SITE.instagram, Icon: IconInstagram },
] as const;

function formatCidadeLinha(e: (typeof ENDERECOS)[number]) {
  const base = `${e.cidade} - ${e.uf} - CEP ${e.cep}`;
  return e.extra ? `${base} - ${e.extra}` : base;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell pt-10 pb-5">
        <div className="foot-top">
          <div className="foot-block">
            <h6>Os endereços</h6>
            <div className="foot-addr-grid">
              {ENDERECOS.map((e) => (
                <address key={`${e.logradouro}-${e.cep}`} className="foot-addr">
                  <strong>{e.cidade}</strong>
                  <p>{e.logradouro}</p>
                  <p>{formatCidadeLinha(e)}</p>
                </address>
              ))}
            </div>
          </div>

          <div className="foot-block">
            <h6>Telefones de contato</h6>
            <p className="foot-sub">Fixo e WhatsApp</p>
            <ul className="foot-phones">
              <li>
                <a href={SITE.phoneHref} className="foot-phone">
                  <IconPhone />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-phone"
                >
                  <IconWhatsApp />
                  <span>{SITE.whatsapp}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="foot-block">
            <h6>Redes sociais</h6>
            <div className="foot-social">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-social-btn"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <a
            href={SITE.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="foot-dev"
          >
            Desenvolvido por {SITE.developerName}
          </a>
          <div className="foot-bottom-right">
            <Link href="/politica-de-privacidade" className="foot-legal">
              Política de Privacidade
            </Link>
            <span>Copyright © RC Transportes. (Lei 9610 de 19/02/1998)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
