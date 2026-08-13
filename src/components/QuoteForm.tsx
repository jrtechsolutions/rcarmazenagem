"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SEGMENTOS, VOLUMES } from "@/lib/site";
import {
  parseQuoteBody,
  validateQuote,
  type QuoteErrors,
  type QuoteInput,
} from "@/lib/validations";

const EMPTY: QuoteInput = {
  nome: "",
  empresa: "",
  cnpj: "",
  email: "",
  telefone: "",
  tipoCarga: "",
  volumeMensal: "",
  mensagem: "",
  transporte: true,
  website: "",
};

export function QuoteForm() {
  const router = useRouter();
  const [values, setValues] = useState<QuoteInput>(EMPTY);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function update<K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const parsed = parseQuoteBody(values);
    const nextErrors = validateQuote(parsed);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSending(true);
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      if (res.status === 429) {
        setServerError("Muitas tentativas. Aguarde alguns minutos e tente de novo.");
        return;
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        setServerError(data?.error || "Não foi possível enviar. Tente de novo.");
        return;
      }
      router.push("/confirmacao");
    } catch {
      setServerError("Falha de conexão. Verifique sua rede e tente de novo.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" error={errors.nome}>
          <input
            name="nome"
            autoComplete="name"
            value={values.nome}
            onChange={(e) => update("nome", e.target.value)}
            className={inputClass(errors.nome)}
          />
        </Field>
        <Field label="Empresa" error={errors.empresa}>
          <input
            name="empresa"
            autoComplete="organization"
            value={values.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            className={inputClass(errors.empresa)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="CNPJ" error={errors.cnpj}>
          <input
            name="cnpj"
            inputMode="numeric"
            autoComplete="off"
            placeholder="00.000.000/0000-00"
            value={values.cnpj}
            onChange={(e) => update("cnpj", e.target.value)}
            className={inputClass(errors.cnpj)}
          />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefone" error={errors.telefone}>
          <input
            name="telefone"
            type="tel"
            autoComplete="tel"
            value={values.telefone}
            onChange={(e) => update("telefone", e.target.value)}
            className={inputClass(errors.telefone)}
          />
        </Field>
        <Field label="Tipo de produto / carga" error={errors.tipoCarga}>
          <select
            name="tipoCarga"
            value={values.tipoCarga}
            onChange={(e) => update("tipoCarga", e.target.value)}
            className={inputClass(errors.tipoCarga)}
          >
            <option value="">Selecione</option>
            {SEGMENTOS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nome}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Volume mensal estimado" error={errors.volumeMensal}>
        <select
          name="volumeMensal"
          value={values.volumeMensal}
          onChange={(e) => update("volumeMensal", e.target.value)}
          className={inputClass(errors.volumeMensal)}
        >
          <option value="">Selecione</option>
          {VOLUMES.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" error={errors.mensagem}>
        <textarea
          name="mensagem"
          rows={4}
          value={values.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={`${inputClass(errors.mensagem)} resize-y`}
        />
      </Field>

      <fieldset className="rounded-[12px] border border-borda bg-white px-4 py-3">
        <legend className="px-1 text-[13px] font-medium text-texto">
          Como sua carga chega até nós?
        </legend>
        <label className="mt-1 flex items-start gap-3 text-[13.5px] text-texto">
          <input
            type="checkbox"
            checked={values.transporte}
            onChange={(e) => update("transporte", e.target.checked)}
            className="mt-1 h-4 w-4 accent-verde"
          />
          <span>
            Quero que a RC também transporte
            {values.transporte ? (
              <span className="mt-1 block text-[12.5px] text-verde-escuro">
                Padrão da operação: galpão e frota no mesmo fluxo.
              </span>
            ) : (
              <span className="mt-1 block text-[12.5px] text-mono-ink">
                Sem transporte, a carga chega ao galpão por conta do cliente.
              </span>
            )}
          </span>
        </label>
      </fieldset>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {serverError ? (
        <p className="text-[13px] text-red-700" role="alert">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="w-fit rounded-[9px] bg-verde-escuro px-[22px] py-3 text-[13.5px] font-semibold text-white disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Solicitar orçamento"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-[13px]">
      <span className="mb-1.5 block font-medium text-texto">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-[12px] text-red-700">{error}</span>
      ) : null}
    </label>
  );
}

function inputClass(error?: string) {
  return [
    "w-full rounded-[8px] border bg-white px-3 py-2.5 text-[14px] text-texto outline-none",
    error ? "border-red-400" : "border-borda focus:border-verde",
  ].join(" ");
}
