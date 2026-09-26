"use client";

import type { ReactNode, SVGProps } from "react";
import { useEffect, useRef } from "react";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

const POLITICA_GESTAO = [
  "Buscar melhoria contínua em seus processos de trabalho, gerando qualidade e pontualidade.",
  "Desenvolver soluções que superem as expectativas de seus clientes.",
  "Treinar, capacitar e valorizar seus colaboradores visando sempre saúde e segurança em primeiro lugar.",
  "Atender rigorosamente aos requisitos e normas legais aplicáveis.",
  "Os colaboradores devem reduzir ao máximo os impactos ambientais gerados por suas atividades, mantendo sua saúde e segurança.",
] as const;

const MISSAO =
  "Nossa missão é armazenar produto regulado com qualidade, integridade e ética profissional — com o mesmo rigor documental que a carga exige na fábrica, respeitando o meio ambiente e tendo a segurança no trabalho como aliada.";

const VISAO =
  "A RC Armazém tem como objetivo ser referência em armazenagem regulada, pelo aprimoramento constante da equipe e dos processos logísticos — extensão natural de quem já confia na RC no transporte.";

const VALORES = [
  "Ética",
  "Transparência",
  "Valorização das pessoas",
  "Senso de urgência",
  "Trabalho em equipe",
  "Comprometimento",
  "Simplicidade",
  "Respeito ao próximo",
  "Segurança",
] as const;

type IconProps = SVGProps<SVGSVGElement>;

function IconTarget(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconEye(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconHeart(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M19.5 12.5c1.5-1.6 2-3.2 2-4.7A4.3 4.3 0 0017.2 3.5c-1.5 0-2.8.7-3.7 1.8L12 7l-1.5-1.7A4.5 4.5 0 006.8 3.5 4.3 4.3 0 002.5 7.8c0 1.5.5 3.1 2 4.7L12 21l7.5-8.5z" />
    </svg>
  );
}

function IdentityFlipCard({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon: (props: IconProps) => ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="qs-flip qs-stagger__item">
      <div className="qs-flip__inner" tabIndex={0} aria-label={title}>
        <div className="qs-flip__face qs-flip__front">
          <div className="qs-flip__icon" aria-hidden>
            <Icon />
          </div>
          <p className="qs-flip__title">{title}</p>
        </div>
        <div className="qs-flip__face qs-flip__back">
          <p className="qs-flip__title qs-flip__title--sm">{title}</p>
          <div className="qs-flip__body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function GestaoIntegrada() {
  const listRef = useRef<HTMLUListElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    if (listRef.current) {
      cleanups.push(
        onVisibleOnce(listRef.current, () => {
          listRef.current?.classList.add("reveal");
        }, 0.2),
      );
    }
    if (flipRef.current) {
      cleanups.push(
        onVisibleOnce(flipRef.current, () => {
          flipRef.current?.classList.add("reveal");
        }, 0.2),
      );
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="qs-gestao">
      <div className="qs-gestao-block">
        <p className="qs-gestao-kicker">Política de gestão integrada</p>
        <ul className="qs-gestao-list qs-stagger" ref={listRef}>
          {POLITICA_GESTAO.map((item) => (
            <li key={item} className="qs-stagger__item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="qs-flip-grid qs-stagger" ref={flipRef}>
        <IdentityFlipCard title="Missão" Icon={IconTarget}>
          <p>{MISSAO}</p>
        </IdentityFlipCard>
        <IdentityFlipCard title="Visão" Icon={IconEye}>
          <p>{VISAO}</p>
        </IdentityFlipCard>
        <IdentityFlipCard title="Valores" Icon={IconHeart}>
          <ul className="qs-flip__valores">
            {VALORES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </IdentityFlipCard>
      </div>
    </div>
  );
}
