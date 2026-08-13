import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { RackMotif } from "@/components/RackMotif";
import { PASSOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Recebimento, estocagem FEFO e expedição na frota RC: três etapas, um mesmo responsável do início ao fim.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHero
        eyebrow="Como funciona"
        title="Três etapas, um mesmo responsável do início ao fim."
        description="Recebimento, estocagem e expedição — sem trocar de empresa no meio do processo."
      />

      <section className="px-4 py-10 sm:px-7">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 font-mono text-[11.5px] tracking-[0.08em] text-mono-ink uppercase">
              Fluxo no galpão
            </p>
            <RackMotif labeled className="justify-start" />
          </div>
          <div className="flex flex-col gap-5">
            {PASSOS.map((p) => (
              <article key={p.n} className="flex items-start gap-3.5">
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-verde font-mono text-[12px] font-semibold text-white">
                  {p.n}
                </span>
                <div>
                  <h2 className="text-[15px] font-semibold">{p.titulo}</h2>
                  <p className="mt-1 text-[13.5px] text-mono-ink">{p.texto}</p>
                  <p className="mt-2 max-w-[460px] text-[13px] text-mono-ink">
                    {p.detalhe}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer incluir armazenagem e transporte na mesma proposta?"
        cta="Solicitar orçamento"
        href="/orcamento"
      />
    </>
  );
}
