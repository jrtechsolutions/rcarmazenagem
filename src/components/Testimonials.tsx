"use client";

import { useEffect, useRef } from "react";
import { DEPOIMENTOS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

function Stars({ n }: { n: number }) {
  return (
    <span className="depo-stars" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: n }, (_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </span>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    return onVisibleOnce(grid, () => {
      const cards = grid.querySelectorAll<HTMLElement>(".depo-card");
      cards.forEach((card, i) => {
        window.setTimeout(() => card.classList.add("on"), i * 150);
      });
    });
  }, []);

  return (
    <div className="depo-grid" ref={ref}>
      {DEPOIMENTOS.map((d) => (
        <blockquote key={d.autor} className="depo-card">
          <Stars n={d.estrelas} />
          <span className="quote-mark" aria-hidden>
            &quot;
          </span>
          <p>“{d.quote}”</p>
          <footer>
            <b>{d.autor}</b>
            <span className="role">Avaliação no {d.fonte}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
