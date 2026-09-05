import type { Metadata } from "next";
import { CertLine } from "@/components/CertLine";
import { CertWall } from "@/components/CertWall";
import { ComplianceGroups } from "@/components/ComplianceGroups";
import { ComplianceSeal } from "@/components/ComplianceSeal";
import { CtaBand } from "@/components/CtaBand";
import { RevealSection } from "@/components/RevealSection";
import { COMPLIANCE_INTRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compliance e Certificações",
  description:
    "Licença ANVISA, registro CETESB, FISPQ por produto. Veja as certificações da operação de armazenagem regulada.",
};

export default function CompliancePage() {
  return (
    <>
      <section className="compliance-hero">
        <div className="shell compliance-hero-grid">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              Compliance
            </p>
            <h1>Guardar produto controlado exige mais que espaço.</h1>
            <p>{COMPLIANCE_INTRO}</p>
          </div>
          <ComplianceSeal />
        </div>
      </section>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Como garantimos isso</p>
          <ComplianceGroups />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Certificações da operação</p>
          <CertWall />
          <CertLine />
        </div>
      </RevealSection>

      <CtaBand
        title="Precisa da documentação para auditoria própria?"
        cta="Solicitar documentos"
        href="/orcamento"
      />
    </>
  );
}
