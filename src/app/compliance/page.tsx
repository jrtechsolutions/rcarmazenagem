import type { Metadata } from "next";
import { CertWall } from "@/components/CertWall";
import { ComplianceGroups } from "@/components/ComplianceGroups";
import { ComplianceProcess } from "@/components/ComplianceProcess";
import { ComplianceProofs } from "@/components/ComplianceProofs";
import { ComplianceSeal } from "@/components/ComplianceSeal";
import { CtaBand } from "@/components/CtaBand";
import { RevealSection } from "@/components/RevealSection";
import { COMPLIANCE_INTRO, COMPLIANCE_PROOFS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compliance e Certificações",
  description:
    "Licença ANVISA, registro CETESB, IBAMA, Polícia Federal e AVCB. Veja as certificações da operação de armazenagem regulada.",
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
                <strong>{COMPLIANCE_PROOFS.length}+</strong>
                <span>licenças em evidência</span>
              </li>
              <li>
                <strong>ISO 9001</strong>
                <span>gestão auditada</span>
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
