import Link from "next/link";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
} from "@/components/Icons";
import { ENDERECOS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-borda bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-10 sm:px-7 md:grid-cols-[1.1fr_1fr_0.8fr]">
        <div>
          <p className="font-display text-[15px] font-extrabold text-verde">
            RC Armazenagem
          </p>
          <p className="mt-2 max-w-sm text-[13px] text-mono-ink">
            Armazenagem certificada de carga regulada — cosméticos, saneantes,
            correlatos, químicos e medicamentos. Transporte incluso na mesma
            operação.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-borda text-verde"
              aria-label="Instagram"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-borda text-verde"
              aria-label="Facebook"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11.5px] tracking-[0.08em] text-mono-ink uppercase">
            Unidades
          </p>
          <ul className="space-y-3 text-[12.5px] text-mono-ink">
            {ENDERECOS.map((e) => (
              <li key={`${e.logradouro}-${e.cep}`}>
                <b className="font-medium text-texto">{e.cidade}</b>
                <br />
                {e.logradouro}
                {e.extra ? ` · ${e.extra}` : ""}
                <br />
                <span className="font-mono text-[11px]">
                  {e.cidade} - {e.uf} · CEP {e.cep}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11.5px] tracking-[0.08em] text-mono-ink uppercase">
            Contato
          </p>
          <ul className="space-y-2 text-[13px]">
            <li>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2">
                <IconPhone className="h-4 w-4 text-verde" />
                <span className="font-mono">{SITE.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <IconPhone className="h-4 w-4 text-azul" />
                <span className="font-mono">WhatsApp {SITE.whatsapp}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2">
                <IconMail className="h-4 w-4 text-verde" />
                <span>{SITE.email}</span>
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-1.5 text-[13px] text-mono-ink">
            <Link href="/estrutura" className="hover:text-texto">
              Estrutura
            </Link>
            <Link href="/compliance" className="hover:text-texto">
              Compliance
            </Link>
            <Link href="/orcamento" className="hover:text-texto">
              Orçamento
            </Link>
            <a
              href={SITE.transportesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-texto"
            >
              RC Transportes
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-borda">
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-2 px-4 py-[22px] font-mono text-[11.5px] text-mono-ink sm:px-7">
          <span>© {SITE.legalName}</span>
          <span>rcarmazenagem.com.br · rctransportes.com.br</span>
        </div>
      </div>
    </footer>
  );
}
