import type { Metadata } from "next";
import Link from "next/link";
import { ComoFuncionaBridge } from "@/components/ComoFuncionaBridge";
import { CrossLink } from "@/components/CrossLink";
import { CtaBand } from "@/components/CtaBand";
import { CutawayFlow } from "@/components/CutawayFlow";
import { PageHeroMedia } from "@/components/PageHeroMedia";
import { RevealSection } from "@/components/RevealSection";
import { ServiceCards } from "@/components/ServiceCards";
import {
  COMO_FUNCIONA_INTRO,
  FLOW_TECH,
  FOTOS_GALPAO,
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

const HIRE_STEPS = [
  {
    title: "Contato",
    text: "Informe o tipo de produto, volume estimado e se a carga precisa de transporte RC.",
  },
  {
    title: "Proposta",
    text: "O comercial analisa exigências de compliance e envia uma cotação objetiva.",
  },
  {
    title: "Recebimento",
    text: "Conferência, registro no WMS e posicionamento por classe e FEFO.",
  },
  {
    title: "Expedição",
    text: "Separação conferida e saída documentada, na frota RC ou na transportadora indicada.",
  },
] as const;

export default function ComoFuncionaPage() {
  return (
    <>
      <PageHeroMedia
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Como funciona" },
        ]}
        eyebrow="Como funciona"
        title="Soluções de armazenagem integradas à cadeia"
        description={COMO_FUNCIONA_INTRO}
        image={{
          src: FOTOS_GALPAO.doca.src,
          alt: FOTOS_GALPAO.doca.alt,
        }}
      >
        <div className="badge-row">
          <span className="badge-chip">
            <strong>{PASSOS.length}</strong> etapas no galpão
          </span>
          <span className="badge-chip">1 cadeia Armazém + Transportes</span>
          <span className="badge-chip">WMS · rastreio por lote</span>
        </div>
      </PageHeroMedia>

      <div className="page-sheet">
        <RevealSection className="sec-compact" alt>
          <div className="shell">
            <p className="sec-label">Grupo RC</p>
            <h2 className="sec-title">
              Armazenagem e transporte sob o mesmo padrão
            </h2>
            <ComoFuncionaBridge />
          </div>
        </RevealSection>

        <RevealSection className="sec-compact">
          <div className="shell">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="sec-label">Fluxo no galpão</p>
                <h2 className="sec-title">
                  Do caminhão que chega ao caminhão que sai
                </h2>
              </div>
              <Link href="/estrutura" className="btn-pill btn-pill--outline-dark">
                Ver estrutura →
              </Link>
            </div>
            <CutawayFlow showTech={false} />
          </div>
        </RevealSection>

        <RevealSection className="sec-compact" alt stagger>
          <div className="shell">
            <p className="sec-label">Serviços</p>
            <h2 className="sec-title mb-2">
              O que a operação faz além de guardar
            </h2>
            <p className="mb-6 max-w-2xl text-[14.5px] text-mono-ink">
              Separação, etiquetagem, inventário e devoluções, no mesmo padrão
              de compliance da armazenagem.
            </p>
            <ServiceCards
              items={SERVICOS.map((s) => ({
                title: s.titulo,
                text: s.texto,
                href: "/orcamento",
                cta: "Solicitar orçamento →",
              }))}
            />
            <p className="servicos-note mt-5">
              Atendimento exclusivo para empresas com CNPJ. Recebimento em
              horário comercial.
            </p>
          </div>
        </RevealSection>

        <RevealSection className="sec-compact" stagger>
          <div className="shell">
            <p className="sec-label">Contratação</p>
            <h2 className="sec-title mb-5">Quatro passos para colocar a carga em movimento</h2>
            <div className="steps-band">
              {HIRE_STEPS.map((step, i) => (
                <article key={step.title} className="steps-band__item reveal-child">
                  <span className="steps-band__num">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="sec-compact" alt>
          <div className="shell">
            <p className="sec-label">O que sustenta o fluxo</p>
            <h2 className="sec-title">
              Sistema, regra de saída e segregação
            </h2>
            <div className="tech-grid tech-grid--standalone mt-5">
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

        <RevealSection className="sec-compact">
          <CrossLink compact />
        </RevealSection>

        <CtaBand
          title="Quer incluir armazenagem e transporte na mesma proposta?"
          description="Informe o perfil da carga e a frequência de movimentação. Retornamos com uma proposta clara."
          cta="Solicitar orçamento"
          href="/orcamento"
        />
      </div>
    </>
  );
}
