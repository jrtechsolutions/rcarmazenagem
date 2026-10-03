import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { CertMarquee } from "@/components/CertMarquee";
import { CrossLink } from "@/components/CrossLink";
import { CutawayFlow } from "@/components/CutawayFlow";
import { HeroCinematicVideo } from "@/components/HeroCinematicVideo";
import { JsonLdScript } from "@/components/JsonLdScript";
import { RevealSection } from "@/components/RevealSection";
import { SegmentCarousel } from "@/components/SegmentCarousel";
import { Testimonials } from "@/components/Testimonials";
import { faqPageJsonLd } from "@/lib/schema";
import { FAQ, SITE } from "@/lib/site";

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
          <div className="hero-cinematic__copy max-w-[540px]">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-white/75 uppercase">
              Armazenagem regulada · desde {SITE.founded}
            </p>
            <h1 className="mt-3 font-display text-[clamp(28px,4.2vw,44px)] font-extrabold leading-[1.1] text-white">
              Um grupo. Do galpão à entrega.
            </h1>
            <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/85">
              Sem repasse entre empresas. A mesma operação que guarda a carga
              também organiza o transporte.
            </p>
            <Link
              href="/estrutura"
              className="btn mt-7 inline-block rounded-[9px] bg-ambar px-[22px] py-3 text-[13.5px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              Conhecer estrutura
            </Link>
          </div>
        </div>
      </section>

      <CertMarquee />

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
          </div>
        </div>
      </RevealSection>

      <RevealSection alt>
        <div className="shell">
          <div className="mb-6 max-w-2xl">
            <p className="mb-2 font-mono text-[14px] tracking-[0.08em] text-mono-ink uppercase">
              Segmentos
            </p>
            <h2 className="font-display text-[22px] font-extrabold">
              Matéria-prima de 9 segmentos, com processo próprio pra cada um
            </h2>
          </div>
          <SegmentCarousel />
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
                  {"link" in item && item.link ? (
                    <>
                      {" "}
                      <Link
                        href={item.link.href}
                        className="font-semibold text-verde-escuro"
                      >
                        {item.link.label}
                      </Link>
                    </>
                  ) : null}
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

      <RevealSection alt>
        <CrossLink compact />
      </RevealSection>
    </>
  );
}
