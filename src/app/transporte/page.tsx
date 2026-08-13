import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SEGMENTOS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transporte",
  description:
    "A carga sai do galpão direto na frota RC: cosméticos, saneantes, correlatos, químicos e medicamentos. Mesma operação, mesmo rastreio.",
};

export default function TransportePage() {
  return (
    <>
      <PageHero
        eyebrow="Transporte"
        title="A carga sai do galpão direto na frota RC."
        description="Sem coordenar dois fornecedores. Sem perder rastreabilidade na troca. É a mesma operação."
      />

      <section className="px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px]">
          <p className="mb-6 max-w-[560px] text-[14.5px] text-mono-ink">
            Frota própria, motoristas treinados para carga controlada, rastreio
            em tempo real. Cosméticos, saneantes, correlatos, químicos
            (produtos perigosos, controlados e inflamáveis) e medicamentos /
            produtos hospitalares.
          </p>
          <div className="flex flex-wrap gap-2">
            {SEGMENTOS.map((s) => (
              <span
                key={s.id}
                className="rounded-[8px] border border-borda bg-card px-3 py-2 text-[13px]"
              >
                {s.nome}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borda px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[1120px] rounded-[16px] border border-[#CCDCEA] bg-[linear-gradient(120deg,#E7EFF7,#fff)] p-6 sm:p-8">
          <h2 className="font-display text-[20px] font-extrabold">
            Veja frota e cobertura no site de Transportes
          </h2>
          <p className="mt-2 max-w-[480px] text-[14px] text-mono-ink">
            Carreta, toco, 3/4, VUC, truck e container. Rotas em São Paulo,
            Jundiaí, Campinas e região — no domínio que já rankeia esse serviço.
          </p>
          <a
            href={SITE.transportesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-[9px] bg-azul px-[18px] py-[11px] text-[13px] font-semibold text-white"
          >
            Ver frota de Transportes →
          </a>
        </div>
      </section>

      <CtaBand
        title="Quer armazenagem e transporte na mesma proposta?"
        cta="Solicitar orçamento"
        href="/orcamento"
      />
    </>
  );
}
