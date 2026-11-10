import type { Metadata } from "next";
import { PageHeroMedia } from "@/components/PageHeroMedia";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealSection } from "@/components/RevealSection";
import { ENDERECOS, FOTOS_GALPAO, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Fale com a RC Armazém",
  },
  description:
    "Solicite orçamento de armazenagem regulada em São Paulo ou Jundiaí.",
};

export default function ContatoPage() {
  const sp = ENDERECOS.filter((e) => e.cidade === "São Paulo");
  const jundiai = ENDERECOS.filter((e) => e.cidade === "Jundiaí");

  return (
    <>
      <PageHeroMedia
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
        eyebrow="Contato"
        title="Fale com quem opera o galpão"
        description="Orçamento de armazenagem, com transporte incluso por padrão, se fizer sentido pra carga."
        image={{
          src: FOTOS_GALPAO.identidade.src,
          alt: FOTOS_GALPAO.identidade.alt,
        }}
      />

      <div className="page-sheet">
        <RevealSection className="sec-compact" alt>
          <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
                Canais
              </h2>
              <ul className="space-y-3 text-[14px]">
                <li>
                  Telefone:{" "}
                  <a
                    href={SITE.phoneHref}
                    className="font-mono text-verde-escuro"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-verde-escuro"
                  >
                    {SITE.whatsapp}
                  </a>
                </li>
                <li>
                  E-mail:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-verde-escuro"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>

              <div id="unidades" className="scroll-mt-24">
                <h2 className="mt-8 mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
                  Unidades
                </h2>

                <div id="unidades-sao-paulo" className="scroll-mt-28">
                  <h3 className="mb-2 text-[14px] font-semibold text-texto">
                    São Paulo
                  </h3>
                  <ul className="mb-6 space-y-3 text-[13px] text-mono-ink">
                    {sp.map((e) => (
                      <li key={`${e.logradouro}-${e.cep}`}>
                        {e.logradouro}
                        {e.extra ? ` · ${e.extra}` : ""}
                        <br />
                        <span className="font-mono text-[11.5px]">
                          CEP {e.cep}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="unidades-jundiai" className="scroll-mt-28">
                  <h3 className="mb-2 text-[14px] font-semibold text-texto">
                    Jundiaí ({jundiai.length})
                  </h3>
                  <ul className="space-y-3 text-[13px] text-mono-ink">
                    {jundiai.map((e) => (
                      <li key={`${e.logradouro}-${e.cep}`}>
                        {e.logradouro}
                        {e.extra ? ` · ${e.extra}` : ""}
                        <br />
                        <span className="font-mono text-[11.5px]">
                          CEP {e.cep}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="form-surface">
              <h2 className="mb-4 font-display text-[20px] font-extrabold">
                Solicitar orçamento
              </h2>
              <QuoteForm />
            </div>
          </div>
        </RevealSection>
      </div>
    </>
  );
}
