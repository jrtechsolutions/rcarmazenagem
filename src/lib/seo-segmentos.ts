export type SegmentSlug =
  | "armazenagem-cosmeticos-regulados"
  | "armazenagem-saneantes"
  | "armazenagem-correlatos"
  | "armazenagem-produtos-quimicos"
  | "armazenagem-medicamentos";

export type SegmentId =
  | "cosmeticos"
  | "saneantes"
  | "correlatos"
  | "quimicos"
  | "medicamentos";

export type SegmentRef = {
  label: string;
  hint: string;
  tip?: { term: string; text: string };
};

export type SegmentRelated = {
  href: string;
  title: string;
  tag: string;
};

export type SegmentPage = {
  slug: SegmentSlug;
  id: SegmentId;
  eyebrow: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  serviceDescription: string;
  hasCertification: string;
  refs: SegmentRef[];
  vocab: string[];
  related: SegmentRelated[];
  trust: string;
  ctaTitle: string;
};

export const TIPS = {
  anvisa:
    "Agência reguladora responsável pela vigilância sanitária de produtos regulados.",
  wms: "Warehouse Management System: sistema que registra posição, entrada e saída de cada lote armazenado.",
  cetesb:
    "Companhia Ambiental do Estado de São Paulo, responsável por licenciar armazenagem de produto químico no estado.",
  fispq:
    "Ficha de Informação de Segurança de Produto Químico, disponível pra cada item armazenado.",
} as const;

export const SEGMENT_PAGES: readonly SegmentPage[] = [
  {
    slug: "armazenagem-cosmeticos-regulados",
    id: "cosmeticos",
    eyebrow: "Segmento · Cosméticos",
    h1: "Armazenagem de cosméticos regulados em São Paulo.",
    lead: "Galpão com licença ANVISA, controle de acesso por área e manuseio que evita avaria em embalagem sensível.",
    metaTitle: "Armazenagem de cosméticos regulados",
    metaDescription:
      "Armazenagem de cosméticos regulados com licença ANVISA, WMS por lote e manuseio pra embalagem sensível. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de cosméticos regulados",
    serviceDescription:
      "Armazenagem de cosméticos regulados com licença ANVISA, controle de acesso por área e sistema WMS com rastreio por lote.",
    hasCertification: "ANVISA",
    refs: [
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Cosméticos regulados", hint: "Classes atendidas" },
      {
        label: "WMS por lote",
        hint: "Controle de estoque",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
    ],
    vocab: ["cosméticos regulados", "licença ANVISA", "armazenagem certificada"],
    related: [
      {
        href: "/armazenagem-produtos-quimicos",
        title: "Armazenagem de produtos químicos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Licença ANVISA verificável",
    ctaTitle: "Orçamento de armazenagem de cosméticos regulados",
  },
  {
    slug: "armazenagem-saneantes",
    id: "saneantes",
    eyebrow: "Segmento · Saneantes",
    h1: "Armazenagem de saneantes e domissanitários.",
    lead: "Produto de risco controlado exige área própria dentro do galpão, com certificação do Corpo de Bombeiros vigente.",
    metaTitle: "Armazenagem de saneantes",
    metaDescription:
      "Armazenagem de saneantes e domissanitários com área segregada e estrutura alinhada ao Corpo de Bombeiros. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de saneantes",
    serviceDescription:
      "Armazenagem de saneantes e domissanitários com segregação por classe de risco e estrutura alinhada ao Corpo de Bombeiros.",
    hasCertification: "Corpo de Bombeiros",
    refs: [
      { label: "Corpo de Bombeiros", hint: "Certificação da operação" },
      { label: "Risco I e II", hint: "Classes atendidas" },
      { label: "Área segregada", hint: "Separação por classe" },
    ],
    vocab: ["saneantes", "domissanitários", "risco controlado"],
    related: [
      {
        href: "/armazenagem-correlatos",
        title: "Armazenagem de correlatos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
    ],
    trust: "Estrutura alinhada ao Corpo de Bombeiros",
    ctaTitle: "Orçamento de armazenagem de saneantes",
  },
  {
    slug: "armazenagem-correlatos",
    id: "correlatos",
    eyebrow: "Segmento · Correlatos",
    h1: "Armazenagem de correlatos regulamentados pela ANVISA.",
    lead: "Produto correlato armazenado com o mesmo rigor documental de produto hospitalar, sem virar galpão genérico.",
    metaTitle: "Armazenagem de correlatos",
    metaDescription:
      "Armazenagem de correlatos com regulamentação ANVISA, rastreio por lote e auditoria disponível. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de correlatos",
    serviceDescription:
      "Armazenagem de correlatos regulamentados pela ANVISA, com rastreio por lote e auditoria de lote disponível.",
    hasCertification: "ANVISA",
    refs: [
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Correlatos", hint: "Classes atendidas" },
      { label: "Rastreio por lote", hint: "Documentação exigida" },
    ],
    vocab: ["correlatos", "regulamentação ANVISA", "auditoria de lote"],
    related: [
      {
        href: "/armazenagem-medicamentos",
        title: "Armazenagem de medicamentos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Regulamentação ANVISA verificável",
    ctaTitle: "Orçamento de armazenagem de correlatos",
  },
  {
    slug: "armazenagem-produtos-quimicos",
    id: "quimicos",
    eyebrow: "Segmento · Químicos",
    h1: "Armazenagem de produtos químicos em São Paulo.",
    lead: "Galpão com registro CETESB, FISPQ por produto e área segregada por classe de risco.",
    metaTitle: "Armazenagem de produtos químicos",
    metaDescription:
      "Armazenagem de produtos químicos com registro CETESB, FISPQ por produto e segregação por classe de risco. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de produtos químicos",
    serviceDescription:
      "Armazenagem regulada de produtos químicos com licença ANVISA, registro CETESB e sistema WMS com rastreio por lote.",
    hasCertification: "CETESB",
    refs: [
      {
        label: "CETESB",
        hint: "Certificação da operação",
        tip: { term: "CETESB", text: TIPS.cetesb },
      },
      { label: "Perigosos e controlados", hint: "Classes atendidas" },
      {
        label: "FISPQ por produto",
        hint: "Documentação exigida",
        tip: { term: "FISPQ por produto", text: TIPS.fispq },
      },
    ],
    vocab: ["produtos perigosos", "contenção secundária", "registro CETESB"],
    related: [
      {
        href: "/armazenagem-cosmeticos-regulados",
        title: "Armazenagem de cosméticos regulados",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/estrutura",
        title: "Estrutura do galpão",
        tag: "estrutura",
      },
    ],
    trust: "Registro CETESB verificável",
    ctaTitle: "Orçamento de armazenagem de produtos químicos",
  },
  {
    slug: "armazenagem-medicamentos",
    id: "medicamentos",
    eyebrow: "Segmento · Medicamentos",
    h1: "Armazenagem de medicamentos comuns e controlados.",
    lead: "Cadeia de custódia rastreável do recebimento até a expedição, com sistema WMS por lote.",
    metaTitle: "Armazenagem de medicamentos",
    metaDescription:
      "Armazenagem de medicamentos comuns e controlados com WMS por lote, FEFO e cadeia de custódia rastreável. São Paulo e Jundiaí.",
    serviceType: "Armazenagem de medicamentos",
    serviceDescription:
      "Armazenagem de medicamentos comuns e controlados com licença ANVISA e sistema WMS com rastreio por lote.",
    hasCertification: "ANVISA",
    refs: [
      {
        label: "ANVISA",
        hint: "Certificação da operação",
        tip: { term: "ANVISA", text: TIPS.anvisa },
      },
      { label: "Comuns e controlados", hint: "Classes atendidas" },
      {
        label: "WMS por lote",
        hint: "Rastreio",
        tip: { term: "WMS por lote", text: TIPS.wms },
      },
    ],
    vocab: ["medicamentos controlados", "cadeia de custódia", "FEFO"],
    related: [
      {
        href: "/armazenagem-correlatos",
        title: "Armazenagem de correlatos",
        tag: "segmento",
      },
      {
        href: "/compliance",
        title: "Compliance da operação",
        tag: "certificações",
      },
      {
        href: "/como-funciona",
        title: "Como funciona o fluxo",
        tag: "processo",
      },
    ],
    trust: "Regulamentação ANVISA verificável",
    ctaTitle: "Orçamento de armazenagem de medicamentos",
  },
] as const;

export function getSegmentPage(slug: string): SegmentPage | undefined {
  return SEGMENT_PAGES.find((p) => p.slug === slug);
}

export function segmentHrefById(id: SegmentId): string {
  const page = SEGMENT_PAGES.find((p) => p.id === id);
  return page ? `/${page.slug}` : "/";
}
