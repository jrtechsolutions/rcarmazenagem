import { SITE } from "@/lib/site";

export function CrossLink() {
  return (
    <div className="px-4 py-2 sm:px-7">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 rounded-[14px] border border-[#CCDCEA] bg-[linear-gradient(120deg,#E7EFF7,#fff)] px-[26px] py-[22px]">
        <div>
          <h2 className="font-display text-[17px] font-extrabold text-texto">
            Armazenagem e transporte, numa só operação
          </h2>
          <p className="mt-1 max-w-[420px] text-[12.5px] text-mono-ink">
            Sua carga sai do nosso galpão direto na nossa frota. Você não
            coordena dois fornecedores, não perde rastreabilidade na troca, não
            paga por uma intermediação a mais.
          </p>
        </div>
        <a
          href={SITE.transportesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[9px] bg-azul px-[18px] py-[11px] text-[13px] font-semibold whitespace-nowrap text-white"
        >
          Ver frota de Transportes →
        </a>
      </div>
    </div>
  );
}
