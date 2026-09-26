"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { COMO_FUNCIONA_PILARES } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

export function ComoFuncionaBridge() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return onVisibleOnce(
      root,
      () => {
        root.querySelectorAll<HTMLElement>(".cf-pillar").forEach((el, i) => {
          window.setTimeout(() => el.classList.add("on"), i * 120);
        });
      },
      0.15,
    );
  }, []);

  return (
    <div className="cf-bridge" ref={ref}>
      <p className="cf-bridge__lead">
        A RC Armazém faz parte do <strong>Grupo RC</strong>. Guardar e transportar
        produto regulado sob o mesmo padrão evita o ponto em que a rastreabilidade
        costuma quebrar: a troca de empresa.
      </p>
      <div className="cf-pillars">
        {COMO_FUNCIONA_PILARES.map((item) => {
          const className = `cf-pillar cf-pillar--${item.tone}`;
          const content = (
            <>
              <span className="cf-pillar__label">{item.label}</span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <span className="cf-pillar__cta">{item.cta} →</span>
            </>
          );
          return item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
