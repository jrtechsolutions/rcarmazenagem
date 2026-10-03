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
    nome: "Cosméticos",
    descricao:
      "Bases, óleos, essências e ativos da indústria cosmética, com controle por lote e validade.",
    cert: "Rastreio por lote",
    icon: "lipstick" as const,
    image: "/segmentos/cosmeticos.jpg",
    href: "/armazenagem-materias-primas-cosmeticos",
  },
  {
    id: "saneantes",
    nome: "Saneantes",
    descricao: "Tensoativos e ativos de desinfecção. Operação em processo de regularização.",
    cert: "Em regularização",
    icon: "spray" as const,
    image: "/segmentos/saneantes.jpg",
    href: "/armazenagem-saneantes",
  },
  {
    id: "correlatos",
    nome: "Correlatos",
    descricao: "Polímeros grau médico, látex e componentes, com rastreio por lote e estoque bloqueado separado.",
    cert: "Rastreio por lote",
    icon: "stethoscope" as const,
    image: "/segmentos/correlatos.jpg",
    href: "/armazenagem-correlatos",
  },
  {
    id: "medicamentos",
    nome: "Medicamentos",
    descricao: "Princípios ativos, excipientes e embalagens, com processo conforme a RDC 430/2020.",
    cert: "Farmacêutico RT",
    icon: "capsule" as const,
    image: "/segmentos/medicamentos.jpg",
    href: "/armazenagem-medicamentos",
  },
  {
    id: "medicamentos-controlados",
    nome: "Medicamentos controlados",
    descricao:
      "Área restrita com acesso registrado. Autorização Especial da ANVISA em processo de regularização.",
    cert: "Polícia Federal e Civil",
    icon: "shield" as const,
    image: "/segmentos/medicamentos-controlados.jpg",
    href: "/armazenagem-medicamentos-controlados",
    risco: "Em regularização",
  },
  {
    id: "quimicos",
    nome: "Químicos",
    descricao:
      "Tóxicos, corrosivos e diversos como matéria-prima, com segregação por classe de risco e brigada treinada.",
    cert: "Polícia Federal",
    icon: "hazard" as const,
    image: "/segmentos/quimicos.jpg",
    href: "/armazenagem-produtos-quimicos-perigosos",
    risco: "Classes 6, 8 e 9",
  },
  {
    id: "resinas",
    nome: "Resinas e química industrial",
    descricao:
      "Resina epóxi, poliuretano e endurecedor com controle de classe e validade.",
    cert: "IBAMA",
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
      "Cargas minerais, antioxidantes e aceleradores, com controle por lote e separação personalizada.",
    cert: "Rastreio por lote",
    icon: "drop" as const,
    image: "/segmentos/aditivos.jpg",
    href: "/armazenagem-aditivos-especialidades-quimicas",
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
    texto: "Separação por pedido, conferência e saída na frota RC ou na transportadora que você indicar.",
    video: "/assets-visuais/fluxo-expedicao.mp4",
    legend:
      "Separação por pedido, conferência de saída e carregamento. Na frota RC, a rastreabilidade não quebra na troca de fornecedor.",
    detalhe:
      "Separação por pedido ou solicitação de venda, conferência de saída e carregamento. A carga pode seguir na frota RC, sem trocar de fornecedor no meio, ou na transportadora que você indicar.",
  },
] as const;

/** Intro da página Como funciona — fluxo no galpão + continuidade do grupo. */
export const COMO_FUNCIONA_INTRO =
  "Recebimento, estocagem e expedição sob a mesma operação. Se a carga precisa seguir, ela pode sair do nosso galpão direto para a frota RC — sem trocar de fornecedor no meio — ou na transportadora que você preferir.";

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
    title: "WMS Senior com rastreio por lote",
    text: "Sistema Senior registra posição, lote, validade, entrada e saída. Nada se move sem ficar registrado.",
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
    titulo: "WMS Senior e rastreio por lote",
    texto:
      "Cada posição de pallet é definida por tipo de produto e FEFO. Pelo Senior você acompanha o que entrou, onde está e o que sai.",
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
      "Processo para químico classificado, medicamento e correlato, com área de bloqueio para avariados. Não é galpão genérico.",
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
    titulo: "WMS Senior",
    texto: "Posição, lote, validade e saída FEFO no sistema, não na memória de quem opera.",
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

/** Fotos reais do galpão RC (sem geração por IA). */
export const FOTOS_GALPAO = {
  corredor: {
    src: "/fotos-galpao/corredor-principal.jpg",
    alt: "Corredor principal do galpão RC com porta-paletes carregados e pallets vazios empilhados",
    label: "Corredor principal · porta-paletes por zona",
  },
  enderecamento: {
    src: "/fotos-galpao/corredor-enderecamento.jpg",
    alt: "Corredor de porta-paletes com placas de endereçamento J e I",
    label: "Endereçamento por rua · posição no WMS",
  },
  doca: {
    src: "/fotos-galpao/doca-expedicao.jpg",
    alt: "Pallets filmados prontos para expedição em frente às portas de doca",
    label: "Carga pronta na doca · expedição",
  },
  identidade: {
    src: "/fotos-galpao/doca-identidade-rc.jpg",
    alt: "Área de docas cobertas com a placa RC Transportes e Logística",
    label: "Docas da operação RC",
  },
  extintor: {
    src: "/fotos-galpao/seguranca-extintor.jpg",
    alt: "Extintor e placa de equipamentos de segurança de uso obrigatório presos no porta-paletes",
    label: "Extintor e EPI obrigatório sinalizados no rack",
  },
  placas: {
    src: "/fotos-galpao/seguranca-placas.jpg",
    alt: "Placas de proibido consumo de alimentos na área operacional e de segurança na área de expedição",
    label: "Regras da área operacional sinalizadas",
  },
  estocagem: {
    src: "/fotos-galpao/estocagem-reach-truck.jpg",
    alt: "Empilhadeira retrátil parada no corredor de porta-paletes do galpão RC",
    label: "Foto real · empilhadeira retrátil no corredor",
  },
} as const;

export const STATUS_REGULARIZACAO = "Em processo de regularização";

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
      "AFE e Autorização Especial em processo de regularização, com farmacêutico responsável técnico já na operação.",
    status: STATUS_REGULARIZACAO,
  },
  {
    label: "Polícia Federal",
    src: "/certificacoes/policia-federal.png",
    alt: "Brasão da Polícia Federal",
    texto:
      "Operação habilitada para produto controlado, precursor ou de duplo uso.",
  },
  {
    label: "Polícia Civil",
    src: "/certificacoes/policia-civil-sp.png",
    alt: "Brasão da Polícia Civil do Estado de São Paulo",
    texto:
      "Licença estadual para produto controlado, complementar à da Polícia Federal.",
  },
  {
    label: "IBAMA",
    src: "/certificacoes/ibama.png",
    alt: "Logo do IBAMA",
    texto:
      "Licenciamento federal para substâncias com controle ambiental.",
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
      "Licenças e registros disponíveis quando o cliente ou o órgão pedir. Visitas e auditorias de cliente são bem-vindas.",
    src: FOTOS_GALPAO.doca.src,
    alt: FOTOS_GALPAO.doca.alt,
  },
] as const;

export const COMPLIANCE_DESTAQUE: readonly ComplianceItem[] = [
  {
    titulo: "PAE com brigada",
    texto:
      "Plano de Atendimento a Emergências com brigada treinada para a operação do galpão.",
    icon: "clipboard",
  },
  {
    titulo: "Contenção de vazamento",
    texto: "Procedimento definido para conter derramamento de produto químico.",
    icon: "check",
  },
  {
    titulo: "Controle de Acesso",
    texto: "Restrição e registro de entrada por área sensível.",
    icon: "rack",
  },
  {
    titulo: "Área de bloqueio",
    texto:
      "Avaria separada já no recebimento. Itens avariados, devolvidos ou em análise ficam bloqueados.",
    icon: "warehouse",
  },
  {
    titulo: "Auditoria de Lote",
    texto: "Lote, validade e posição registrados no WMS Senior, com saída FEFO.",
    icon: "nested",
  },
  {
    titulo: "FDS por produto",
    texto:
      "Ficha com Dados de Segurança arquivada e disponível para cada item químico, conforme a ABNT NBR 14725.",
    icon: "clipboard",
  },
  {
    titulo: "Registro de Temperatura",
    texto:
      "Área climatizada com registro de temperatura em processo de regularização junto à ANVISA.",
    icon: "nested",
  },
] as const;

/** Controles internos — sem repetir as licenças do grid/muro. */
export const COMPLIANCE_GROUPS = [
  {
    head: "Emergência",
    tone: "default" as const,
    items: [COMPLIANCE_DESTAQUE[0], COMPLIANCE_DESTAQUE[1]],
  },
  {
    head: "Controle operacional",
    tone: "ops" as const,
    items: [
      COMPLIANCE_DESTAQUE[2],
      COMPLIANCE_DESTAQUE[3],
      COMPLIANCE_DESTAQUE[4],
      COMPLIANCE_DESTAQUE[6],
    ],
  },
  {
    head: "Documentação técnica",
    tone: "default" as const,
    items: [COMPLIANCE_DESTAQUE[5]],
  },
] as const;

export const CERTS_COMPLETAS = [
  "Polícia Federal",
  "Polícia Civil",
  "AVCB (Corpo de Bombeiros)",
  "Licença Ambiental IBAMA",
  "ANVISA (em processo de regularização)",
] as const;

export const CERT_MARQUEE = [
  {
    label: "ANVISA",
    src: "/certificacoes/anvisa.png",
    tip: "AFE e Autorização Especial da ANVISA em processo de regularização.",
    status: STATUS_REGULARIZACAO,
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
] as const;

export const CERTIFICACOES = [
  {
    label: "Polícia Federal",
    src: "/certificacoes/policia-federal.png",
    alt: "Brasão da Polícia Federal",
    text: "Licença para produto controlado, precursor ou de duplo uso.",
    featured: true,
  },
  {
    label: "Polícia Civil",
    src: "/certificacoes/policia-civil-sp.png",
    alt: "Brasão da Polícia Civil do Estado de São Paulo",
    text: "Licença estadual para produto controlado, complementar à da Polícia Federal.",
    featured: true,
  },
  {
    label: "AVCB",
    src: "/certificacoes/bombeiros.png",
    alt: "Emblema do Corpo de Bombeiros de São Paulo",
    text: "Auto de Vistoria do Corpo de Bombeiros vigente para o galpão e operações de risco.",
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
    label: "ANVISA",
    src: "/certificacoes/anvisa.png",
    alt: "Logo da ANVISA, Agência Nacional de Vigilância Sanitária",
    text: "AFE e Autorização Especial em processo de regularização. Farmacêutico responsável técnico já na operação.",
    featured: false,
    status: STATUS_REGULARIZACAO,
  },
] as const;

export const CERTS_COMPLEMENTARES = [
  {
    label: "Polícia Federal e Polícia Civil",
    tip: "Licenças para armazenagem de produto controlado, precursor ou de duplo uso.",
  },
  {
    label: "AVCB",
    tip: "Auto de Vistoria do Corpo de Bombeiros. Certifica que a estrutura atende às exigências de segurança contra incêndio pra armazenagem de produto de risco.",
  },
  {
    label: "IBAMA",
    tip: "Licença ambiental federal para substâncias com controle ambiental.",
  },
] as const;

export const FAQ = [
  {
    q: "Quais licenças a RC Armazém tem?",
    a: "Polícia Federal, Polícia Civil, AVCB do Corpo de Bombeiros e licença ambiental do IBAMA. A habilitação ANVISA está em processo de regularização.",
    link: { href: "/compliance", label: "Ver todas as certificações →" },
  },
  {
    q: "Que tipos de produto vocês armazenam?",
    a: "Somente matéria-prima: insumos cosméticos, matérias-primas para correlatos, insumos farmacêuticos, químicos (classes de risco 6, 8 e 9), resinas, polímeros e aditivos. Produto acabado não faz parte do escopo. Saneantes e insumos controlados estão em processo de regularização.",
  },
  {
    q: "Atendem pessoa física?",
    a: "Não. A RC Armazém atende somente empresas com CNPJ.",
  },
  {
    q: "Que serviços estão inclusos além da armazenagem?",
    a: "Separação por pedido ou solicitação de venda, etiquetagem e reetiquetagem, paletização e filmagem, inventários cíclicos, rotativos e gerais, consolidação de produtos num mesmo pedido, gestão de devoluções e registro de avarias no recebimento.",
  },
  {
    q: "Preciso usar o transporte da RC?",
    a: "Não. A carga pode sair na frota RC, sem repasse pra outra empresa e com um único responsável do recebimento até a entrega, ou na transportadora que você indicar.",
  },
  {
    q: "Como vocês rastreiam o que está armazenado?",
    a: "Todo item entra no WMS Senior no recebimento, com posição, lote e validade registrados, e a saída segue FEFO. Pelo Senior você acompanha estoque e pedidos, e a integração com o seu ERP também é feita por ele.",
  },
  {
    q: "A armazenagem de insumos farmacêuticos segue alguma norma da ANVISA?",
    a: "Sim. O processo segue a RDC 430/2020, de boas práticas de distribuição e armazenagem, com farmacêutico responsável técnico. A AFE e a Autorização Especial da ANVISA estão em processo de regularização.",
  },
  {
    q: "Vocês têm área com temperatura controlada?",
    a: "A área climatizada com registro de temperatura está em processo de regularização junto à ANVISA. Fale com o comercial para saber o prazo e se o seu produto precisa dela.",
  },
  {
    q: "Existe seguro para a carga?",
    a: "Sim. O seguro da carga armazenada no galpão e o do transporte são diferentes e têm condições próprias. O time comercial detalha as duas coberturas conforme o tipo de produto.",
  },
  {
    q: "Qual o horário de recebimento? Posso visitar o galpão?",
    a: "O recebimento funciona em horário comercial. Visitas e auditorias de cliente são bem-vindas: é só agendar com o time comercial.",
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
  { id: "picking", label: "Separação por pedido" },
  { id: "etiquetagem", label: "Etiquetagem e reetiquetagem" },
  { id: "consolidacao", label: "Consolidação de produtos no pedido" },
  { id: "paletizacao", label: "Paletização e filmagem" },
  { id: "inventario", label: "Inventário cíclico, rotativo ou geral" },
  { id: "reversa", label: "Gestão de devoluções" },
] as const;

/** Serviços confirmados pela operação (levantamento RC). */
export const SERVICOS = [
  {
    titulo: "Separação por pedido",
    texto: "Separação por pedido ou solicitação de venda, conferida antes da saída.",
  },
  {
    titulo: "Etiquetagem e reetiquetagem",
    texto: "Identificação de volumes e lotes na entrada ou conforme a exigência do destino.",
  },
  {
    titulo: "Paletização e filmagem",
    texto: "Carga montada e filmada no pallet, pronta para carregar.",
  },
  {
    titulo: "Inventário",
    texto: "Inventários cíclicos, rotativos e gerais, com divergência tratada no sistema.",
  },
  {
    titulo: "Consolidação",
    texto: "Vários produtos num mesmo pedido, montado sob medida para o seu cliente.",
  },
  {
    titulo: "Devoluções e avarias",
    texto: "Gestão de devoluções e registro de avarias já no recebimento, com área de bloqueio.",
  },
] as const;
