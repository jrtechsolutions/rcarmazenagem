"use client";

import { useEffect, useRef } from "react";
import { DEPOIMENTOS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

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
        <blockquote
          key={`${d.empresa}-${d.autor}`}
          className={`depo-card ${d.ficticio ? "is-ficticio" : ""}`}
        >
          {d.ficticio ? <span className="fict-tag">FICTÍCIO</span> : null}
          <span className="quote-mark" aria-hidden>
            &quot;
          </span>
          <p>“{d.quote}”</p>
          <footer>
            <b>{d.empresa}</b>
            <span className="role">{d.autor}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
