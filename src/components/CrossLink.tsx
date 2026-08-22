import { SITE } from "@/lib/site";

type Props = {
  compact?: boolean;
};

export function CrossLink({ compact }: Props) {
  return (
    <div className={compact ? "shell" : "shell py-8"}>
      <div className="crosslink-strong">
        <div>
          <h2 className="font-display font-extrabold">
            Armazenagem e transporte, numa só operação
          </h2>
          <p>
            Sua carga sai do nosso galpão direto na nossa frota. Você não
            coordena dois fornecedores, não perde rastreabilidade na troca, não
            paga por uma intermediação a mais.
          </p>
        </div>
        <a
          href={SITE.transportesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Ver frota de Transportes →
        </a>
      </div>
    </div>
  );
}
