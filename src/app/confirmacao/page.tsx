import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitação recebida",
  robots: { index: false, follow: false },
};

export default function ConfirmacaoPage() {
  return (
    <section className="px-4 py-16 sm:px-7">
      <div className="mx-auto max-w-[640px]">
        <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
          Orçamento
        </p>
        <h1 className="mt-2 font-display text-[clamp(24px,3vw,33px)] font-extrabold">
          Recebemos sua solicitação.
        </h1>
        <p className="mt-3 text-[15px] text-mono-ink">
          Enquanto isso, veja nossa frota e áreas de cobertura →
        </p>
        <a
          href={SITE.transportesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-[9px] bg-azul px-[18px] py-[11px] text-[13px] font-semibold text-white"
        >
          Ver frota e cobertura →
        </a>
        <div className="mt-6">
          <Link href="/" className="text-[13px] text-verde-escuro">
            Voltar para a home
          </Link>
        </div>
      </div>
    </section>
  );
}
