import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { CertLine } from "@/components/CertLine";
import { CertWall } from "@/components/CertWall";
import { CompareTable } from "@/components/CompareTable";
import { CrossLink } from "@/components/CrossLink";
import { CutawayFlow } from "@/components/CutawayFlow";
import { JsonLdScript } from "@/components/JsonLdScript";
import { RevealSection } from "@/components/RevealSection";
import { SegmentCarousel } from "@/components/SegmentCarousel";
import { SegmentIcon } from "@/components/Icons";
import { StatRow } from "@/components/StatRow";
import { Testimonials } from "@/components/Testimonials";
import { faqPageJsonLd } from "@/lib/schema";
import { COMPLIANCE_DESTAQUE, COMPLIANCE_INTRO, FAQ, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={faqPageJsonLd()} />
      <section
        id="hero"
        className="bg-[linear-gradient(160deg,#E9F2ED,#fff_65%)]"
      >
        <div className="shell grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-6 lg:py-[54px]">
          <div>
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              Grupo RC
            </p>
            <h1 className="mt-2 max-w-[440px] font-display text-[clamp(27px,3.6vw,40px)] font-extrabold leading-[1.12] text-texto">
              Um grupo. Do galpão à entrega.
            </h1>
            <p className="mt-3.5 max-w-[400px] text-[14.5px] text-mono-ink">
              Sem repasse entre empresas. A mesma operação que guarda a carga
              também organiza o transporte.
            </p>
            <Link
              href="/estrutura"
              className="btn mt-[22px] inline-block rounded-[9px] bg-ambar px-[22px] py-3 text-[13.5px] font-semibold"
            >
              Conhecer estrutura
            </Link>
          </div>

          <div className="hero-media clip-ortho h-[220px] sm:h-[240px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets-visuais/hero-armazenagem-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/assets-visuais/hero-armazenagem.mp4" type="video/mp4" />
            </video>
            <div className="stat-chip">
              <b>25</b>
              <span>anos de grupo RC</span>
            </div>
          </div>
        </div>
      </section>

      <RevealSection>
        <CrossLink compact />
      </RevealSection>

      <RevealSection alt>
        <div className="shell">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Números
          </h2>
          <StatRow />
        </div>
      </RevealSection>

      <RevealSection>
        <div className="shell">
          <h2 className="font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Como funciona
          </h2>
          <p className="mt-2 max-w-xl text-[14px] text-mono-ink">
            Três etapas, um mesmo responsável do início ao fim.
          </p>
          <div className="mt-[18px]">
            <CutawayFlow compact />
            <Link
              href="/como-funciona"
              className="mt-4 inline-block text-[13px] font-semibold text-verde-escuro"
            >
              Ver o fluxo completo →
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection alt>
        <div className="shell">
          <p className="mb-2 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Por que escolher a RC Armazenagem
          </p>
          <h2 className="mb-5 font-display text-[22px] font-extrabold">
            Um fornecedor, do início ao fim
          </h2>
          <CompareTable />
        </div>
      </RevealSection>

      <RevealSection>
        <div className="shell">
          <div className="mb-6 max-w-2xl">
            <p className="mb-2 font-mono text-[14px] tracking-[0.08em] text-mono-ink uppercase">
              Segmentos
            </p>
            <h2 className="font-display text-[22px] font-extrabold">
              Cosméticos · Saneantes · Correlatos · Químicos · Medicamentos
            </h2>
          </div>
          <SegmentCarousel />
        </div>
      </RevealSection>

      <RevealSection alt>
        <div className="shell">
          <h2 className="mb-2 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Compliance
          </h2>
          <p className="mb-4 max-w-xl text-[14px] text-mono-ink">
            {COMPLIANCE_INTRO}
          </p>
          <div className="comp-chip-row mb-6">
            {COMPLIANCE_DESTAQUE.map((c) => (
              <span key={c.titulo} className="comp-chip-ic">
                <SegmentIcon name={c.icon} />
                {c.titulo}
              </span>
            ))}
          </div>
          <CertWall />
          <CertLine />
          <Link
            href="/compliance"
            className="mt-4 inline-block text-[13px] font-semibold text-verde-escuro"
          >
            Ver certificações →
          </Link>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="shell">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            FAQ
          </h2>
          <div className="divide-y divide-borda border-y border-borda">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-3.5">
                <summary className="cursor-pointer list-none text-[14px] font-semibold marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="font-mono text-[12px] text-mono-ink group-open:hidden">
                      +
                    </span>
                    <span className="hidden font-mono text-[12px] text-mono-ink group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-2 max-w-[640px] text-[13.5px] text-mono-ink">
                  {item.a}
                </p>
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

      <RevealSection alt>
        <div className="shell">
          <h2 className="mb-4 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Depoimentos
          </h2>
          <Testimonials />
        </div>
      </RevealSection>

      <RevealSection>
        <div className="shell">
          <p className="mb-2 font-mono text-[12px] tracking-[0.08em] text-mono-ink uppercase">
            Estrutura
          </p>
          <h2 className="font-display text-[22px] font-extrabold">
            O galpão por trás da operação
          </h2>
          <p className="mt-2 mb-5 max-w-[640px] text-[14.5px] text-mono-ink">
            Dimensionado pra produto regulado. Não é galpão genérico adaptado.
            Corredores largos, sinalização de segurança em cada zona, e todo o
            processo documentado do recebimento à expedição.
          </p>
          <BentoGrid href="/estrutura" />
        </div>
      </RevealSection>
    </>
  );
}
