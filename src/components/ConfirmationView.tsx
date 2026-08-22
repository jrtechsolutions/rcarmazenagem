import Link from "next/link";
import { IconArrowLeft, IconCheck, IconWhatsApp } from "@/components/Icons";
import { SITE } from "@/lib/site";

const STEPS = [
  { title: "Recebemos", text: "Chegou pra nossa equipe agora", done: true },
  { title: "Retornamos", text: "Em até 4h úteis", done: false },
  { title: "Confirmamos", text: "Data e detalhes da visita", done: false },
] as const;

type Props = {
  tone: "verde" | "azul";
  description: string;
  ctaHref: string;
  ctaLabel: string;
  ctaExternal?: boolean;
};

export function ConfirmationView({
  tone,
  description,
  ctaHref,
  ctaLabel,
  ctaExternal,
}: Props) {
  return (
    <div className="conf-outer">
      <div className={`conf-wrap conf-${tone}`}>
        <div className="check-circle" aria-hidden>
          <IconCheck />
        </div>

        <p className="conf-eyebrow">Orçamento</p>
        <h1>Recebemos sua solicitação.</h1>
        <p className="conf-lead">{description}</p>

        <ol className="stepper" aria-label="O que acontece agora">
          {STEPS.map((step, i) => (
            <li key={step.title} className={step.done ? "step done" : "step"}>
              <div className="step-line" aria-hidden />
              <div className="step-circle">{step.done ? "✓" : i + 1}</div>
              <p className="step-title">{step.title}</p>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="whatsapp-line">
          <div className="ic" aria-hidden>
            <IconWhatsApp />
          </div>
          <div className="txt">
            <b>Prazo apertado?</b>
            <span>
              Fale direto no WhatsApp, sem esperar o retorno por e-mail.
            </span>
          </div>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.whatsapp} →
          </a>
        </div>

        <div className="conf-cta-col">
          {ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="conf-cta"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className="conf-cta">
              {ctaLabel}
            </Link>
          )}
          <Link href="/" className="conf-back">
            <IconArrowLeft />
            Voltar para a home
          </Link>
        </div>
      </div>
    </div>
  );
}
