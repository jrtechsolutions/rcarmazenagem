import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { HeroCinematicVideo } from "@/components/HeroCinematicVideo";
import { NumberedCard, NumCardGrid } from "@/components/NumberedCard";
import { ParallaxMedia } from "@/components/ParallaxMedia";
import { RevealSection } from "@/components/RevealSection";
import { ScrollScene } from "@/components/ScrollScene";
import { SegmentIcon } from "@/components/Icons";
import { StatsBand } from "@/components/StatsBand";
import { Tooltip } from "@/components/Tooltip";
import { FEATURES_ESTRUTURA, FOTOS_GALPAO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estrutura do Galpão",
  description:
    "Galpão dimensionado pra produto regulado, com corredores largos e sinalização por zona. Conheça a estrutura.",
};

const TONES = ["t1", "t2", "t3"] as const;
const { corredor, enderecamento, doca, estocagem } = FOTOS_GALPAO;

const STRUCTURE_STATS = [
  {
    value: "WMS",
    label: "Controle de estoque",
    hint: "Posição, lote e validade no Senior.",
  },
  {
    value: "SP + Jundiaí",
    label: "Bases estratégicas",
    hint: "Unidades próprias para receber e expedir.",
  },
  {
    value: "Por zona",
    label: "Segregação",
    hint: "Classe de produto define o endereço no galpão.",
  },
  {
    value: "FEFO",
    label: "Regra de saída",
    hint: "O lote que vence primeiro sai primeiro.",
  },
] as const;

const FLOW_STEPS = [
  {
    title: "Entrada organizada",
    text: "Recebimento, conferência e registro dos materiais antes da armazenagem.",
  },
  {
    title: "Estoque visível",
    text: "Posições, movimentações e saldos acompanhados por WMS.",
  },
  {
    title: "Saída planejada",
    text: "Separação e expedição conforme pedido, destino e janela operacional.",
  },
  {
    title: "Documentação",
    text: "Histórico pronto para auditoria do cliente e fiscalização.",
  },
] as const;

export default function EstruturaPage() {
  return (
    <>
      <section id="hero" className="hero-cinematic relative isolate overflow-hidden">
        <HeroCinematicVideo />

        <div className="hero-cinematic__content shell relative z-10 flex items-center">
          <div className="hero-cinematic__copy">
            <p className="hero-eyebrow">Estrutura</p>
            <h1 className="font-display font-extrabold text-white">
              O galpão por trás da operação.{" "}
              <span className="accent">Feito pra carga regulada.</span>
            </h1>
            <p className="hero-lead">
              Cada zona com regra própria. Do recebimento à expedição, o
              processo fica registrado. Espaço físico com disciplina de
              operação. Não é galpão genérico adaptado.
            </p>
            <div className="badge-row" style={{ justifyContent: "center" }}>
              <span className="badge-chip">Base estratégica</span>
              <span className="badge-chip">WMS · Senior</span>
              <span className="badge-chip">Segregação por classe</span>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="sec-compact" stagger>
        <div className="shell">
          <StatsBand items={STRUCTURE_STATS} />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Fluxo bem organizado</p>
          <h2 className="sec-title mb-5">
            Armazenagem não é só espaço. É movimento controlado
          </h2>
          <div className="steps-band">
            {FLOW_STEPS.map((step, i) => (
              <article key={step.title} className="steps-band__item">
                <span className="steps-band__num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Por dentro</p>
          <h2 className="sec-title mb-5">Fotos reais da operação</h2>
          <div className="support-photos support-photos--trio">
            <div className="sp-item sp-main">
              <ParallaxMedia cover={1.5}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={corredor.src} alt={corredor.alt} />
              </ParallaxMedia>
              <span className="lbl">{corredor.label}</span>
            </div>
            <div className="sp-item sp-enderecamento">
              <ParallaxMedia cover={1.45}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={enderecamento.src} alt={enderecamento.alt} />
              </ParallaxMedia>
              <span className="lbl">{enderecamento.label}</span>
            </div>
            <div className="sp-item sp-doca">
              <ParallaxMedia cover={1.45}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={doca.src} alt={doca.alt} />
              </ParallaxMedia>
              <span className="lbl">{doca.label}</span>
            </div>
          </div>
          <div className="estrutura-wide-shot">
            <ParallaxMedia cover={1.5}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={estocagem.src} alt={estocagem.alt} />
            </ParallaxMedia>
            <span className="lbl">{estocagem.label}</span>
          </div>
        </div>
      </RevealSection>

      <ScrollScene
        image={{ src: estocagem.src, alt: estocagem.alt }}
        eyebrow="Por dentro"
        title="Espaço físico com disciplina de operação"
        description="Não é galpão genérico adaptado. Cada zona com regra própria, do recebimento à expedição."
        height={0.8}
        cover={1.5}
      />

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Operação no galpão</p>
          <h2 className="sec-title">
            O que garante que sua carga está segura aqui
          </h2>
          <NumCardGrid>
            {FEATURES_ESTRUTURA.map((f, i) => (
              <NumberedCard
                key={f.titulo}
                index={i}
                tone={TONES[i % 3]}
                title={
                  "tip" in f && f.tip ? (
                    <>
                      <Tooltip term={f.tip.term} tip={f.tip.text} /> vigente
                    </>
                  ) : (
                    f.titulo
                  )
                }
                text={f.texto}
                icon={<SegmentIcon name={f.icon} className="text-verde" />}
                proof={"proof" in f ? f.proof : undefined}
              />
            ))}
          </NumCardGrid>
        </div>
      </RevealSection>

      <CtaBand
        title="Vamos dimensionar sua armazenagem?"
        description="Envie o volume, o perfil dos produtos e a frequência de movimentação. A RC prepara uma proposta adequada à sua demanda."
        cta="Agendar visita"
        href="/orcamento"
      />
    </>
  );
}
