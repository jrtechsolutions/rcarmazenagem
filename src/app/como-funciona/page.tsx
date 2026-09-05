import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { CutawayFlow } from "@/components/CutawayFlow";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Como Funciona a Armazenagem",
  description:
    "Recebimento, estocagem e expedição numa só operação. Entenda o fluxo de armazenagem regulada da RC.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="pg-hero">
        <div className="shell">
          <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
            Como funciona
          </p>
          <h1>
            Três etapas.
            <br />
            Um mesmo responsável.
          </h1>
          <p>
            Recebimento, estocagem e expedição, sem trocar de empresa no meio
            do processo.
          </p>
        </div>
      </section>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Fluxo no galpão</p>
          <h2 className="sec-title">Do caminhão que chega ao caminhão que sai</h2>
          <CutawayFlow />
        </div>
      </RevealSection>

      <CtaBand
        title="Quer incluir armazenagem e transporte na mesma proposta?"
        cta="Solicitar orçamento"
        href="/orcamento"
      />
    </>
  );
}
