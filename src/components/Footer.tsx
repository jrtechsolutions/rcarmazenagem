import Link from "next/link";
import { SITE } from "@/lib/site";

const JUNDIAI_COUNT = 3;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell pt-8 pb-5">
        <div className="foot-top">
          <div className="foot-brand">
            <h4 className="font-display font-extrabold">RC Armazenagem</h4>
            <p>
              Armazenagem certificada de carga regulada — cosméticos, saneantes,
              correlatos, químicos e medicamentos. Transporte incluso na mesma
              operação.
            </p>
          </div>

          <div className="foot-col">
            <h6>Navegação</h6>
            <Link href="/estrutura">Estrutura</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/como-funciona">Como funciona</Link>
            <a
              href={SITE.transportesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Transporte
            </a>
            <Link href="/orcamento">Orçamento</Link>
          </div>

          <div className="foot-col">
            <h6>Unidades</h6>
            <div className="city-chip-row">
              <Link href="/contato#unidades-sao-paulo" className="city-chip">
                São Paulo
              </Link>
              <Link href="/contato#unidades-jundiai" className="city-chip">
                Jundiaí ({JUNDIAI_COUNT})
              </Link>
            </div>
            <h6>Contato</h6>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {SITE.legalName}</span>
          <span>rcarmazenagem.com.br · rctransportes.com.br</span>
        </div>
      </div>
    </footer>
  );
}
