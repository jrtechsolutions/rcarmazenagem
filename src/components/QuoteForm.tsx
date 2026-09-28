"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ESPACO_UNIDADES,
  SEGMENTOS,
  SERVICOS_EXTRAS,
  TEMPERATURAS,
  TRANSPORTE_ESCOPOS,
  VOLUMES,
} from "@/lib/site";
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
  espacoUnidade: "posicoes",
  espacoQuantidade: "",
  temperatura: "",
  mensagem: "",
  transporte: true,
  transporteEscopo: "coleta-entrega",
  servicos: [],
  website: "",
};

export function QuoteForm({ tipoCarga = "" }: { tipoCarga?: string }) {
  const router = useRouter();
  const [values, setValues] = useState<QuoteInput>({ ...EMPTY, tipoCarga });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function update<K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function toggleServico(id: string, checked: boolean) {
    setValues((v) => ({
      ...v,
      servicos: checked
        ? [...v.servicos, id]
        : v.servicos.filter((s) => s !== id),
    }));
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

  const unidade = ESPACO_UNIDADES.find((u) => u.id === values.espacoUnidade);
  const semQuantidade = values.espacoUnidade === "nao-sei";

  return (
    <form onSubmit={onSubmit} className="grid gap-8" noValidate>
      <Section title="Seus dados">
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
      </Section>

      <Section title="Sua operação">
        <Field label="Segmento" error={errors.tipoCarga}>
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

        <fieldset className="grid gap-1.5 text-[13px]">
          <legend className="mb-1.5 font-medium text-texto">
            Espaço necessário
          </legend>
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
            <select
              name="espacoUnidade"
              aria-label="Unidade de medida do espaço"
              value={values.espacoUnidade}
              onChange={(e) => update("espacoUnidade", e.target.value)}
              className={inputClass(errors.espacoUnidade)}
            >
              {ESPACO_UNIDADES.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.label}
                </option>
              ))}
            </select>
            {semQuantidade ? (
              <p className="self-center text-[12.5px] text-mono-ink">
                Sem problema: o comercial ajuda a dimensionar.
              </p>
            ) : (
              <div className="relative">
                <input
                  name="espacoQuantidade"
                  inputMode="numeric"
                  aria-label={`Quantidade em ${unidade?.sufixo ?? ""}`}
                  placeholder="Ex.: 120"
                  value={values.espacoQuantidade}
                  onChange={(e) =>
                    update("espacoQuantidade", e.target.value.replace(/\D/g, ""))
                  }
                  className={`${inputClass(errors.espacoQuantidade)} pr-20`}
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[12.5px] text-mono-ink">
                  {unidade?.sufixo}
                </span>
              </div>
            )}
          </div>
          <FieldError error={errors.espacoUnidade || errors.espacoQuantidade} />
        </fieldset>

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

        <fieldset className="grid gap-2 text-[13px]">
          <legend className="mb-1.5 font-medium text-texto">
            Precisa de temperatura controlada?
          </legend>
          {TEMPERATURAS.map((t) => (
            <label
              key={t.id}
              className="flex items-center gap-3 text-[13.5px] text-texto"
            >
              <input
                type="radio"
                name="temperatura"
                value={t.id}
                checked={values.temperatura === t.id}
                onChange={() => update("temperatura", t.id)}
                className="h-4 w-4 accent-verde"
              />
              {t.label}
            </label>
          ))}
          <FieldError error={errors.temperatura} />
        </fieldset>
      </Section>

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
        {values.transporte ? (
          <div
            role="radiogroup"
            aria-label="Tipo de transporte"
            className="mt-3 flex flex-wrap gap-2 pl-7"
          >
            {TRANSPORTE_ESCOPOS.map((t) => (
              <label key={t.id} className={chipClass(values.transporteEscopo === t.id)}>
                <input
                  type="radio"
                  name="transporteEscopo"
                  value={t.id}
                  checked={values.transporteEscopo === t.id}
                  onChange={() => update("transporteEscopo", t.id)}
                  className="sr-only"
                />
                {t.label}
              </label>
            ))}
            <FieldError error={errors.transporteEscopo} />
          </div>
        ) : null}
      </fieldset>

      <fieldset className="grid gap-2 text-[13px]">
        <legend className="mb-1.5 font-medium text-texto">
          Serviços extras de interesse{" "}
          <span className="font-normal text-mono-ink">(opcional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {SERVICOS_EXTRAS.map((s) => {
            const checked = values.servicos.includes(s.id);
            return (
              <label key={s.id} className={chipClass(checked)}>
                <input
                  type="checkbox"
                  name="servicos"
                  value={s.id}
                  checked={checked}
                  onChange={(e) => toggleServico(s.id, e.target.checked)}
                  className="sr-only"
                />
                {s.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="Mensagem" error={errors.mensagem}>
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Particularidades da carga, prazos, cidades de entrega…"
          value={values.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={`${inputClass(errors.mensagem)} resize-y`}
        />
      </Field>

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
        className="btn w-fit rounded-[9px] bg-ambar px-[22px] py-3 text-[13.5px] font-semibold disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Solicitar orçamento"}
      </button>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4">
      <h2 className="border-b border-borda pb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-mono-ink">
        {title}
      </h2>
      {children}
    </section>
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
      <FieldError error={error} />
    </label>
  );
}

function FieldError({ error }: { error?: string }) {
  return error ? (
    <span className="mt-1 block basis-full text-[12px] text-red-700">{error}</span>
  ) : null;
}

function inputClass(error?: string) {
  return [
    "w-full rounded-[8px] border bg-white px-3 py-2.5 text-[14px] text-texto outline-none",
    error ? "border-red-400" : "border-borda focus:border-verde",
  ].join(" ");
}

function chipClass(active: boolean) {
  return [
    "cursor-pointer select-none rounded-full border px-3 py-1.5 text-[13px] transition-colors",
    "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-verde",
    active
      ? "border-verde bg-verde/10 text-verde-escuro"
      : "border-borda bg-white text-texto hover:border-verde",
  ].join(" ");
}
