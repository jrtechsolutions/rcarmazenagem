import { SEGMENTOS, VOLUMES } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEGMENT_IDS = SEGMENTOS.map((s) => s.id);
const VOLUME_IDS = VOLUMES.map((v) => v.id);

export type QuoteInput = {
  nome: string;
  empresa: string;
  cnpj: string;
  email: string;
  telefone: string;
  tipoCarga: string;
  volumeMensal: string;
  mensagem: string;
  transporte: boolean;
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
  return {
    nome: sanitizeText(str(b.nome, 120)),
    empresa: sanitizeText(str(b.empresa, 160)),
    cnpj: digitsOnly(str(b.cnpj, 20)),
    email: sanitizeText(str(b.email, 180).toLowerCase()),
    telefone: sanitizeText(str(b.telefone, 40)),
    tipoCarga: sanitizeText(str(b.tipoCarga, 40)),
    volumeMensal: sanitizeText(str(b.volumeMensal, 40)),
    mensagem: sanitizeText(str(b.mensagem, 2000)),
    transporte: b.transporte === undefined ? true : Boolean(b.transporte),
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

  if (!SEGMENT_IDS.includes(input.tipoCarga as (typeof SEGMENT_IDS)[number])) {
    errors.tipoCarga = "Selecione o tipo de produto.";
  }

  if (!VOLUME_IDS.includes(input.volumeMensal as (typeof VOLUME_IDS)[number])) {
    errors.volumeMensal = "Selecione o volume estimado.";
  }

  return errors;
}
