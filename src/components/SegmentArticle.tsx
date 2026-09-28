import Link from "next/link";
import type { ReactNode } from "react";
import {
  IconCheck,
  IconChevronRight,
  IconWhatsApp,
} from "@/components/Icons";
import { JsonLdScript } from "@/components/JsonLdScript";
import { Tooltip } from "@/components/Tooltip";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  segmentBreadcrumbs,
  serviceJsonLd,
} from "@/lib/schema";
import { getSegmentDetail } from "@/lib/segmento-detalhes";
import {
  TIPS,
  type SegmentId,
  type SegmentPage,
  type SegmentRef,
} from "@/lib/seo-segmentos";
import { SEGMENTOS, SITE } from "@/lib/site";

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

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="seg-head">
      <span className="seg-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </header>
  );
}

export function SegmentArticle({ page }: { page: SegmentPage }) {
  const crumbs = segmentBreadcrumbs(page);
  const detail = getSegmentDetail(page.id);
  const segmento = SEGMENTOS.find((s) => s.id === page.id);
  const faq = detail?.faq;
  const orcamentoHref = `/orcamento?segmento=${page.id}`;

  const anchors: [string, string][] = [["sobre", "Sobre"]];
  if (detail) {
    anchors.push(
      ["para-quem", "Para quem é"],
      ["produtos", "O que armazenamos"],
      ["exigencias", detail.requisitosCuidados ? "Cuidados" : "Exigências"],
      ["operacao", "Operação"],
      ["estrutura", "Estrutura"],
    );
  }
  if (faq?.length) anchors.push(["faq", "FAQ"]);
  if (detail) anchors.push(["guia", "Guia"]);
  anchors.push(["relacionadas", "Relacionadas"]);

  return (
    <>
      <JsonLdScript data={serviceJsonLd(page)} />
      <JsonLdScript data={breadcrumbJsonLd(crumbs)} />
      {faq?.length ? <JsonLdScript data={faqPageJsonLd(faq)} /> : null}

      <section className="seg-hero">
        <div className="seg-hero__bg" aria-hidden />
        <div className="shell relative z-[1] mx-auto max-w-[1000px]">
          <nav className="seo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {" / "}
            <span>{page.serviceType}</span>
          </nav>
          <div className="seg-hero__grid">
            <div className="seg-hero__copy">
              <p className="seg-eyebrow">{page.eyebrow}</p>
              <h1>{page.h1}</h1>
              <p className="seg-hero__lead">{page.lead}</p>
              <div className="seg-hero__cta">
                <Link
                  href={orcamentoHref}
                  className="btn rounded-[9px] bg-ambar px-[20px] py-[11px] text-[13.5px] font-semibold"
                >
                  Solicitar orçamento
                </Link>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seg-btn-ghost"
                >
                  <IconWhatsApp />
                  Falar no WhatsApp
                </a>
              </div>
              <ul className="seg-hero__badges">
                {page.refs.map((ref) => (
                  <li key={ref.hint + ref.label}>
                    <b>
                      <RefValue item={ref} />
                    </b>
                    <span>{ref.hint}</span>
                  </li>
                ))}
              </ul>
            </div>
            {segmento?.image ? (
              <figure className="seg-hero__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={segmento.image}
                  alt={`${page.serviceType} na RC Armazém`}
                  fetchPriority="high"
                />
                {"risco" in segmento && segmento.risco ? (
                  <figcaption>{segmento.risco}</figcaption>
                ) : null}
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <div className="shell mx-auto max-w-[1000px]">
        <nav className="anchor-nav" aria-label="Nesta página">
          <span>Nesta página:</span>
          {anchors.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="seo-sp-layout">
          <div className="seo-sp-main min-w-0">
            <section className="seo-sp-sec seg-sec" id="sobre">
              <SectionHead eyebrow="Visão geral" title="Sobre o serviço" />
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

            {detail ? (
              <>
                <section className="seo-sp-sec seg-sec" id="para-quem">
                  <SectionHead eyebrow="Para quem é" title="Quem armazena com a RC" />
                  <div className="seg-cards">
                    {detail.perfis.map((p) => (
                      <article key={p.titulo} className="seg-card">
                        <h3>{p.titulo}</h3>
                        <p>{p.texto}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="seo-sp-sec seg-sec" id="produtos">
                  <SectionHead eyebrow="Produtos" title="O que armazenamos" />
                  <div className="seg-products">
                    {detail.produtos.map((p) => (
                      <article key={p.grupo} className="seg-product">
                        <span className="seg-product__tag">{p.grupo}</span>
                        <p>{p.itens}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="seo-sp-sec seg-sec" id="exigencias">
                  <SectionHead
                    eyebrow={detail.requisitosCuidados ? "Cuidados" : "Regulação"}
                    title={
                      detail.requisitosCuidados
                        ? "O que esse tipo de carga pede e como a RC atende"
                        : "O que a norma exige e como a RC atende"
                    }
                  />
                  <div className="seg-req">
                    <div className="seg-req__head" aria-hidden>
                      <span>
                        {detail.requisitosCuidados ? "O que é necessário" : "O que é exigido"}
                      </span>
                      <span>Como a RC atende</span>
                    </div>
                    {detail.requisitos.map((r) => (
                      <div key={r.exigencia} className="seg-req__row">
                        <p className="seg-req__need">
                          <span className="seg-req__label">
                            {detail.requisitosCuidados ? "Necessidade" : "Exigência"}
                          </span>
                          {r.exigencia}
                        </p>
                        <p className="seg-req__done">
                          <span className="seg-req__label">Na RC</span>
                          <IconCheck />
                          {r.comoAtendemos}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="seo-sp-sec seg-sec" id="operacao">
                  <SectionHead
                    eyebrow="Operação"
                    title="Como funciona, do recebimento à entrega"
                  />
                  <ol className="seg-steps">
                    {detail.passos.map((p, i) => (
                      <li key={p.titulo}>
                        <span className="seg-steps__n">{i + 1}</span>
                        <div>
                          <h3>{p.titulo}</h3>
                          <p>{p.texto}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="seo-sp-sec seg-sec" id="estrutura">
                  <SectionHead eyebrow="Estrutura" title="Condições do galpão e serviços" />
                  <div className="seg-cards">
                    {detail.condicoes.map((c) => (
                      <article key={c.titulo} className="seg-card">
                        <h3>{c.titulo}</h3>
                        <p>{c.texto}</p>
                      </article>
                    ))}
                  </div>
                  <p className="seg-services__label">Serviços disponíveis</p>
                  <ul className="seg-services">
                    {detail.servicos.map((s) => (
                      <li key={s}>
                        <IconCheck />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="seg-group">
                    <span className="seg-group__tag">Grupo RC</span>
                    <h3>{detail.grupo.titulo}</h3>
                    <p>{detail.grupo.texto}</p>
                    <a
                      href={SITE.transportesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conhecer a RC Transportes
                      <IconChevronRight />
                    </a>
                  </div>
                </section>
              </>
            ) : null}

            {faq?.length ? (
              <section className="seo-sp-sec seg-sec" id="faq">
                <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" />
                <div className="divide-y divide-borda border-y border-borda">
                  {faq.map((item) => (
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

            {detail ? (
              <section className="seo-sp-sec seg-sec" id="guia">
                <SectionHead eyebrow="Guia rápido" title={detail.guia.titulo} />
                <article className="seg-guide">
                  <p className="seg-guide__intro">{detail.guia.intro}</p>
                  {detail.guia.blocos.map((b) => (
                    <div key={b.titulo} className="seg-guide__block">
                      <h3>{b.titulo}</h3>
                      <p>{b.texto}</p>
                    </div>
                  ))}
                </article>
              </section>
            ) : null}

            <section className="seo-sp-sec seg-sec" id="relacionadas">
              <SectionHead eyebrow="Veja também" title="Páginas relacionadas" />
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
                  href={orcamentoHref}
                  className="btn rounded-[9px] bg-ambar px-[18px] py-[11px] text-[13px] font-semibold whitespace-nowrap"
                >
                  Solicitar orçamento
                </Link>
              </div>
            </section>
          </div>

          <aside className="seo-sp-side">
            <div className="sidebar-sticky seg-side">
              <span className="sb-label">Orçamento rápido</span>
              <p className="seg-side__title">{page.ctaTitle}</p>
              <p className="seg-side__text">
                Conte o produto e o volume estimado. Retornamos com a proposta.
              </p>
              <Link
                href={orcamentoHref}
                className="btn seg-side__btn rounded-[9px] bg-ambar text-[13px] font-semibold"
              >
                Solicitar orçamento
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="seg-side__wa"
              >
                <IconWhatsApp />
                {SITE.whatsapp}
              </a>
              <span className="sb-label seg-side__refs">Licenças e controles</span>
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
