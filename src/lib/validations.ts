import {
  ESPACO_UNIDADES,
  SEGMENTOS,
  SERVICOS_EXTRAS,
  TEMPERATURAS,
  TRANSPORTE_ESCOPOS,
  VOLUMES,
} from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEGMENT_IDS: readonly string[] = SEGMENTOS.map((s) => s.id);
const VOLUME_IDS: readonly string[] = VOLUMES.map((v) => v.id);
const ESPACO_UNIDADE_IDS: readonly string[] = ESPACO_UNIDADES.map((u) => u.id);
const TEMPERATURA_IDS: readonly string[] = TEMPERATURAS.map((t) => t.id);
const TRANSPORTE_ESCOPO_IDS: readonly string[] = TRANSPORTE_ESCOPOS.map((t) => t.id);
const SERVICO_IDS: readonly string[] = SERVICOS_EXTRAS.map((s) => s.id);
const ESPACO_MAX = 1_000_000;

export type QuoteInput = {
  nome: string;
  empresa: string;
  cnpj: string;
  email: string;
  telefone: string;
  tipoCarga: string;
  volumeMensal: string;
  espacoUnidade: string;
  espacoQuantidade: string;
  temperatura: string;
  mensagem: string;
  transporte: boolean;
  transporteEscopo: string;
  servicos: string[];
  website?: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

function str(v: unknown, max = 500) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").replace(/[\u0000-\u001F]/g, " ").trim();
}

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidCnpj(value: string) {
  const d = digitsOnly(value);
  if (d.length !== 14) return false;
  if (/^(\d)\1+$/.test(d)) return false;

  const calc = (base: string, factors: number[]) => {
    const sum = base
      .split("")
      .reduce((acc, n, i) => acc + Number(n) * factors[i], 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const d1 = calc(d.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = calc(d.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return d1 === Number(d[12]) && d2 === Number(d[13]);
}

export function parseQuoteBody(raw: unknown): QuoteInput {
  const b = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const transporte = b.transporte === undefined ? true : Boolean(b.transporte);
  const espacoUnidade = sanitizeText(str(b.espacoUnidade, 20));
  const servicos = Array.isArray(b.servicos)
    ? [...new Set(b.servicos.map((s) => str(s, 40)))].filter((s) =>
        SERVICO_IDS.includes(s),
      )
    : [];
  return {
    nome: sanitizeText(str(b.nome, 120)),
    empresa: sanitizeText(str(b.empresa, 160)),
    cnpj: digitsOnly(str(b.cnpj, 20)),
    email: sanitizeText(str(b.email, 180).toLowerCase()),
    telefone: sanitizeText(str(b.telefone, 40)),
    tipoCarga: sanitizeText(str(b.tipoCarga, 40)),
    volumeMensal: sanitizeText(str(b.volumeMensal, 40)),
    espacoUnidade,
    espacoQuantidade:
      espacoUnidade === "nao-sei" ? "" : digitsOnly(str(b.espacoQuantidade, 12)),
    temperatura: sanitizeText(str(b.temperatura, 20)),
    mensagem: sanitizeText(str(b.mensagem, 2000)),
    transporte,
    transporteEscopo: transporte ? sanitizeText(str(b.transporteEscopo, 20)) : "",
    servicos,
    website: str(b.website, 200),
  };
}

export function validateQuote(input: QuoteInput): QuoteErrors {
  const errors: QuoteErrors = {};

  if (input.nome.length < 2) errors.nome = "Informe seu nome.";
  if (input.empresa.length < 2) errors.empresa = "Informe a empresa.";
  if (!isValidCnpj(input.cnpj)) errors.cnpj = "CNPJ inválido.";
  if (!EMAIL_RE.test(input.email)) errors.email = "E-mail inválido.";

  const phoneDigits = digitsOnly(input.telefone);
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.telefone = "Telefone inválido.";
  }

  if (!SEGMENT_IDS.includes(input.tipoCarga)) {
    errors.tipoCarga = "Selecione o segmento.";
  }

  if (!VOLUME_IDS.includes(input.volumeMensal)) {
    errors.volumeMensal = "Selecione o volume estimado.";
  }

  if (!ESPACO_UNIDADE_IDS.includes(input.espacoUnidade)) {
    errors.espacoUnidade = "Selecione como medir o espaço.";
  } else if (input.espacoUnidade !== "nao-sei") {
    const qtd = Number(input.espacoQuantidade);
    if (!Number.isInteger(qtd) || qtd < 1 || qtd > ESPACO_MAX) {
      errors.espacoQuantidade = "Informe a quantidade estimada.";
    }
  }

  if (!TEMPERATURA_IDS.includes(input.temperatura)) {
    errors.temperatura = "Informe se precisa de temperatura controlada.";
  }

  if (input.transporte && !TRANSPORTE_ESCOPO_IDS.includes(input.transporteEscopo)) {
    errors.transporteEscopo = "Selecione o tipo de transporte.";
  }

  return errors;
}
