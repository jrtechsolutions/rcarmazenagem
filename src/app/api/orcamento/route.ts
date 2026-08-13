import { NextResponse } from "next/server";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { parseQuoteBody, validateQuote } from "@/lib/validations";
import { SEGMENTOS, SITE, VOLUMES } from "@/lib/site";

export async function POST(request: Request) {
  const ip = clientIp(request.headers);
  const limited = rateLimit(ip, 5, 10 * 60 * 1000);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em alguns minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(limited.retryAfterMs / 1000)),
        },
      },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const input = parseQuoteBody(raw);

  if (input.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateQuote(input);
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Dados inválidos.", errors }, { status: 400 });
  }

  const segmento =
    SEGMENTOS.find((s) => s.id === input.tipoCarga)?.nome ?? input.tipoCarga;
  const volume =
    VOLUMES.find((v) => v.id === input.volumeMensal)?.label ?? input.volumeMensal;

  const payload = {
    nome: input.nome,
    empresa: input.empresa,
    cnpj: input.cnpj,
    email: input.email,
    telefone: input.telefone,
    tipoCarga: segmento,
    volumeMensal: volume,
    mensagem: input.mensagem,
    transporte: input.transporte,
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || SITE.email;

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("webhook");
    } else if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_FROM_EMAIL || "orcamento@rcarmazenagem.com.br",
          to: [to],
          subject: `Orçamento RC Armazenagem — ${segmento} (${payload.empresa})`,
          text: [
            `Nome: ${payload.nome}`,
            `Empresa: ${payload.empresa}`,
            `CNPJ: ${payload.cnpj}`,
            `E-mail: ${payload.email}`,
            `Telefone: ${payload.telefone}`,
            `Produto/carga: ${payload.tipoCarga}`,
            `Volume mensal: ${payload.volumeMensal}`,
            `Transporte RC: ${payload.transporte ? "sim" : "não"}`,
            "",
            payload.mensagem,
          ].join("\n"),
        }),
      });
      if (!res.ok) throw new Error("resend");
    } else if (process.env.NODE_ENV === "production") {
      console.error("[orcamento] nenhum canal de envio configurado");
      return NextResponse.json(
        { error: "Canal de envio não configurado." },
        { status: 503 },
      );
    } else {
      console.info("[orcamento:dev]", payload);
    }
  } catch {
    return NextResponse.json(
      { error: "Falha ao registrar o orçamento." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
