import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SegmentIcon } from "@/components/Icons";
import { CERTS_COMPLETAS, COMPLIANCE_DESTAQUE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Licença ANVISA, controle de acesso, auditoria de lote, ISO 9001, SASSMAQ, CRF, AVCB e IBAMA para armazenagem de carga regulada.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Guardar produto controlado exige mais que espaço."
        description="Exige processo — e processo se documenta."
      />

      <section className="px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-6 max-w-[560px] text-[14.5px] text-mono-ink">
            Guardar produto controlado exige mais que espaço. Exige processo.
          </p>
          <div className="flex flex-col gap-4">
            {COMPLIANCE_DESTAQUE.map((c) => (
              <article
                key={c.titulo}
                className="flex items-start gap-3.5 rounded-[12px] border border-borda bg-card p-4"
              >
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#E7EFF7] text-verde">
                  <SegmentIcon name={c.icon} className="h-[22px] w-[22px]" />
                </div>
                <div>
                  <h2 className="text-[14px] font-semibold">{c.titulo}</h2>
                  <p className="mt-0.5 text-[12.5px] text-mono-ink">{c.texto}</p>
                  {"pendente" in c && c.pendente ? (
                    <span className="mt-2 inline-block rounded-[8px] border border-dashed border-borda px-2 py-0.5 font-mono text-[10px] text-mono-ink">
                      confirmar se aplicável
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Certificações da operação
          </h2>
          <div className="flex flex-wrap gap-2">
            {CERTS_COMPLETAS.map((n) => (
              <span
                key={n}
                className="rounded-[8px] border border-borda bg-[#EEF3F8] px-3 py-2 font-mono text-[11px] text-azul-escuro"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Precisa da documentação para auditoria própria?"
        cta="Solicitar documentos"
        href="/orcamento"
      />
    </>
  );
}
