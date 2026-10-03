import type { Metadata } from "next";
import { CertWall } from "@/components/CertWall";
import { ComplianceGroups } from "@/components/ComplianceGroups";
import { ComplianceProcess } from "@/components/ComplianceProcess";
import { ComplianceProofs } from "@/components/ComplianceProofs";
import { ComplianceSeal } from "@/components/ComplianceSeal";
import { CtaBand } from "@/components/CtaBand";
import { RevealSection } from "@/components/RevealSection";
import {
  COMPLIANCE_INTRO,
  COMPLIANCE_PROOFS,
  FOTOS_GALPAO,
} from "@/lib/site";

const { extintor, placas } = FOTOS_GALPAO;

export const metadata: Metadata = {
  title: "Compliance e Certificações",
  description:
    "Licenças da Polícia Federal, Polícia Civil, Corpo de Bombeiros (AVCB) e IBAMA, com ANVISA em processo de regularização. Veja as licenças da operação de armazenagem regulada.",
};

export default function CompliancePage() {
  return (
    <>
      <section className="compliance-hero">
        <div className="compliance-hero__bg" aria-hidden />
        <div className="shell compliance-hero-grid">
          <div className="compliance-hero__copy">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              Compliance
            </p>
            <h1>Guardar produto controlado exige mais que espaço.</h1>
            <p>{COMPLIANCE_INTRO}</p>
            <ul className="compliance-hero__stats">
              <li>
                <strong>
                  {COMPLIANCE_PROOFS.filter((p) => !("status" in p)).length}
                </strong>
                <span>licenças vigentes</span>
              </li>
              <li>
                <strong>24h</strong>
                <span>monitoramento do galpão</span>
              </li>
              <li>
                <strong>Ponta a ponta</strong>
                <span>do recebimento à auditoria</span>
              </li>
            </ul>
          </div>
          <ComplianceSeal />
        </div>
      </section>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Quem autoriza a operação</p>
          <h2 className="sec-title compliance-sec-title">
            Licenças que sustentam a armazenagem regulada
          </h2>
          <ComplianceProofs />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Como opera na prática</p>
          <h2 className="sec-title compliance-sec-title">
            Do recebimento à documentação sob demanda
          </h2>
          <ComplianceProcess />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Controles internos</p>
          <h2 className="sec-title compliance-sec-title">
            Emergência, acesso e documentação técnica
          </h2>
          <div className="proof-photos">
            <div className="proof-photos__copy">
              <h3>Evidência no chão do galpão</h3>
              <p>
                Fotos reais da operação: extintor e sinalização de EPI
                obrigatório presos no rack, regras da área operacional
                sinalizadas na expedição.
              </p>
            </div>
            {[extintor, placas].map((foto) => (
              <div key={foto.src} className="sp-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  width={340}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <span className="lbl">{foto.label}</span>
              </div>
            ))}
          </div>
          <ComplianceGroups />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Certificações da operação</p>
          <h2 className="sec-title compliance-sec-title">
            Muro completo de selos e habilitações
          </h2>
          <CertWall />
        </div>
      </RevealSection>

      <CtaBand
        title="Precisa do pacote de documentos para auditoria?"
        cta="Solicitar pasta de compliance"
        href="/orcamento"
      />
    </>
  );
}
