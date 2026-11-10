import Link from "next/link";
import { CertMarquee } from "@/components/CertMarquee";
import { CrossLink } from "@/components/CrossLink";
import { CtaBand } from "@/components/CtaBand";
import { HeroCinematicVideo } from "@/components/HeroCinematicVideo";
import { HomeCare } from "@/components/HomeCare";
import { HomeDifferentials } from "@/components/HomeDifferentials";
import { JsonLdScript } from "@/components/JsonLdScript";
import { RevealSection } from "@/components/RevealSection";
import { ScrollScene } from "@/components/ScrollScene";
import { SegmentCarousel } from "@/components/SegmentCarousel";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SplitMedia } from "@/components/SplitMedia";
import { StatsBand } from "@/components/StatsBand";
import { isSiteUnderConstruction } from "@/lib/construction";
import { faqPageJsonLd } from "@/lib/schema";
import { FAQ, FOTOS_ESTRUTURA, FOTOS_GALPAO, SERVICOS, SITE } from "@/lib/site";

const UNDER_CONSTRUCTION = isSiteUnderConstruction();

const HOME_STATS = [
  {
    value: "WMS",
    label: "Controle de estoque",
    hint: "Posição, lote e validade registrados no Senior.",
  },
  {
    value: "SP + Jundiaí",
    label: "Bases próprias",
    hint: "Unidades para receber, guardar e expedir com o mesmo padrão.",
  },
  {
    value: "24/7",
    label: "Monitoramento do galpão",
    hint: "Acesso e operação acompanhados de ponta a ponta.",
  },
  {
    value: "8",
    label: "Segmentos de expertise",
    hint: "Processo próprio para cada categoria regulada.",
  },
] as const;

const HIGHLIGHTS = [
  "Base estruturada em São Paulo e Jundiaí",
  "Recebimento em horário comercial",
  "Armazenagem e transporte no mesmo grupo",
] as const;

const SERVICE_SLIDES = [
  {
    title: "Armazenagem regulada",
    text: "Galpão com segregação por classe, WMS por lote e documentação pronta para auditoria.",
  },
  ...SERVICOS.map((s) => ({
    title: s.titulo,
    text: s.texto,
  })),
  {
    title: "Transporte RC",
    text: "Saída na frota do Grupo RC, com a mesma exigência documental do galpão.",
    href: SITE.transportesUrl,
    external: true,
    cta: "Ver Transportes →",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={faqPageJsonLd()} />
      <section id="hero" className="hero-cinematic relative isolate overflow-hidden">
        <HeroCinematicVideo
          src="/assets-visuais/hero-home-16x9.mp4"
          poster="/assets-visuais/hero-home-16x9-poster.jpg"
          mobile={{
            src: "/assets-visuais/hero-home-9x16.mp4",
            poster: "/assets-visuais/hero-home-9x16-poster.jpg",
          }}
        />

        <div className="hero-cinematic__content shell relative z-10 flex items-center">
          <div className="hero-cinematic__copy">
            <p className="hero-eyebrow">Armazenagem regulada do Grupo RC</p>
            <h1 className="font-display font-extrabold text-white">
              Sua operação de armazenagem com{" "}
              <span className="accent">mais controle e menos repasse</span>
            </h1>
            <p className="hero-lead">
              Soluções de armazenagem para carga regulada, com rastreio por lote,
              licenças vigentes e a mesma exigência documental da RC Transportes.
              Um grupo do galpão à entrega.
            </p>
            {UNDER_CONSTRUCTION ? null : (
              <div className="hero-cinematic__actions">
                <Link href="/orcamento" className="btn-pill btn-pill--solid">
                  Fale com nosso time
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <CertMarquee />

      <RevealSection className="sec-compact" stagger>
        <div className="shell">
          <StatsBand items={HOME_STATS} />
          <ul className="home-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <SplitMedia
        eyebrow="Sobre nós"
        title="A extensão logística do seu negócio"
        image={{
          src: FOTOS_ESTRUTURA[0].src,
          alt: FOTOS_ESTRUTURA[0].alt,
        }}
        cover={1.55}
      >
        <p>
          A RC Armazém faz parte do Grupo RC para eliminar a complexidade de
          guardar carga regulada com um fornecedor à parte. A mesma lógica de
          rastreabilidade e documentação que você já conhece no transporte
          agora cobre o galpão.
        </p>
        <p>
          Operamos com segregação por zona, WMS Senior por lote e licenças da
          Polícia Federal, Polícia Civil, Bombeiros e IBAMA. A habilitação
          ANVISA está em processo de regularização.
        </p>
      </SplitMedia>

      <RevealSection alt className="sec-compact">
        <div className="shell">
          <div className="mb-7 max-w-2xl">
            <p className="sec-label">Serviços</p>
            <h2 className="sec-title">
              Soluções integradas para a sua cadeia de suprimentos
            </h2>
            <p className="mt-2 text-[14.5px] text-mono-ink">
              Do armazenamento à expedição, com serviços de manuseio no mesmo
              padrão de compliance.
            </p>
          </div>
          <ServicesCarousel items={SERVICE_SLIDES} />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <div className="shell">
          <div className="mb-7 max-w-2xl">
            <p className="sec-label">Quem atendemos</p>
            <h2 className="sec-title">
              Expertise para o seu segmento e cuidado com a sua carga
            </h2>
            <p className="mt-2 text-[14.5px] text-mono-ink">
              Cada operação é única. Adaptamos processo, segregação e
              documentação às exigências do seu setor.
            </p>
          </div>
          <SegmentCarousel />
        </div>
      </RevealSection>

      <RevealSection alt className="sec-compact">
        <div className="shell">
          <HomeCare />
        </div>
      </RevealSection>

      <RevealSection className="sec-compact" stagger>
        <div className="shell">
          <div className="mb-7 max-w-2xl">
            <p className="sec-label">Diferenciais</p>
            <h2 className="sec-title">
              O que otimiza a sua operação no galpão
            </h2>
            <p className="mt-2 text-[14.5px] text-mono-ink">
              Controles e processos pensados para carga regulada, com o mesmo
              rigor do transporte RC.
            </p>
          </div>
          <HomeDifferentials />
        </div>
      </RevealSection>

      <ScrollScene
        image={{
          src: FOTOS_GALPAO.corredor.src,
          alt: FOTOS_GALPAO.corredor.alt,
        }}
        eyebrow="Estrutura"
        title="Armazenagem estratégica, com fluxo bem organizado"
        description="Corredores largos, endereçamento no WMS e segregação por classe. O processo fica registrado do recebimento à expedição."
        height={0.82}
        cover={1.5}
      />

      <RevealSection alt className="sec-compact">
        <div className="shell">
          <h2 className="sec-title mb-2">Perguntas frequentes</h2>
          <p className="mb-5 max-w-xl text-[14.5px] text-mono-ink">
            Licenças, escopo de produto, rastreio e visita ao galpão.
          </p>
          <div className="faq-fly">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="font-mono text-[12px] text-mono-ink">
                      +
                    </span>
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="faq-cta">
            <span>Não achou sua pergunta aqui?</span>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale no WhatsApp →
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="sec-compact">
        <CrossLink compact />
      </RevealSection>

      {UNDER_CONSTRUCTION ? null : (
        <CtaBand
          title="Pronto para reduzir a complexidade da sua armazenagem?"
          description="A RC Armazém assume a guarda regulada para você focar no crescimento do negócio. Fale agora com o comercial."
          cta="Solicitar orçamento"
          href="/orcamento"
        />
      )}
    </>
  );
}
