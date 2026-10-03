import type { Metadata } from "next";
import { ComoFuncionaBridge } from "@/components/ComoFuncionaBridge";
import { CrossLink } from "@/components/CrossLink";
import { CtaBand } from "@/components/CtaBand";
import { CutawayFlow } from "@/components/CutawayFlow";
import { RevealSection } from "@/components/RevealSection";
import {
  COMO_FUNCIONA_INTRO,
  FLOW_TECH,
  PASSOS,
  SERVICOS,
} from "@/lib/site";
import { IconCheck, IconNested, IconWarehouse } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Como Funciona a Armazenagem",
  description:
    "Recebimento, estocagem e expedição numa só operação. Entenda o fluxo de armazenagem regulada da RC e a continuidade com o transporte.",
};

const TECH_ICONS = {
  nested: IconNested,
  check: IconCheck,
  warehouse: IconWarehouse,
} as const;

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="cf-hero">
        <div className="cf-hero__bg" aria-hidden />
        <div className="shell cf-hero__grid">
          <div className="cf-hero__copy">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              Como funciona
            </p>
            <h1>
              Três etapas.
              <br />
              Um mesmo responsável.
            </h1>
            <p>{COMO_FUNCIONA_INTRO}</p>
            <ul className="cf-hero__stats">
              <li>
                <strong>{PASSOS.length}</strong>
                <span>etapas no galpão</span>
              </li>
              <li>
                <strong>1</strong>
                <span>cadeia Armazém + Transportes</span>
              </li>
              <li>
                <strong>WMS</strong>
                <span>rastreio por lote</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Grupo RC</p>
          <h2 className="sec-title compliance-sec-title">
            Armazenagem e transporte sob o mesmo padrão
          </h2>
          <ComoFuncionaBridge />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Fluxo no galpão</p>
          <h2 className="sec-title compliance-sec-title">
            Do caminhão que chega ao caminhão que sai
          </h2>
          <CutawayFlow showTech={false} />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Serviços</p>
          <h2 className="sec-title compliance-sec-title">
            O que a operação faz além de guardar
          </h2>
          <ul className="servicos-grid">
            {SERVICOS.map((s) => (
              <li key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </li>
            ))}
          </ul>
          <p className="servicos-note">
            Atendimento exclusivo para empresas com CNPJ. Recebimento em horário
            comercial.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">O que sustenta o fluxo</p>
          <h2 className="sec-title compliance-sec-title">
            Sistema, regra de saída e segregação
          </h2>
          <div className="tech-grid tech-grid--standalone">
            {FLOW_TECH.map((item) => {
              const Icon = TECH_ICONS[item.icon];
              return (
                <div key={item.title} className="tech-box">
                  <div className="head">
                    <Icon />
                    <h6>{item.title}</h6>
                  </div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <CrossLink compact />
      </RevealSection>

      <CtaBand
        title="Quer incluir armazenagem e transporte na mesma proposta?"
        cta="Solicitar orçamento"
        href="/orcamento"
      />
    </>
  );
}
