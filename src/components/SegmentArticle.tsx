import Link from "next/link";
import type { ReactNode } from "react";
import { IconCheck, IconChevronRight } from "@/components/Icons";
import { JsonLdScript } from "@/components/JsonLdScript";
import { Tooltip } from "@/components/Tooltip";
import {
  breadcrumbJsonLd,
  segmentBreadcrumbs,
  serviceJsonLd,
} from "@/lib/schema";
import {
  TIPS,
  type SegmentId,
  type SegmentPage,
  type SegmentRef,
} from "@/lib/seo-segmentos";

function RefValue({ item }: { item: SegmentRef }): ReactNode {
  if (item.tip) {
    return <Tooltip term={item.tip.term} tip={item.tip.text} />;
  }
  return item.label;
}

function SegmentBody({ id }: { id: SegmentId }) {
  switch (id) {
    case "cosmeticos":
      return (
        <>
          <p>
            Marcas e distribuidoras de cosméticos que precisam de armazenagem
            regulada contam com a RC Armazenagem em São Paulo e Jundiaí. O
            galpão tem licença ANVISA e área segregada pra produto cosmético,
            separado de outras categorias de risco diferente.
          </p>
          <p>
            Cada lote de <strong>cosmético regulado</strong> é registrado no{" "}
            <Tooltip term="WMS" tip={TIPS.wms} />, com posição definida por tipo
            de produto e regra de rotatividade (FEFO). O manuseio é feito com
            cuidado específico pra embalagem sensível, evitando avaria comum em
            operação genérica.
          </p>
          <p>
            Atendemos marcas, distribuidoras e indústria de cosméticos que
            precisam de armazenagem certificada, não um depósito adaptado.
          </p>
        </>
      );
    case "saneantes":
      return (
        <>
          <p>
            Indústria e distribuidoras de saneantes e domissanitários armazenam
            com a RC em galpão com estrutura alinhada ao Corpo de Bombeiros,
            adequada pra produto de risco controlado.
          </p>
          <p>
            O <strong>saneante</strong> não fica no mesmo corredor de cosmético
            ou produto químico incompatível. A segregação por classe de risco é
            parte do desenho do galpão, não um ajuste feito depois.
          </p>
          <p>
            Atendemos indústria e distribuidoras que precisam de armazenagem
            certificada pra domissanitários e produtos de limpeza regulados.
          </p>
        </>
      );
    case "correlatos":
      return (
        <>
          <p>
            Distribuidoras de produtos correlatos contam com a RC Armazenagem pra
            manter conformidade com a regulamentação da ANVISA do recebimento
            até a expedição.
          </p>
          <p>
            Cada <strong>correlato</strong> armazenado tem posição rastreada no
            WMS, com auditoria de lote disponível. Não é um depósito genérico que
            também guarda correlato, é uma operação desenhada pra esse tipo de
            produto.
          </p>
          <p>
            Atendemos distribuidoras e indústria de correlatos que precisam de
            armazenagem regulamentada.
          </p>
        </>
      );
    case "quimicos":
      return (
        <>
          <p>
            Indústria e distribuidoras de produtos químicos armazenam com a RC em
            galpão com registro na CETESB, órgão ambiental do estado de São Paulo
            responsável por licenciar esse tipo de operação.
          </p>
          <p>
            Cada <strong>produto químico</strong> tem{" "}
            <Tooltip term="documentação (FISPQ)" tip={TIPS.fispq} /> disponível,
            e a posição no galpão considera classe de risco e incompatibilidade:
            produto corrosivo não fica ao lado de produto oxidante, por exemplo.
            A segregação é física, não só documental.
          </p>
          <p>
            Atendemos indústria química, distribuidoras e importadores que
            precisam de armazenagem regulada, não depósito adaptado.
          </p>
        </>
      );
    case "medicamentos":
      return (
        <>
          <p>
            Farmácias, distribuidoras e laboratórios armazenam medicamentos com a
            RC sem perder rastreabilidade entre o recebimento e a expedição: a
            mesma operação cobre as duas etapas.
          </p>
          <p>
            Cada lote de <strong>medicamento</strong> é registrado no WMS, com
            regra de rotatividade (FEFO) aplicada: o que vence primeiro sai
            primeiro. Isso evita produto vencendo parado no fundo do galpão.
          </p>
          <p>
            Atendemos farmácias, distribuidoras e laboratórios que precisam de
            armazenagem certificada pra medicamento comum e controlado.
          </p>
        </>
      );
  }
}

export function SegmentArticle({ page }: { page: SegmentPage }) {
  const crumbs = segmentBreadcrumbs(page);

  return (
    <>
      <JsonLdScript data={serviceJsonLd(page)} />
      <JsonLdScript data={breadcrumbJsonLd(crumbs)} />

      <section className="bg-[linear-gradient(180deg,#FBFBFA,#fff)] pt-[42px] pb-0">
        <div className="shell mx-auto max-w-[1000px]">
          <nav className="seo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {" / "}
            <span>{page.serviceType}</span>
          </nav>
          <div className="pb-6 pt-5">
            <p className="font-mono text-[11.5px] tracking-[0.08em] text-verde-escuro uppercase">
              {page.eyebrow}
            </p>
            <h1 className="mt-2 max-w-[600px] font-display text-[clamp(22px,3.2vw,30px)] font-extrabold leading-[1.15]">
              {page.h1}
            </h1>
            <p className="mt-2.5 max-w-[560px] text-[13.5px] text-mono-ink">
              {page.lead}
            </p>
          </div>
        </div>
      </section>

      <div className="shell mx-auto max-w-[1000px]">
        <nav className="anchor-nav" aria-label="Nesta página">
          <span>Nesta página:</span>
          <a href="#referencia">Referência</a>
          <a href="#sobre">Sobre o serviço</a>
          <a href="#relacionadas">Relacionadas</a>
        </nav>

        <div className="seo-sp-layout">
          <div className="seo-sp-main min-w-0">
            <section className="seo-sp-sec" id="referencia">
              <h2>Referência da operação</h2>
              <div className="seo-data-row">
                {page.refs.map((ref) => (
                  <div key={ref.hint + ref.label} className="seo-data-box">
                    <b>
                      <RefValue item={ref} />
                    </b>
                    <span>{ref.hint}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="seo-sp-sec" id="sobre">
              <div className="seo-body-copy">
                <SegmentBody id={page.id} />
              </div>
              <div className="vocab-row">
                {page.vocab.map((v) => (
                  <span key={v} className="vocab-chip">
                    {v}
                  </span>
                ))}
              </div>
            </section>

            <section className="seo-sp-sec" id="relacionadas">
              <h2>Páginas relacionadas</h2>
              <div className="related-grid">
                {page.related.map((r) => (
                  <Link key={r.href} href={r.href} className="related-card">
                    <div>
                      <h3>{r.title}</h3>
                      <span className="tag">{r.tag}</span>
                    </div>
                    <IconChevronRight />
                  </Link>
                ))}
              </div>
            </section>

            <section className="seo-sp-sec">
              <div className="trust-badge">
                <IconCheck />
                {page.trust}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-[#CFE3D5] bg-[linear-gradient(120deg,#E9F1F8,#fff)] px-[26px] py-[22px]">
                <b className="font-display text-[16px] font-bold">
                  {page.ctaTitle}
                </b>
                <Link
                  href="/orcamento"
                  className="btn rounded-[9px] bg-ambar px-[18px] py-[11px] text-[13px] font-semibold whitespace-nowrap"
                >
                  Solicitar orçamento
                </Link>
              </div>
            </section>
          </div>

          <aside className="seo-sp-side">
            <div className="sidebar-sticky">
              <span className="sb-label">Referência rápida</span>
              {page.refs.map((ref) => (
                <div key={`sb-${ref.label}`} className="sb-box">
                  <b>{ref.label}</b>
                  <span>{ref.hint}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
