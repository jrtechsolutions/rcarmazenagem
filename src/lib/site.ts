export const SITE = {
  name: "RC Armazém",
  legalName: "RC Armazém",
  url: "https://rcarmazem.com.br",
  transportesUrl: "https://rctransportes.netlify.app",
  email: "cotacao@rctransportes.com.br",
  phone: "(11) 5521-8282",
  phoneHref: "tel:+551155218282",
  whatsapp: "(11) 94603-3490",
  whatsappHref: "https://wa.me/5511946033490",
  instagram: "https://www.instagram.com/rctransportesoficial/",
  facebook: "https://www.facebook.com/rctransportes",
  linkedin:
    "https://www.linkedin.com/posts/transporterodoviaerrio-logaedstica-armazenagem-ugcPost-7373787098593648641-jgTe/",
  developerUrl: "https://www.jrtechnologysolutions.com.br/",
  developerName: "JR Technology Solutions",
  founded: 2001,
} as const;

export const ENDERECOS = [
  {
    cidade: "São Paulo",
    logradouro: "Av. do Rio Bonito, nº 1.522 - Veleiros",
    uf: "SP",
    cep: "04776-002",
    extra: "",
    mapLabel: "Veleiros",
    mapQuery: "Av. do Rio Bonito, 1522, Veleiros, São Paulo, SP, 04776-002",
    zoom: 16,
  },
  {
    cidade: "Jundiaí",
    logradouro: "Av. Juvenal Arantes, nº 2.500 - Jardim Sarapiranga",
    uf: "SP",
    cep: "13212-354",
    extra: "Galpões 14, 15 e 16",
    mapLabel: "Galpões 14-16",
    mapQuery:
      "Av. Juvenal Arantes, 2500, Jardim Sarapiranga, Jundiaí, SP, 13212-354",
    zoom: 16,
  },
  {
    cidade: "Jundiaí",
    logradouro: "Rod. Dom Gabriel Paulino Bueno Couto, Km 71",
    uf: "SP",
    cep: "13201-000",
    extra: "",
    mapLabel: "Km 71",
    mapQuery:
      "Rodovia Dom Gabriel Paulino Bueno Couto, Km 71, Jundiaí, SP, 13201-000",
    zoom: 15,
  },
  {
    cidade: "Jundiaí",
    logradouro: "R. Miguel Latorre, nº 1.100 - Distrito Industrial I",
    uf: "SP",
    cep: "13212-009",
    extra: "",
    mapLabel: "Distrito Industrial I",
    mapQuery:
      "Rua Miguel Latorre, 1100, Distrito Industrial, Jundiaí, SP, 13212-009",
    zoom: 16,
  },
] as const;

export const NAV = [
  { href: "/estrutura", label: "Estrutura" },
  { href: "/compliance", label: "Compliance" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: SITE.transportesUrl, label: "Transporte", external: true },
  { href: "/contato", label: "Contato" },
] as const;

export const SEGMENTOS = [
  {
    id: "cosmeticos",
    nome: "Matérias-primas cosméticas",
    descricao:
      "Bases, óleos, essências e ativos com o mesmo cuidado documental do produto acabado.",
    cert: "ANVISA",
    icon: "lipstick" as const,
    image: "/segmentos/cosmeticos.jpg",
    href: "/armazenagem-materias-primas-cosmeticos",
  },
  {
    id: "saneantes",
    nome: "Saneantes",
    descricao: "Estocagem compatível com produto de risco controlado.",
    cert: "AVCB",
    icon: "spray" as const,
    image: "/segmentos/saneantes.jpg",
    href: "/armazenagem-saneantes",
    risco: "Risco I e II",
  },
  {
    id: "correlatos",
    nome: "Correlatos",
    descricao: "Cobertura para linhas regulamentadas pela ANVISA.",
    cert: "ANVISA",
    icon: "stethoscope" as const,
    image: "/segmentos/correlatos.jpg",
    href: "/armazenagem-correlatos",
  },
  {
    id: "medicamentos",
    nome: "Medicamentos",
    descricao: "Cadeia de custódia rastreável conforme RDC 653/2022.",
    cert: "ANVISA",
    icon: "capsule" as const,
    image: "/segmentos/medicamentos.jpg",
    href: "/armazenagem-medicamentos",
  },
  {
    id: "medicamentos-controlados",
    nome: "Medicamentos controlados",
    descricao:
      "Psicotrópico e entorpecente com área restrita e licenciamento Polícia Federal.",
    cert: "Polícia Federal",
    icon: "shield" as const,
    image: "/segmentos/medicamentos-controlados.jpg",
    href: "/armazenagem-medicamentos-controlados",
    risco: "Portaria 344",
  },
  {
    id: "quimicos",
    nome: "Químicos perigosos",
    descricao:
      "Material classificado com CETESB, FISPQ e segregação por classe de risco.",
    cert: "CETESB",
    icon: "hazard" as const,
    image: "/segmentos/quimicos.jpg",
    href: "/armazenagem-produtos-quimicos-perigosos",
    risco: "Classe 3/8",
  },
  {
    id: "resinas",
    nome: "Resinas e química industrial",
    descricao:
      "Resina epóxi, poliuretano e endurecedor com controle de classe e validade.",
    cert: "CETESB · IBAMA",
    icon: "flask" as const,
    image: "/segmentos/resinas.jpg",
    href: "/armazenagem-resinas-quimica-industrial",
  },
  {
    id: "polimeros",
    nome: "Polímeros e borrachas",
    descricao:
      "Borracha sintética e negro de fumo com área segregada pra indústria de borracha e plástico.",
    cert: "IBAMA",
    icon: "package" as const,
    image: "/segmentos/polimeros.jpg",
    href: "/armazenagem-polimeros-borrachas-carbono",
  },
  {
    id: "aditivos",
    nome: "Aditivos e especialidades",
    descricao:
      "Cargas minerais, antioxidantes e aceleradores, cada um com FISPQ disponível.",
    cert: "CETESB",
    icon: "drop" as const,
    image: "/segmentos/aditivos.jpg",
    href: "/armazenagem-aditivos-especialidades-quimicas",
  },
  {
    id: "equipamentos-ti",
    nome: "Equipamentos de TI",
    descricao:
      "Racks, gabinetes e infraestrutura com manuseio técnico e controle de acesso.",
    cert: "Controle de acesso",
    icon: "server" as const,
    image: "/segmentos/equipamentos-ti.jpg",
    href: "/armazenagem-equipamentos-ti",
  },
  {
    id: "alimenticios",
    nome: "Alimentícios",
    descricao:
      "Produto alimentício em área exclusiva, separado de químico ou risco.",
    cert: "Área exclusiva",
    icon: "package" as const,
    image: "/segmentos/alimenticios.jpg",
    href: "/armazenagem-alimenticios",
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

/** Avaliações 5★ do Google (curadoria manual). */
export const DEPOIMENTOS: readonly {
  quote: string;
  autor: string;
  fonte: "Google";
  estrelas: 5;
}[] = [
  {
    autor: "Daniel Sousa",
    quote:
      "Gostaria de parabenizar o motorista do caminhão de placa KPL-0951. Há uns 20 dias atrás o farol da av. Nações Unidas estava com problema e uma senhora gostaria de atravessar, porém nenhum veículo deu passagem, até que o responsável por este…",
    fonte: "Google",
    estrelas: 5,
  },
  {
    autor: "Paulo Aguillar",
    quote:
      "Ótima empresa em sua área de atuação! Se tiver problemas, fale com o diretor Sr. Roberto Carlos...",
    fonte: "Google",
    estrelas: 5,
  },
  {
    autor: "Giovane Miranda",
    quote: "Excelente empresa e pontualidade sempre.",
    fonte: "Google",
    estrelas: 5,
  },
  {
    autor: "RCi Transportes - Ilhabella",
    quote:
      "Compromisso e pontualidade com clientes e parceiros! Recomendamos 👍",
    fonte: "Google",
    estrelas: 5,
  },
];

export const PASSOS = [
  {
    n: "1",
    key: "recebimento",
    titulo: "Recebimento",
    texto: "Conferência e etiquetagem de cada lote na entrada, direto na doca.",
    video: "/assets-visuais/fluxo-recebimento.mp4",
    legend:
      "Cada lote é conferido na doca, etiquetado e registrado antes de ir pra posição. Sem lote identificado, não entra no rack.",
    detalhe:
      "Cada lote é conferido na doca, etiquetado e registrado antes de ir para a posição. Sem lote identificado, não entra no rack.",
  },
  {
    n: "2",
    key: "estocagem",
    titulo: "Estocagem",
    texto: "Posição definida por tipo de produto, carregamento organizado por classe.",
    video: "/assets-visuais/fluxo-estocagem.mp4",
    legend:
      "Cada classe de produto tem sua área segregada dentro do galpão. Químicos não ficam ao lado de cosméticos. A posição também considera FEFO.",
    detalhe:
      "Produto regulado não divide espaço com caixa qualquer. Cada classe de produto tem sua área segregada dentro do galpão: químicos não ficam ao lado de cosméticos, produtos controlados não dividem corredor com saneantes. A posição também considera FEFO: o que vence primeiro sai primeiro.",
  },
  {
    n: "3",
    key: "expedicao",
    titulo: "Expedição",
    texto: "Separação, liberação e saída já na frota RC, com rastreio.",
    video: "/assets-visuais/fluxo-expedicao.mp4",
    legend:
      "Separação, conferência de saída e carregamento na frota própria. A rastreabilidade não quebra na troca de fornecedor.",
    detalhe:
      "Separação, conferência de saída e carregamento na frota própria. A rastreabilidade não quebra na troca de fornecedor: é a mesma operação.",
  },
] as const;

/** Intro da página Como funciona — fluxo no galpão + continuidade do grupo. */
export const COMO_FUNCIONA_INTRO =
  "Recebimento, estocagem e expedição sob a mesma operação. Se a carga precisa seguir, ela sai do nosso galpão para a frota RC — sem trocar de fornecedor no meio.";

/** Ponte leve Grupo RC (não substitui Quem somos). */
export const COMO_FUNCIONA_PILARES = [
  {
    label: "RC Armazém",
    titulo: "Onde a carga fica sob controle",
    texto:
      "Galpão com segregação por classe, WMS por lote e documentação pronta para auditoria.",
    href: "/estrutura",
    cta: "Ver estrutura",
    external: false,
    tone: "green" as const,
  },
  {
    label: "RC Transportes",
    titulo: "Onde a carga segue em movimento",
    texto:
      "Frota própria e rastreio em tempo real. A mesma cadeia que guardou o lote também leva até o destino.",
    href: SITE.transportesUrl,
    cta: "Ver frota",
    external: true,
    tone: "blue" as const,
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
    titulo: "AVCB vigente",
    texto:
      "Estrutura vistoriada e aprovada pra armazenagem de produto de risco.",
    icon: "check" as const,
    proof: { label: "Certificação verificável", href: "/compliance" },
    tip: {
      term: "AVCB",
      text: "Auto de Vistoria do Corpo de Bombeiros. Certifica que a estrutura atende às exigências de segurança contra incêndio.",
    },
  },
] as const;

export const FOTOS_ESTRUTURA = [
  {
    label: "Fachada",
    alt: "Fachada do galpão RC Armazém em dia claro",
    src: "/assets-estrutura/estrutura-fachada.jpg",
  },
  {
    label: "Corredor",
    alt: "Corredor de porta-paletes com racks azuis e laranja",
    src: "/assets-estrutura/estrutura-corredor.jpg",
  },
  {
    label: "Expedição",
    alt: "Área de expedição com empilhadeira e docas",
    src: "/assets-estrutura/estrutura-expedicao.jpg",
  },
] as const;

export const COMPLIANCE_INTRO =
  "Licenças sanitárias, ambientais e de segurança para produto regulado — com processo documentado ponta a ponta, pronto para auditoria.";

export type ComplianceItem = {
  titulo: string;
  texto: string;
  icon: "warehouse" | "clipboard" | "rack" | "nested" | "check";
};

/** Licenças em destaque no grid de provas (benefício para o cliente). */
export const COMPLIANCE_PROOFS = [
  {
    label: "ANVISA",
    src: "/certificacoes/anvisa.png",
    alt: "Logo da ANVISA",
    texto:
      "Produto sob vigilância sanitária entra e sai com rastreio e documentação pronta para auditoria.",
  },
  {
    label: "ISO 9001",
    src: "/certificacoes/iso-9001.png",
    alt: "Logo ISO 9001:2015",
    texto:
      "Processos auditados e melhoria contínua — qualidade não depende de quem está no turno.",
  },
  {
    label: "CETESB",
    src: "/certificacoes/cetesb.png",
    alt: "Logo da CETESB",
    texto:
      "Licenciamento ambiental estadual para armazenagem de produto químico em São Paulo.",
  },
  {
    label: "IBAMA",
    src: "/certificacoes/ibama.png",
    alt: "Logo do IBAMA",
    texto:
      "Licenciamento federal para substâncias com controle ambiental.",
  },
  {
    label: "Polícia Federal",
    src: "/certificacoes/policia-federal.png",
    alt: "Brasão da Polícia Federal",
    texto:
      "Operação habilitada para produto controlado, precursor ou de duplo uso.",
  },
  {
    label: "AVCB",
    src: "/certificacoes/bombeiros.png",
    alt: "Emblema do Corpo de Bombeiros",
    texto:
      "Galpão vistoriado e aprovado para armazenagem de produto de risco.",
  },
] as const;

/** Fluxo operacional com fotos reais da estrutura. */
export const COMPLIANCE_PROCESS = [
  {
    step: "01",
    titulo: "Recebimento controlado",
    texto:
      "Conferência documental e física na entrada. Só entra o que está autorizado e identificado.",
    src: "/assets-estrutura/estrutura-expedicao.jpg",
    alt: "Área de recebimento e expedição do galpão",
  },
  {
    step: "02",
    titulo: "Armazenagem segregada",
    texto:
      "Posição por tipo, risco e incompatibilidade — não é só ocupar vaga no rack.",
    src: "/assets-estrutura/estrutura-corredor.jpg",
    alt: "Corredor de porta-paletes com racks",
  },
  {
    step: "03",
    titulo: "Rastreio por lote",
    texto:
      "WMS com lote, posição e rotatividade. Auditoria encontra o produto, não o contrário.",
    src: "/assets-estrutura/estrutura-fachada.jpg",
    alt: "Fachada do galpão RC Armazém",
  },
  {
    step: "04",
    titulo: "Documentação sob demanda",
    texto:
      "Licenças, FISPQ e registros disponíveis quando o cliente ou o órgão pedir.",
    src: "/segmentos/medicamentos.jpg",
    alt: "Produtos regulados armazenados com controle documental",
  },
] as const;

export const COMPLIANCE_DESTAQUE: readonly ComplianceItem[] = [
  {
    titulo: "PAE",
    texto:
      "Plano de Atendimento a Emergências documentado para a operação do galpão.",
    icon: "clipboard",
  },
  {
    titulo: "Controle de Acesso",
    texto: "Restrição e registro de entrada por área sensível.",
    icon: "rack",
  },
  {
    titulo: "Registro de Temperatura",
    texto: "Monitoramento contínuo onde a carga exige controle térmico.",
    icon: "nested",
  },
  {
    titulo: "Auditoria de Lote",
    texto: "Rastreabilidade completa por lote armazenado.",
    icon: "check",
  },
  {
    titulo: "FISPQ por produto",
    texto:
      "Ficha de Segurança arquivada e disponível para cada item químico.",
    icon: "clipboard",
  },
] as const;

/** Controles internos — sem repetir as licenças do grid/muro. */
export const COMPLIANCE_GROUPS = [
  {
    head: "Emergência",
    tone: "default" as const,
    items: [COMPLIANCE_DESTAQUE[0]],
  },
  {
    head: "Controle operacional",
    tone: "ops" as const,
    items: [
      COMPLIANCE_DESTAQUE[1],
      COMPLIANCE_DESTAQUE[2],
      COMPLIANCE_DESTAQUE[3],
    ],
  },
  {
    head: "Documentação técnica",
    tone: "default" as const,
    items: [COMPLIANCE_DESTAQUE[4]],
  },
] as const;

export const CERTS_COMPLETAS = [
  "ISO 9001",
  "ANVISA",
  "CETESB",
  "Licenças da Polícia Federal, Exército, Governo Estadual e Prefeitura",
  "AVCB",
  "SASSMAQ",
  "CRF (Conselho Regional de Farmácia)",
  "Licença Ambiental IBAMA",
] as const;

export const CERT_MARQUEE = [
  {
    label: "ISO 9001",
    src: "/certificacoes/iso-9001.png",
    tip: "Norma internacional de gestão da qualidade: processos documentados e auditoria contínua em toda a operação.",
  },
  {
    label: "ANVISA",
    src: "/certificacoes/anvisa.png",
    tip: "Habilitação da ANVISA para armazenagem de produtos sob vigilância sanitária.",
  },
  {
    label: "CETESB",
    src: "/certificacoes/cetesb.png",
    tip: "Licenciamento ambiental estadual para armazenagem de produto químico em São Paulo.",
  },
  {
    label: "IBAMA",
    src: "/certificacoes/ibama.png",
    tip: "Licenciamento federal para substância de controle ambiental.",
  },
  {
    label: "Polícia Federal",
    src: "/certificacoes/policia-federal.png",
    tip: "Licenciamento para produto controlado, precursor ou de duplo uso.",
  },
  {
    label: "Polícia Civil",
    src: "/certificacoes/policia-civil-sp.png",
    tip: "Licenciamento estadual complementar à operação.",
  },
  {
    label: "AVCB",
    src: "/certificacoes/bombeiros.png",
    tip: "Auto de Vistoria do Corpo de Bombeiros, vigente para o galpão.",
  },
  {
    label: "SASSMAQ",
    src: "/certificacoes/sassmaq.png",
    tip: "Sistema de Avaliação de Saúde, Segurança, Meio Ambiente e Qualidade.",
  },
  {
    label: "CRF",
    src: "/certificacoes/crf-sp.png",
    tip: "Conselho Regional de Farmácia: habilitação para operação com medicamentos.",
  },
] as const;

export const CERTIFICACOES = [
  {
    label: "ISO 9001",
    src: "/certificacoes/iso-9001.png",
    alt: "Logo ISO 9001:2015",
    text: "Gestão da qualidade auditada, com processos documentados em toda a operação.",
    featured: true,
  },
  {
    label: "ANVISA",
    src: "/certificacoes/anvisa.png",
    alt: "Logo da ANVISA, Agência Nacional de Vigilância Sanitária",
    text: "Habilitação para produtos sob vigilância sanitária, com rastreabilidade.",
    featured: true,
  },
  {
    label: "CETESB",
    src: "/certificacoes/cetesb.png",
    alt: "Logo da CETESB, Companhia Ambiental do Estado de São Paulo",
    text: "Licenciamento ambiental estadual para produto químico em São Paulo.",
    featured: true,
  },
  {
    label: "IBAMA",
    src: "/certificacoes/ibama.png",
    alt: "Logo do IBAMA",
    text: "Licenciamento federal para substâncias com controle ambiental.",
    featured: false,
  },
  {
    label: "Polícia Federal",
    src: "/certificacoes/policia-federal.png",
    alt: "Brasão da Polícia Federal",
    text: "Licença para produto controlado, precursor ou de duplo uso.",
    featured: false,
  },
  {
    label: "Polícia Civil",
    src: "/certificacoes/policia-civil-sp.png",
    alt: "Brasão da Polícia Civil do Estado de São Paulo",
    text: "Licenciamento estadual complementar à operação.",
    featured: false,
  },
  {
    label: "AVCB",
    src: "/certificacoes/bombeiros.png",
    alt: "Emblema do Corpo de Bombeiros de São Paulo",
    text: "Auto de Vistoria vigente para o galpão e operações de risco.",
    featured: false,
  },
  {
    label: "SASSMAQ",
    src: "/certificacoes/sassmaq.png",
    alt: "Logo SASSMAQ",
    text: "Avaliação de saúde, segurança, meio ambiente e qualidade.",
    featured: false,
  },
  {
    label: "CRF",
    src: "/certificacoes/crf-sp.png",
    alt: "Logo do Conselho Regional de Farmácia de São Paulo",
    text: "Habilitação do CRF-SP para operação com medicamentos.",
    featured: false,
  },
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
    label: "AVCB",
    tip: "Auto de Vistoria do Corpo de Bombeiros. Certifica que a estrutura atende às exigências de segurança contra incêndio pra armazenagem de produto de risco.",
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
    q: "A RC Armazém tem licença ambiental?",
    a: "Sim. Registro na CETESB, órgão ambiental do estado de São Paulo responsável por licenciar armazenagem de produto químico.",
    link: { href: "/compliance", label: "Ver todas as certificações →" },
  },
  {
    q: "Que tipos de produto vocês armazenam?",
    a: "Matérias-primas cosméticas, saneantes, correlatos, medicamentos (incluindo controlados), produtos químicos perigosos, resinas, polímeros, aditivos, equipamentos de TI e alimentícios. Cada categoria tem processo de armazenagem próprio, não é um galpão genérico.",
  },
  {
    q: "O transporte já sai incluso?",
    a: "Sim. Sua carga sai do nosso galpão direto na frota RC, sem repasse pra outra transportadora. Um único responsável do recebimento até a entrega.",
  },
  {
    q: "Como vocês rastreiam o que está armazenado?",
    a: "Todo item entra no sistema WMS no recebimento, com posição, lote e validade registrados. Você acompanha o estoque sem precisar ligar pra conferir.",
  },
  {
    q: "A armazenagem de medicamentos segue alguma norma específica da ANVISA?",
    a: "Sim. Seguimos a RDC 653/2022, que estabelece boas práticas de distribuição, armazenagem e transporte de medicamentos.",
  },
  {
    q: "Como funciona o controle de temperatura?",
    a: "Depende da área contratada: temos galpões com e sem climatização. Nosso time indica a opção certa pro seu produto.",
  },
  {
    q: "Existe seguro para a carga armazenada?",
    a: "Sim, a carga conta com cobertura de seguro. As condições variam por tipo de produto, então isso fica a cargo do time comercial.",
  },
  {
    q: "Qual o prazo mínimo de contrato?",
    a: "Varia por volume e tipo de operação. A proposta é montada sob medida a partir do seu perfil de carga.",
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

export const ESPACO_UNIDADES = [
  { id: "posicoes", label: "Posições de pallet", sufixo: "posições" },
  { id: "m2", label: "Metros quadrados", sufixo: "m²" },
  { id: "nao-sei", label: "Ainda não sei", sufixo: "" },
] as const;

export const TEMPERATURAS = [
  { id: "ambiente", label: "Não, temperatura ambiente" },
  { id: "controlada", label: "Sim, precisa de temperatura controlada" },
  { id: "nao-sei", label: "Não sei, preciso de orientação" },
] as const;

export const TRANSPORTE_ESCOPOS = [
  { id: "coleta-entrega", label: "Coleta e entrega" },
  { id: "coleta", label: "Só coleta até o galpão" },
  { id: "entrega", label: "Só entrega / distribuição" },
] as const;

export const SERVICOS_EXTRAS = [
  { id: "picking", label: "Picking e fracionamento" },
  { id: "etiquetagem", label: "Etiquetagem e rotulagem" },
  { id: "kits", label: "Montagem de kits" },
  { id: "paletizacao", label: "Paletização e filmagem" },
  { id: "cross-docking", label: "Cross-docking" },
  { id: "inventario", label: "Inventário periódico" },
  { id: "reversa", label: "Logística reversa / devoluções" },
] as const;
