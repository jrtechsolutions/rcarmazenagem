"use client";

import { useEffect, useRef } from "react";
import { NUMEROS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

function animateCount(el: HTMLElement, target: number, suffix: string) {
  const duration = 1200;
  const startTime = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(p * target).toLocaleString("pt-BR") + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  // Efeito visual: parte de 0 só no client, depois que o HTML já mostrou o valor real.
  el.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
}

function formatCount(value: number, suffix: string) {
  return `${value.toLocaleString("pt-BR")}${suffix}`;
}

type Props = {
  variant?: "cards" | "strip";
};

export function StatRow({ variant = "cards" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = ref.current;
    if (!row) return;
    return onVisibleOnce(row, () => {
      row.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        animateCount(el, Number(el.dataset.count), el.dataset.suffix ?? "");
      });
    });
  }, []);

  return (
    <div
      ref={ref}
      className={variant === "strip" ? "num-strip" : "stat-row"}
    >
      {NUMEROS.map((n) => {
        const isCount = n.value !== null && !n.display;
        const cellClass = variant === "strip" ? "num-cell" : "stat-box";
        return (
          <div key={n.label} className={cellClass}>
            <b
              data-count={isCount ? String(n.value) : undefined}
              data-suffix={isCount ? n.suffix : undefined}
            >
              {n.display ??
                (isCount
                  ? formatCount(n.value as number, n.suffix)
                  : `[ ]${n.suffix}`)}
            </b>
            <span className={variant === "strip" ? "lbl" : undefined}>
              {n.label}
            </span>
            {n.pendente ? (
              variant === "strip" ? (
                <span className="mocktag">pendente confirmação</span>
              ) : (
                <em className="stat-pending">pendente de confirmação</em>
              )
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
