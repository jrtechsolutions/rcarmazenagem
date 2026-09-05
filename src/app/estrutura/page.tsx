import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { NumberedCard, NumCardGrid } from "@/components/NumberedCard";
import { RevealSection } from "@/components/RevealSection";
import { SegmentIcon } from "@/components/Icons";
import { StatRow } from "@/components/StatRow";
import { FEATURES_ESTRUTURA, FOTOS_ESTRUTURA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estrutura do Galpão",
  description:
    "Galpão dimensionado pra produto regulado, com corredores largos e sinalização por zona. Conheça a estrutura.",
};

const TONES = ["t1", "t2", "t3"] as const;
const [, corredor, expedicao] = FOTOS_ESTRUTURA;

export default function EstruturaPage() {
  return (
    <>
      <section className="photo-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets-estrutura/estrutura-fachada.jpg"
          alt="Fachada do galpão RC Armazenagem"
        />
        <div className="photo-hero-content">
          <div className="shell">
            <p className="eyebrow">Estrutura</p>
            <h1>O galpão por trás da operação.</h1>
            <p>
              Feito pra carga que não pode misturar. Cada zona com regra
              própria. Do recebimento à expedição, o processo fica registrado.
              Espaço físico com disciplina de operação.
            </p>
          </div>
        </div>
      </section>

      <StatRow variant="strip" />

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Por dentro</p>
          <div className="support-photos">
            <div className="sp-item sp-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={corredor.src} alt={corredor.alt} />
              <span className="lbl">Porta-paletes e circulação por zona</span>
            </div>
            <div className="sp-side">
              <div className="sp-item sp-side-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={expedicao.src} alt={expedicao.alt} />
                <span className="lbl">Saída já na frota RC</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

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
                title={f.titulo}
                text={f.texto}
                icon={<SegmentIcon name={f.icon} className="text-verde" />}
                proof={"proof" in f ? f.proof : undefined}
              />
            ))}
          </NumCardGrid>
        </div>
      </RevealSection>

      <CtaBand
        title="Quer visitar o galpão antes de fechar?"
        cta="Agendar visita"
        href="/orcamento"
      />
    </>
  );
}
