import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealSection } from "@/components/RevealSection";
import { SEGMENTOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Solicite orçamento de armazenagem de carga regulada. Transporte incluso por padrão: um único fornecedor do recebimento à entrega.",
};

type Props = {
  searchParams: Promise<{ segmento?: string | string[] }>;
};

export default async function OrcamentoPage({ searchParams }: Props) {
  const { segmento } = await searchParams;
  const tipoCarga = SEGMENTOS.some((s) => s.id === segmento)
    ? (segmento as string)
    : "";

  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Diga o tipo de produto e o volume estimado."
        description="Retornamos com proposta de armazenagem. Transporte RC já vem marcado: desmarque só se a carga chegar por conta própria."
      />
      <RevealSection alt>
        <div className="shell">
          <div className="mx-auto max-w-[640px] rounded-[16px] border border-borda bg-card p-5 sm:p-8">
            <QuoteForm tipoCarga={tipoCarga} />
          </div>
        </div>
      </RevealSection>
    </>
  );
}
