import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Solicite orçamento de armazenagem de carga regulada. Transporte incluso por padrão — um único fornecedor do recebimento à entrega.",
};

export default function OrcamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Diga o tipo de produto e o volume estimado."
        description="Retornamos com proposta de armazenagem. Transporte RC já vem marcado — desmarque só se a carga chegar por conta própria."
      />
      <section className="px-4 py-9 sm:px-7">
        <div className="mx-auto max-w-[640px] rounded-[16px] border border-borda bg-card p-5 sm:p-8">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
