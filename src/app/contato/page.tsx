import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { ENDERECOS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a RC Armazenagem: orçamento de guarda e transporte de carga regulada, unidades em São Paulo e Jundiaí.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com quem opera o galpão."
        description="Orçamento de armazenagem — com transporte incluso por padrão, se fizer sentido pra carga."
      />

      <section className="px-4 py-9 sm:px-7">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
              Canais
            </h2>
            <ul className="space-y-3 text-[14px]">
              <li>
                Telefone:{" "}
                <a href={SITE.phoneHref} className="font-mono text-verde-escuro">
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
                <a href={`mailto:${SITE.email}`} className="text-verde-escuro">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
              Unidades
            </h2>
            <ul className="space-y-4 text-[13px] text-mono-ink">
              {ENDERECOS.map((e) => (
                <li key={`${e.logradouro}-${e.cep}`}>
                  <b className="text-texto">{e.cidade}</b>
                  <br />
                  {e.logradouro}
                  {e.extra ? ` · ${e.extra}` : ""}
                  <br />
                  <span className="font-mono text-[11.5px]">CEP {e.cep}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[16px] border border-borda bg-card p-5 sm:p-7">
            <h2 className="mb-4 font-display text-[18px] font-extrabold">
              Solicitar orçamento
            </h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
