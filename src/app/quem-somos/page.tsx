import type { Metadata } from "next";
import Link from "next/link";
import { CertLine } from "@/components/CertLine";
import { CertWall } from "@/components/CertWall";
import { CrossLink } from "@/components/CrossLink";
import { CtaBand } from "@/components/CtaBand";
import { GestaoIntegrada } from "@/components/GestaoIntegrada";
import { GoogleUnitMaps } from "@/components/GoogleUnitMaps";
import { PageHeroMedia } from "@/components/PageHeroMedia";
import { RevealSection } from "@/components/RevealSection";
import { ScrollScene } from "@/components/ScrollScene";
import { SplitMedia } from "@/components/SplitMedia";
import { StatsBand } from "@/components/StatsBand";
import { Timeline } from "@/components/Timeline";
import { FOTOS_GALPAO, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "A RC Armazém é a extensão do Grupo RC pra armazenagem regulada: mesma rastreabilidade, licenças da Polícia Federal e Civil, AVCB, IBAMA e WMS Senior, em São Paulo e Jundiaí.",
};

const AUDIENCIA = [
  {
    titulo: "Indústria cosmética",
    texto:
      "Matéria-prima com controle por lote e acesso registrado por área.",
    icon: "flask" as const,
  },
  {
    titulo: "Indústria química",
    texto:
      "Licenças da Polícia Federal e Civil, classes de risco 6, 8 e 9 segregadas.",
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
      "Operação para domissanitários em processo de regularização.",
    icon: "flame" as const,
  },
] as const;

const QS_STATS = [
  {
    value: "8",
    label: "Segmentos atendidos",
    hint: "Processo próprio para cada categoria.",
  },
  {
    value: "WMS Senior",
    label: "Rastreio por lote",
    hint: "Posição, validade e saída FEFO registradas.",
  },
  {
    value: "SP + Jundiaí",
    label: "Bases próprias",
    hint: "Operação com unidades próprias no estado.",
  },
  {
    value: "1 grupo",
    label: "Armazém + Transportes",
    hint: "Mesma exigência documental do início ao fim.",
  },
] as const;

const TIMELINE = [
  {
    year: "Grupo RC",
    title: "Transporte consolidado",
    text: "A RC Transportes consolida frota e rastreio. Fica clara a necessidade de armazenagem sob o mesmo padrão.",
  },
  {
    year: "Galpão",
    title: "RC Armazém",
    text: "A armazenagem regulada passa a integrar o grupo: zonas segregadas, WMS e licenças no mesmo responsável.",
  },
  {
    year: "Processo",
    title: "Compliance no chão",
    text: "Licenças vigentes, farmacêutico responsável técnico e documentação pronta para auditoria.",
  },
  {
    year: "Hoje",
    title: "Cadeia integrada",
    text: "Do recebimento à entrega, uma operação. ANVISA em regularização; demais licenças vigentes.",
  },
] as const;

const PILARES = [
  {
    label: "Missão",
    title: "Guardar carga regulada com clareza",
    text: "Simplificar a armazenagem de insumos regulados com rastreio por lote, segregação por classe e documentação pronta para auditoria.",
  },
  {
    label: "Visão",
    title: "Ser a extensão confiável do Grupo RC",
    text: "Referência B2B em armazenagem regulada integrada ao transporte, sem quebra de cadeia nem custos ocultos de repasse.",
  },
  {
    label: "Valores",
    title: "Rastreio, compliance e responsabilidade",
    text: "Transparência no lote, rigor nas licenças e um único grupo responsável do galpão à entrega.",
  },
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
      <PageHeroMedia
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Quem somos" },
        ]}
        eyebrow="Parte do Grupo RC"
        title="Quem somos"
        description="Conheça a parceira de armazenagem regulada do Grupo RC: galpão certificado, rastreio por lote e o mesmo padrão de documentação do transporte."
        image={{
          src: FOTOS_GALPAO.corredor.src,
          alt: FOTOS_GALPAO.corredor.alt,
        }}
      />

      <div className="page-sheet">
        <RevealSection className="sec-compact" stagger>
          <div className="shell">
            <StatsBand items={QS_STATS} />
          </div>
        </RevealSection>

        <SplitMedia
          eyebrow="Nossa história"
          title="Nascemos para guardar carga regulada sem quebrar a cadeia"
          image={{
            src: FOTOS_GALPAO.identidade.src,
            alt: FOTOS_GALPAO.identidade.alt,
          }}
        >
          <p>
            A RC Armazém nasceu de uma necessidade real dentro do{" "}
            <strong>Grupo RC</strong>: conforme a operação de transporte
            crescia, ficou claro que armazenagem regulada precisava fazer parte
            da mesma responsabilidade, e não de um fornecedor à parte.
          </p>
          <p>
            A experiência do grupo em carga regulada sustenta também a operação
            do galpão. Mesma exigência de documentação, mesma lógica de
            rastreabilidade, aplicada ao armazenamento.
          </p>
          <p>
            Armazenamos cargas de 8 segmentos com processo próprio, licenças da
            Polícia Federal, Polícia Civil, Corpo de Bombeiros e IBAMA e
            farmacêutico responsável técnico, em unidades próprias em São Paulo
            e Jundiaí. A habilitação ANVISA está em processo de regularização. A
            frota continua sob a{" "}
            <a
              href={SITE.transportesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              RC Transportes
            </a>
            ; o galpão, sob a RC Armazém. Um grupo, duas frentes, uma cadeia.
          </p>
        </SplitMedia>

        <RevealSection className="sec-compact" alt stagger>
          <div className="shell">
            <p className="sec-label">Grupo RC</p>
            <h2 className="sec-title">
              Transporte e armazenagem sob o mesmo padrão
            </h2>
            <div className="qs-group mt-5">
              <article className="qs-group-card qs-group-card--green reveal-child">
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
              <article className="qs-group-card qs-group-card--blue reveal-child">
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

        <ScrollScene
          image={{
            src: FOTOS_GALPAO.estocagem.src,
            alt: FOTOS_GALPAO.estocagem.alt,
          }}
          eyebrow="Grupo RC"
          title="Um grupo. Duas frentes. Uma cadeia."
          description="Do recebimento à entrega, a mesma exigência de documentação e rastreabilidade."
          height={0.78}
          cover={1.48}
        />

        <RevealSection className="sec-compact" stagger>
          <div className="shell">
            <p className="sec-label">O que guia a operação</p>
            <h2 className="sec-title mb-5">Missão, visão e valores</h2>
            <div className="pillar-grid">
              {PILARES.map((p) => (
                <article key={p.label} className="pillar-card reveal-child">
                  <span className="pillar-card__label">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection className="sec-compact" alt stagger>
          <div className="shell">
            <p className="sec-label">Trajetória</p>
            <h2 className="sec-title mb-5">Marcos que construíram a operação</h2>
            <Timeline items={TIMELINE} />
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
            <p className="sec-label">Conformidade</p>
            <h2 className="sec-title mb-4">
              Licenças que respaldam a operação
            </h2>
            <CertWall />
            <CertLine />
          </div>
        </RevealSection>

        <RevealSection className="sec-compact" stagger>
          <div className="shell">
            <p className="sec-label">Quem atendemos</p>
            <h2 className="sec-title mb-5">Segmentos com processo próprio</h2>
            <div className="audience-grid">
              {AUDIENCIA.map((item) => (
                <article key={item.titulo} className="audience-item reveal-child">
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
            <h2 className="sec-title mb-5">Onde a operação acontece</h2>
            <GoogleUnitMaps />
          </div>
        </RevealSection>

        <RevealSection className="sec-compact">
          <CrossLink compact />
        </RevealSection>

        <CtaBand
          title="Quer armazenar com a RC?"
          description="Fale com o comercial e dimensionamos espaço, giro e exigências do seu produto."
          cta="Solicitar orçamento"
          href="/orcamento"
        />
      </div>
    </>
  );
}
