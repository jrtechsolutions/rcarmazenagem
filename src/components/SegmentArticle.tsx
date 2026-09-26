import Link from "next/link";
import type { ReactNode } from "react";
import { IconCheck, IconChevronRight } from "@/components/Icons";
import { JsonLdScript } from "@/components/JsonLdScript";
import { Tooltip } from "@/components/Tooltip";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
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
            Indústrias e formuladoras de cosmético armazenam com a RC as{" "}
            <strong>matérias-primas e insumos</strong> que entram na formulação:
            bases, óleos vegetais e minerais, essências, ativos dermatológicos,
            conservantes, corantes e aditivos.
          </p>
          <p>
            Também guardamos <strong>embalagens da linha cosmética</strong>,
            como frascos de vidro e plástico, potes, bisnagas, válvulas, tampas e
            insumos de envase, com a mesma organização por lote no{" "}
            <Tooltip term="WMS" tip={TIPS.wms} />.
          </p>
          <p>
            Atendemos indústria e formuladora que precisa de insumo cosmético
            disponível pra produção, sem perder rastreabilidade entre fornecedor
            e linha de fabricação.
          </p>
        </>
      );
    case "saneantes":
      return (
        <>
          <p>
            Indústria e distribuidoras de saneantes e domissanitários armazenam
            com a RC em galpão com <strong>AVCB</strong> vigente, adequado pra
            produto de risco controlado.
          </p>
          <p>
            O saneante não fica no mesmo corredor de cosmético ou produto
            químico incompatível. A segregação por classe de risco é parte do
            desenho do galpão, não um ajuste feito depois.
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
            Distribuidoras de produtos correlatos contam com a RC Armazém pra
            manter conformidade com a regulamentação da ANVISA do recebimento
            até a expedição.
          </p>
          <p>
            Cada correlato armazenado tem posição rastreada no WMS, com
            auditoria de lote disponível. Não é um depósito genérico que também
            guarda correlato, é uma operação desenhada pra esse tipo de produto.
          </p>
          <p>
            Atendemos distribuidoras e indústria de correlatos que precisam de
            armazenagem regulamentada.
          </p>
        </>
      );
    case "medicamentos":
      return (
        <>
          <p>
            Farmácias, distribuidoras e laboratórios armazenam medicamentos com a
            RC sem perder rastreabilidade entre o recebimento e a expedição.
          </p>
          <p>
            A operação segue a <strong>RDC 653/2022</strong> da ANVISA, com área
            de recebimento separada da expedição e regra de rotatividade (FEFO)
            aplicada por lote.
          </p>
          <p>
            Pra medicamento controlado (psicotrópico, entorpecente), ver a
            página específica de <strong>Medicamentos Controlados</strong>, com
            exigência adicional de licenciamento.
          </p>
        </>
      );
    case "medicamentos-controlados":
      return (
        <>
          <p>
            Medicamento controlado, psicotrópico, entorpecente ou precursor, não
            armazena junto com medicamento comum. A RC Armazém mantém área
            restrita própria, com controle de acesso reforçado.
          </p>
          <p>
            Além da RDC 653/2022 da ANVISA, essa categoria exige licenciamento
            junto à <strong>Polícia Federal</strong>, conforme a Portaria SVS/MS
            344/98. A RC mantém essa habilitação vigente pra operar com esse
            tipo de produto.
          </p>
          <p>
            Atendemos distribuidoras e farmácias que precisam de armazenagem de
            medicamento controlado com documentação completa, não um depósito
            comum com controle extra improvisado.
          </p>
        </>
      );
    case "quimicos":
      return (
        <>
          <p>
            Indústria e distribuidoras de produto químico perigoso ou controlado
            armazenam com a RC em instalação preparada e autorizada
            especificamente pra esse tipo de material classificado.
          </p>
          <p>
            A operação mantém registro <strong>CETESB</strong> e, quando
            aplicável, licenciamento junto à Polícia Federal pra produto de
            duplo uso ou precursor químico. Cada item tem{" "}
            <Tooltip term="documentação (FISPQ)" tip={TIPS.fispq} /> disponível.
          </p>
          <p>
            A segregação por classe de risco é física, não só documental.
            Produto incompatível não divide corredor.
          </p>
        </>
      );
    case "resinas":
      return (
        <>
          <p>
            Indústria de revestimento e adesivo armazena com a RC resinas epóxi,
            poliuretanos (PU), endurecedores e sistemas especiais pra
            revestimento e adesivo.
          </p>
          <p>
            Esses insumos têm prazo de validade e sensibilidade de armazenagem
            específica. A posição no galpão considera isso, com registro CETESB
            e licenciamento <strong>IBAMA</strong> pra substância de controle
            ambiental.
          </p>
          <p>
            Atendemos indústria que precisa de insumo industrial disponível sem
            perder o controle de lote e validade.
          </p>
        </>
      );
    case "polimeros":
      return (
        <>
          <p>
            Indústria de borracha e plástico armazena com a RC borracha sintética
            (SBR), negro de fumo de alta performance e demais matérias-primas
            pra esse setor.
          </p>
          <p>
            Esse tipo de material tem exigência própria de armazenagem, sensível
            a contaminação cruzada e a condição ambiental. A RC mantém área
            segregada e licenciamento <strong>IBAMA</strong> pra esse tipo de
            insumo.
          </p>
          <p>
            Atendemos indústria de pneus, vedação, autopeças e demais aplicações
            de borracha e polímero.
          </p>
        </>
      );
    case "aditivos":
      return (
        <>
          <p>
            Indústria química armazena com a RC cargas minerais, antioxidantes,
            aceleradores de vulcanização e pigmentos industriais, insumos de
            especialidade que exigem controle próprio de classe.
          </p>
          <p>
            Cada aditivo tem{" "}
            <Tooltip term="documentação (FISPQ)" tip={TIPS.fispq} /> disponível
            durante todo o período armazenado, com posição definida por
            compatibilidade química, não por conveniência de espaço.
          </p>
          <p>
            Atendemos indústria que trabalha com múltiplas especialidades
            químicas e precisa de um único fornecedor de armazenagem pra todas
            elas.
          </p>
        </>
      );
    case "equipamentos-ti":
      return (
        <>
          <p>
            Empresas de TI e integradoras de automação armazenam com a RC
            armários modulares, racks pra servidor e rede, gabinetes metálicos,
            painéis de comando e componentes de infraestrutura.
          </p>
          <p>
            Essa categoria não envolve produto químico ou regulado por vigilância
            sanitária. O cuidado aqui é <strong>manuseio técnico</strong>{" "}
            (evitar avaria em equipamento sensível) e controle de acesso rígido,
            já que costuma ser ativo de alto valor.
          </p>
          <p>
            Atendemos empresa de TI, integradora e revenda que precisa de espaço
            seguro pra equipamento parado entre a compra e a instalação.
          </p>
        </>
      );
    case "alimenticios":
      return (
        <>
          <p>
            Distribuidoras e indústria alimentícia armazenam com a RC em área
            exclusiva pra produto alimentício, fisicamente separada de produto
            químico, saneante ou qualquer categoria de risco.
          </p>
          <p>
            O controle de lote e validade segue a mesma lógica de FEFO já
            aplicada aos outros segmentos regulados, registrada no{" "}
            <Tooltip term="WMS" tip={TIPS.wms} />.
          </p>
          <p>
            Atendemos distribuidoras e indústria de alimentos que precisam de
            armazenagem com rastreabilidade, sem dividir espaço com produto
            incompatível.
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
      {page.faq?.length ? <JsonLdScript data={faqPageJsonLd(page.faq)} /> : null}

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
          {page.faq?.length ? <a href="#faq">FAQ</a> : null}
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

            {page.faq?.length ? (
              <section className="seo-sp-sec" id="faq">
                <h2>Perguntas frequentes</h2>
                <div className="divide-y divide-borda border-y border-borda">
                  {page.faq.map((item) => (
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
              </section>
            ) : null}

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
