import type { Metadata } from "next";
import { ConfirmationView } from "@/components/ConfirmationView";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitação recebida",
  robots: { index: false, follow: false },
};

export default function ConfirmacaoPage() {
  return (
    <ConfirmationView
      tone="azul"
      description="Enquanto isso, veja como funciona o Transporte RC: sua carga sai do nosso galpão direto na frota."
      ctaHref={SITE.transportesUrl}
      ctaLabel="Ver Transporte →"
      ctaExternal
    />
  );
}
