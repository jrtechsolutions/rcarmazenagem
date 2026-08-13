import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { RackMotif } from "@/components/RackMotif";
import { SegmentIcon } from "@/components/Icons";
import { FEATURES_ESTRUTURA, FOTOS_ESTRUTURA, NUMEROS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estrutura",
  description:
    "O galpão por trás da operação: área, porta-paletes, controle de acesso, WMS e prevenção de incêndio para carga regulada.",
};

export default function EstruturaPage() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura"
        title="O galpão por trás da operação."
        description="Dimensionado pra produto regulado, não pra caixa qualquer."
      />

      <section className="px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-6 max-w-[640px] text-[14.5px] text-mono-ink">
            <span className="font-mono text-verde-escuro">[inserir metragem real]</span>{" "}
            de área, controle de acesso,{" "}
            <span className="font-mono text-verde-escuro">
              [inserir se há climatização/controle de temperatura]
            </span>
            . Estrutura dimensionada pra produto regulado, não pra caixa qualquer.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {NUMEROS.map((n) => (
              <div
                key={n.label}
                className="rounded-[12px] border border-borda bg-card p-4 text-center"
              >
                <b className="font-display text-[22px] text-verde-escuro">
                  {n.valor}
                </b>
                <span className="mt-1 block text-[11.5px] text-mono-ink">
                  {n.label}
                </span>
                {n.pendente ? (
                  <span className="mt-2 inline-block rounded-[8px] border border-dashed border-borda px-2 py-0.5 font-mono text-[10px] text-mono-ink">
                    pendente de confirmação
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <RackMotif labeled />
            <div className="grid gap-3 sm:grid-cols-3">
              {FOTOS_ESTRUTURA.map((f) => (
                <PhotoFrame
                  key={f.label}
                  alt={f.alt}
                  label={f.label}
                  className="h-[100px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Operação no galpão
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURES_ESTRUTURA.map((f) => (
              <article
                key={f.titulo}
                className="grid grid-cols-[52px_1fr] gap-4 rounded-[12px] border border-borda bg-card p-4"
              >
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#EAF4EE] text-verde">
                  <SegmentIcon name={f.icon} className="h-[26px] w-[26px]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold">{f.titulo}</h3>
                  <p className="mt-1 text-[13px] text-mono-ink">{f.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Quer visitar o galpão antes de fechar?"
        cta="Agendar visita"
        href="/orcamento"
      />
    </>
  );
}
