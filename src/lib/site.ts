export const SITE = {
  name: "RC Armazenagem",
  legalName: "RC Armazenagem",
  url: "https://rcarmazenagem.com.br",
  transportesUrl: "https://rctransportes.netlify.app",
  email: "cotacao@rctransportes.com.br",
  phone: "(11) 5521-8282",
  phoneHref: "tel:+551155218282",
  whatsapp: "(11) 94603-3490",
  whatsappHref: "https://wa.me/5511946033490",
  instagram: "https://instagram.com/rctransportesoficial",
  facebook: "https://facebook.com/rctransportes",
  founded: 2001,
} as const;

export const ENDERECOS = [
  {
    cidade: "São Paulo",
    logradouro: "Av. do Rio Bonito, nº 1.522 - Veleiros",
    uf: "SP",
    cep: "04776-002",
    extra: "",
  },
  {
    cidade: "Jundiaí",
    logradouro: "Av. Juvenal Arantes, nº 2.500 - Jardim Sarapiranga",
    uf: "SP",
    cep: "13212-354",
    extra: "Galpões 14, 15 e 16",
  },
  {
    cidade: "Jundiaí",
    logradouro: "Rod. Dom Gabriel Paulino Bueno Couto, Km 71",
    uf: "SP",
    cep: "13201-000",
    extra: "",
  },
  {
    cidade: "Jundiaí",
    logradouro: "R. Miguel Latorre, nº 1.100 - Distrito Industrial I",
    uf: "SP",
    cep: "13212-009",
    extra: "",
  },
] as const;

export const NAV = [
  { href: "/estrutura", label: "Estrutura" },
  { href: "/compliance", label: "Compliance" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: SITE.transportesUrl, label: "Transporte", external: true },
  { href: "/contato", label: "Contato" },
] as const;

export const SEGMENTOS = [
  {
    id: "cosmeticos",
    nome: "Cosméticos",
    descricao: "Manuseio que evita avarias em embalagens sensíveis.",
    cert: "ANVISA",
    icon: "rack" as const,
    image: "/segmentos/cosmeticos.jpg",
    href: "/armazenagem-cosmeticos-regulados",
  },
  {
    id: "saneantes",
    nome: "Saneantes",
    descricao: "Estocagem compatível com produto de risco controlado.",
    cert: "Bombeiros",
    icon: "check" as const,
    image: "/segmentos/saneantes.jpg",
    href: "/armazenagem-saneantes",
  },
  {
    id: "correlatos",
    nome: "Correlatos",
    descricao: "Cobertura para linhas regulamentadas pela ANVISA.",
    cert: "ANVISA",
    icon: "nested" as const,
    image: "/segmentos/correlatos.png",
    href: "/armazenagem-correlatos",
  },
  {
    id: "quimicos",
    nome: "Químicos",
    descricao:
      "Procedimento específico para carga classificada, incluindo produtos perigosos, controlados e inflamáveis.",
    cert: "Polícia Federal",
    icon: "warehouse" as const,
    image: "/segmentos/quimicos.jpg",
    href: "/armazenagem-produtos-quimicos",
  },
  {
    id: "medicamentos",
    nome: "Medicamentos",
    descricao:
      "Cadeia de custódia rastreável do início ao fim, com produtos hospitalares e farmacêuticos.",
    cert: "ANVISA · CRF",
    icon: "check" as const,
    image: "/segmentos/medicamentos.jpg",
    href: "/armazenagem-medicamentos",
  },
] as const;

/** `value` numérico dispara o contador; `null` mostra [ ] até o cliente confirmar. */
export const NUMEROS: readonly {
  label: string;
  value: number | null;
  suffix: string;
  display: string | null;
  pendente: boolean;
}[] = [
  {
    label: "Área total",
    value: 8500,
    suffix: " m²",
    display: null,
    pendente: true,
  },
  {
    label: "Posições de pallet",
    value: 3200,
    suffix: "",
    display: null,
    pendente: true,
  },
  {
    label: "Controle de acesso",
    value: null,
    suffix: "",
    display: "24/7",
    pendente: false,
  },
];

/** Quotes fictícios só pra layout. Manter `ficticio: true` até o cliente enviar depoimentos reais. */
export const DEPOIMENTOS: readonly {
  quote: string;
  autor: string;
  empresa: string;
  ficticio: boolean;
}[] = [
  {
    quote:
      "Desde que centralizamos armazenagem e transporte com a RC, paramos de perder tempo coordenando dois fornecedores.",
    empresa: "Indústria Exemplo S.A.",
    autor: "Gerente de Logística (fictício)",
    ficticio: true,
  },
  {
    quote:
      "O processo de FEFO e rastreio por lote deu muito mais segurança pra lidar com produto controlado.",
    empresa: "Cliente Modelo Distribuidora",
    autor: "Diretor de Operações (fictício)",
    ficticio: true,
  },
];

export const PASSOS = [
  {
    n: "1",
    titulo: "Recebimento",
    texto: "Conferência e etiquetagem de cada lote na entrada.",
    legend:
      "Cada lote é conferido na doca, etiquetado e registrado antes de ir pra posição. Sem lote identificado, não entra no rack.",
    detalhe:
      "Cada lote é conferido na doca, etiquetado e registrado antes de ir para a posição. Sem lote identificado, não entra no rack.",
  },
  {
    n: "2",
    titulo: "Estocagem",
    texto: "Posição por tipo de produto e FEFO.",
    legend:
      "Cada classe de produto tem sua área segregada dentro do galpão. Químicos não ficam ao lado de cosméticos. A posição também considera FEFO.",
    detalhe:
      "Produto regulado não divide espaço com caixa qualquer. Cada classe de produto tem sua área segregada dentro do galpão: químicos não ficam ao lado de cosméticos, produtos controlados não dividem corredor com saneantes. A posição também considera FEFO: o que vence primeiro sai primeiro.",
  },
  {
    n: "3",
    titulo: "Expedição",
    texto: "Saída já na frota RC, com rastreio.",
    legend:
      "Separação, conferência de saída e carregamento na frota própria. A rastreabilidade não quebra na troca de fornecedor.",
    detalhe:
      "Separação, conferência de saída e carregamento na frota própria. A rastreabilidade não quebra na troca de fornecedor: é a mesma operação.",
  },
] as const;

export const FLOW_TECH = [
  {
    title: "WMS com rastreio por lote",
    text: "Sistema que registra posição, entrada e saída de cada lote. Nada se move sem ficar registrado.",
    icon: "nested" as const,
  },
  {
    title: "Regra FEFO aplicada",
    text: "O lote que vence primeiro sai primeiro. Evita produto vencendo parado no fundo do rack.",
    icon: "check" as const,
  },
  {
    title: "Separação por classe",
    text: "Produto químico não fica ao lado de cosmético: cada categoria tem sua área própria dentro do galpão.",
    icon: "warehouse" as const,
  },
] as const;

export const BENEFICIOS = [
  {
    titulo: "Localização estratégica",
    texto:
      "Operação em Jundiaí e São Paulo. Saída rápida para capital, Grande SP e interior, sem transbordo extra.",
    icon: "warehouse" as const,
  },
  {
    titulo: "WMS e rastreio por lote",
    texto:
      "Cada posição de pallet é definida por tipo de produto e FEFO. Você sabe o que entrou, onde está e o que sai.",
    icon: "nested" as const,
  },
  {
    titulo: "Um fornecedor, um custo",
    texto:
      "Armazenagem e transporte na mesma operação. Sem intermediação, sem quebra de rastreabilidade na troca de empresa.",
    icon: "check" as const,
  },
  {
    titulo: "Compliance de carga regulada",
    texto:
      "Processo para produto controlado, inflamável, hospitalar e correlato. Não é galpão genérico.",
    icon: "rack" as const,
  },
] as const;

export const FEATURES_ESTRUTURA = [
  {
    titulo: "Monitoramento 24h",
    texto: "Câmeras e ronda contínua no galpão e na área de expedição.",
    icon: "rack" as const,
  },
  {
    titulo: "Controle de acesso",
    texto: "Restrição e registro de entrada por área: quem entra, quando e onde.",
    icon: "warehouse" as const,
  },
  {
    titulo: "Sistema WMS",
    texto: "Posição, lote e rotatividade (FEFO) no sistema, não na memória de quem opera.",
    icon: "nested" as const,
    proof: { label: "Detalhado em Compliance", href: "/compliance" },
  },
  {
    titulo: "Prevenção de incêndio",
    texto: "Estrutura alinhada ao AVCB do Corpo de Bombeiros para produto de risco.",
    icon: "check" as const,
    proof: { label: "Certificação verificável", href: "/compliance" },
  },
] as const;

export const FOTOS_ESTRUTURA = [
  {
    label: "Fachada",
    alt: "Fachada do galpão RC Armazenagem",
    src: "/assets-estrutura/estrutura-fachada.jpg",
  },
  {
    label: "Corredor",
    alt: "Corredor de porta-paletes no galpão",
    src: "/assets-estrutura/estrutura-corredor.jpg",
  },
  {
    label: "Expedição",
    alt: "Área de expedição com empilhadeira RC",
    src: "/assets-estrutura/estrutura-expedicao.jpg",
  },
] as const;

export const COMPLIANCE_INTRO =
  "É a nossa licença ANVISA que garante que produto regulado é armazenado do jeito que a legislação pede, não só guardado. Processo documentado em cada etapa, não só espaço reservado.";

export const COMPLIANCE_DESTAQUE = [
  {
    titulo: "Licença ANVISA",
    texto: "Habilitação para armazenagem de produto regulado.",
    icon: "warehouse" as const,
  },
  {
    titulo: "CETESB",
    texto:
      "Registro ambiental do estado de São Paulo pra armazenagem de produto químico.",
    icon: "clipboard" as const,
  },
  {
    titulo: "Controle de Acesso",
    texto: "Restrição e registro de entrada por área.",
    icon: "rack" as const,
  },
  {
    titulo: "Registro de Temperatura",
    texto: "Monitoramento contínuo [se aplicável].",
    icon: "nested" as const,
    pendente: true,
  },
  {
    titulo: "Auditoria de Lote",
    texto: "Rastreabilidade completa por lote armazenado.",
    icon: "check" as const,
  },
  {
    titulo: "FISPQ arquivada por produto",
    texto:
      "Ficha de Informação de Segurança de Produto Químico disponível pra cada item armazenado. Consulta rápida em caso de incidente ou fiscalização.",
    icon: "clipboard" as const,
  },
] as const;

export const COMPLIANCE_GROUPS = [
  {
    head: "Licenciamento",
    items: [COMPLIANCE_DESTAQUE[0], COMPLIANCE_DESTAQUE[1]],
  },
  {
    head: "Controle operacional",
    items: [
      COMPLIANCE_DESTAQUE[2],
      {
        ...COMPLIANCE_DESTAQUE[3],
        texto: "Monitoramento contínuo, onde aplicável.",
      },
      COMPLIANCE_DESTAQUE[4],
    ],
  },
  {
    head: "Documentação técnica",
    items: [
      {
        ...COMPLIANCE_DESTAQUE[5],
        texto:
          "Ficha de Informação de Segurança de Produto Químico disponível pra cada item armazenado.",
      },
    ],
  },
] as const;

export const CERTS_COMPLETAS = [
  "ISO 9001",
  "ANVISA",
  "CETESB",
  "Licenças da Polícia Federal, Exército, Governo Estadual e Prefeitura",
  "Corpo de Bombeiros (AVCB)",
  "SASSMAQ",
  "CRF (Conselho Regional de Farmácia)",
  "Licença Ambiental IBAMA",
] as const;

export const CERTS_COMPLEMENTARES = [
  {
    label: "CETESB",
    tip: "Companhia Ambiental do Estado de São Paulo, responsável por licenciar armazenagem de produto químico no estado.",
  },
  {
    label: "Licenças da Polícia Federal, Exército, Governo Estadual e Prefeitura",
  },
  {
    label: "SASSMAQ",
    tip: "Sistema de Avaliação de Saúde, Segurança, Meio Ambiente e Qualidade, específico pro transporte de produtos químicos.",
  },
  {
    label: "CRF",
    tip: "Conselho Regional de Farmácia: habilitação necessária pra transportar medicamentos controlados.",
  },
  {
    label: "IBAMA",
    tip: "Licença ambiental que autoriza o transporte de produtos que podem gerar impacto ambiental.",
  },
] as const;

export const FAQ = [
  {
    q: "A RC Armazenagem tem licença ambiental?",
    a: "Sim. A RC Armazenagem possui registro na CETESB, órgão ambiental do estado de São Paulo responsável por licenciar armazenagem de produto químico.",
    pendente: false,
  },
  {
    q: "Que tipos de produto vocês armazenam?",
    a: "Cosméticos, saneantes, correlatos, produtos químicos (incluindo perigosos, controlados e inflamáveis) e medicamentos, sempre com a licença e o processo específico de cada categoria.",
    pendente: false,
  },
  {
    q: "Existe seguro para a carga armazenada?",
    a: "Sim, a carga armazenada conta com cobertura de seguro. Fale com nosso time comercial pra saber as condições específicas do seu tipo de produto.",
    pendente: true,
  },
  {
    q: "Qual o prazo mínimo de contrato?",
    a: "O prazo varia conforme volume e tipo de operação. Nossa equipe monta uma proposta sob medida a partir do seu perfil de carga.",
    pendente: true,
  },
  {
    q: "O transporte já sai incluso?",
    a: "Sim. Sua carga sai do nosso galpão direto na frota RC. Não é preciso contratar transporte à parte.",
    pendente: false,
  },
  {
    q: "Como funciona o controle de temperatura?",
    a: "Depende da área de armazenagem contratada: temos galpões com e sem climatização. Nosso time indica a opção certa pro seu produto.",
    pendente: true,
  },
] as const;

export const COMPARACAO = [
  {
    label: "Fornecedores envolvidos",
    no: "2 empresas diferentes",
    yes: "1 só, do recebimento à entrega",
    icons: false,
  },
  {
    label: "Rastreabilidade na troca",
    no: "Se perde na intermediação",
    yes: "Contínua, do galpão até o destino",
    icons: true,
  },
  {
    label: "Coordenação",
    no: "Você gerencia dois contratos",
    yes: "A RC coordena tudo internamente",
    icons: false,
  },
  {
    label: "Custo de intermediação",
    no: "Repasse entre empresas",
    yes: "Sem intermediação a mais",
    icons: true,
  },
] as const;

export const VOLUMES = [
  { id: "ate-50", label: "Até 50 paletes/mês" },
  { id: "50-200", label: "50 a 200 paletes/mês" },
  { id: "200-500", label: "200 a 500 paletes/mês" },
  { id: "acima-500", label: "Acima de 500 paletes/mês" },
  { id: "nao-sei", label: "Ainda não sei" },
] as const;
