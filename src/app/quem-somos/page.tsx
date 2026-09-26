import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertLine } from "@/components/CertLine";
import { CertWall } from "@/components/CertWall";
import { CrossLink } from "@/components/CrossLink";
import { CtaBand } from "@/components/CtaBand";
import { GestaoIntegrada } from "@/components/GestaoIntegrada";
import { GoogleUnitMaps } from "@/components/GoogleUnitMaps";
import { RevealSection } from "@/components/RevealSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "A RC Armazém é a extensão do Grupo RC pra armazenagem regulada: mesma rastreabilidade, ANVISA e CETESB, em São Paulo e Jundiaí.",
};

const AUDIENCIA = [
  {
    titulo: "Indústria cosmética",
    texto:
      "Armazenagem com licença ANVISA e controle de acesso por área.",
    icon: "flask" as const,
  },
  {
    titulo: "Indústria química",
    texto:
      "Registro CETESB, FISPQ por produto, segregação por classe de risco.",
    icon: "beaker" as const,
  },
  {
    titulo: "Distribuidoras farmacêuticas",
    texto: "Medicamentos e correlatos, com FEFO aplicado por lote.",
    icon: "pill" as const,
  },
  {
    titulo: "Indústria de saneantes",
    texto:
      "Domissanitários e produtos de risco controlado, área segregada.",
    icon: "flame" as const,
  },
] as const;

const QS_STATS = [
  { value: String(SITE.founded), label: "Fundação do grupo" },
  { value: "11", label: "Segmentos atendidos" },
  { value: "ANVISA", label: "Licença sanitária" },
  { value: "SP + Jundiaí", label: "Bases próprias" },
] as const;

function AudienceIcon({ name }: { name: (typeof AUDIENCIA)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
  };

  if (name === "flask") {
    return (
      <svg {...common}>
        <path d="M9 3h6M10 3v4l-3 4v9a1 1 0 001 1h8a1 1 0 001-1v-9l-3-4V3" />
      </svg>
    );
  }
  if (name === "beaker") {
    return (
      <svg {...common}>
        <path d="M9 3h6M10 3v5l-5 9a1.5 1.5 0 001.3 2.2h11.4A1.5 1.5 0 0018 17l-5-9V3" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    );
  }
  if (name === "pill") {
    return (
      <svg {...common}>
        <rect
          x="3.5"
          y="9"
          width="17"
          height="7"
          rx="3.5"
          transform="rotate(-35 12 12)"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3c3 4 6 7.5 6 11a6 6 0 01-12 0c0-3.5 3-7 6-11z" />
    </svg>
  );
}

export default function QuemSomosPage() {
  return (
    <>
      <section className="qs-hero">
        <div className="qs-hero__bg" aria-hidden />
        <div className="shell qs-hero__copy">
          <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
            Desde {SITE.founded} · 25 anos
          </p>
          <h1>Bem-vindo à RC Armazém.</h1>
          <p>
            Armazenagem regulada do Grupo RC: galpão certificado, rastreio por
            lote e o mesmo padrão de documentação que já confiam no transporte.
          </p>
        </div>
      </section>

      <RevealSection className="sec-compact">
        <div className="shell">
          <div className="qs-split">
            <div className="qs-story">
              <p className="sec-label">Um pouco da nossa história</p>
              <p>
                A RC Armazém nasceu de uma necessidade real dentro do{" "}
                <strong>Grupo RC</strong>: conforme a operação de transporte
                crescia, ficou claro que armazenagem regulada precisava fazer
                parte da mesma responsabilidade — não de um fornecedor à parte.
              </p>
              <p>
                Hoje, os 25 anos de experiência do grupo em carga regulada
                sustentam também a operação do galpão. Mesma exigência de
                documentação, mesma lógica de rastreabilidade, aplicada ao
                armazenamento.
              </p>
              <p>
                Atendemos 11 segmentos com processo próprio, com licença ANVISA
                e registro CETESB, em unidades próprias em São Paulo e Jundiaí.
                A frota continua sob a{" "}
                <a
                  href={SITE.transportesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RC Transportes
                </a>
                ; o galpão, sob a RC Armazém — um grupo, duas frentes, uma
                cadeia.
              </p>
            </div>
            <div className="qs-photo clip-ortho">
              <Image
                src="/assets-estrutura/estrutura-fachada.jpg"
                alt="Fachada do galpão RC Armazém"
                width={640}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ul className="qs-stats">
            {QS_STATS.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Grupo RC</p>
          <h2 className="sec-title compliance-sec-title">
            Transporte e armazenagem sob o mesmo padrão
          </h2>
          <div className="qs-group">
            <article className="qs-group-card qs-group-card--green">
              <span className="qs-group-card__label">RC Armazém</span>
              <h3>Onde a carga fica sob controle</h3>
              <p>
                Galpão com segregação por classe, WMS por lote e documentação
                pronta para auditoria.
              </p>
              <Link href="/estrutura" className="qs-group-card__cta">
                Ver estrutura →
              </Link>
            </article>
            <article className="qs-group-card qs-group-card--blue">
              <span className="qs-group-card__label">RC Transportes</span>
              <h3>Onde a carga segue em movimento</h3>
              <p>
                Frota própria e rastreio em tempo real. A mesma cadeia que
                guardou o lote também leva até o destino.
              </p>
              <a
                href={SITE.transportesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="qs-group-card__cta"
              >
                Ver frota →
              </a>
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Identidade organizacional</p>
          <GestaoIntegrada />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Certificações</p>
          <CertWall />
          <CertLine />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <p className="sec-label">Quem atendemos</p>
          <div className="audience-grid">
            {AUDIENCIA.map((item) => (
              <article key={item.titulo} className="audience-item">
                <div className="aud-ic">
                  <AudienceIcon name={item.icon} />
                </div>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" alt>
        <div className="shell">
          <p className="sec-label">Nossas unidades</p>
          <GoogleUnitMaps />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <CrossLink compact />
      </RevealSection>

      <CtaBand
        title="Quer armazenar com a RC?"
        cta="Solicitar orçamento"
        href="/orcamento"
      />
    </>
  );
}
