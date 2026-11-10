import type { Metadata } from "next";
import { PageHeroMedia } from "@/components/PageHeroMedia";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealSection } from "@/components/RevealSection";
import { FOTOS_GALPAO, SEGMENTOS } from "@/lib/site";

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
      <PageHeroMedia
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Orçamento" },
        ]}
        eyebrow="Cotação"
        title="Solicite um orçamento"
        description="Diga o tipo de produto e o volume estimado. Retornamos com proposta de armazenagem. Transporte RC já vem marcado: desmarque só se a carga chegar por conta própria."
        image={{
          src: FOTOS_GALPAO.doca.src,
          alt: FOTOS_GALPAO.doca.alt,
        }}
        align="center"
      />

      <div className="page-sheet">
        <RevealSection className="sec-compact">
          <div className="shell">
            <div className="form-surface mx-auto max-w-[680px]">
              <QuoteForm tipoCarga={tipoCarga} />
            </div>
          </div>
        </RevealSection>
      </div>
    </>
  );
}
