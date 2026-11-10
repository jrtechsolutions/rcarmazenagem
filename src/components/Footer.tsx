import Link from "next/link";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconPhone,
  IconWhatsApp,
} from "@/components/Icons";
import { ENDERECOS, SITE } from "@/lib/site";

const SOCIAL = [
  {
    label: "Facebook",
    href: SITE.facebook,
    Icon: IconFacebook,
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    Icon: IconLinkedin,
  },
  {
    label: "Instagram",
    href: SITE.instagram,
    Icon: IconInstagram,
  },
] as const;

const FOOTER_ENDERECOS = ENDERECOS.filter((e) =>
  e.logradouro.includes("Juvenal Arantes"),
).map((e) => ({
  ...e,
  tipo: "Galpão",
}));

function formatCidadeLinha(e: (typeof FOOTER_ENDERECOS)[number]) {
  const extra = e.extra ? ` - ${e.extra}` : "";
  return `${e.cidade} - ${e.uf} - CEP ${e.cep}${extra}`;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell pt-9 pb-5">
        <div className="foot-top">
          <div className="foot-col foot-addresses">
            <h6>Nossos endereços</h6>
            <ul className="foot-address-list">
              {FOOTER_ENDERECOS.map((e) => (
                <li key={`${e.cidade}-${e.cep}-${e.logradouro}`}>
                  <strong>
                    {e.tipo} · {e.cidade}
                  </strong>
                  <span>{e.logradouro}</span>
                  <span>{formatCidadeLinha(e)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h6>Telefones de contato</h6>
            <p className="foot-col-hint">Fixo e WhatsApp</p>
            <a href={SITE.phoneHref} className="foot-phone">
              <IconPhone className="foot-phone-ic" />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsappHref}
              className="foot-phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="foot-phone-ic" />
              {SITE.whatsapp}
            </a>
          </div>

          <div className="foot-col">
            <h6>Redes sociais</h6>
            <div className="foot-social">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-social-link"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="foot-bottom-left">
            <a
              href={SITE.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="foot-dev"
            >
              Desenvolvido por {SITE.developerName}
            </a>
            <Link href="/politica-de-privacidade" className="foot-dev">
              Política de Privacidade
            </Link>
          </div>
          <span>Copyright © {SITE.name}. (Lei 9610 de 19/02/1998)</span>
        </div>
      </div>
    </footer>
  );
}
