"use client";

import { useEffect, useRef, useState } from "react";
import { CERTIFICACOES } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

function prefersTapFlip() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
}

export function CertWall() {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<string | null>(null);

  useEffect(() => {
    const wall = ref.current;
    if (!wall) return;
    return onVisibleOnce(wall, () => wall.classList.add("reveal"), 0.15);
  }, []);

  const toggle = (label: string) => {
    if (!prefersTapFlip()) return;
    setFlipped((current) => (current === label ? null : label));
  };

  return (
    <div className="cert-flip-grid" ref={ref}>
      {CERTIFICACOES.map((item) => {
        const isFlipped = flipped === item.label;
        return (
          <div
            key={item.label}
            className={`cert-flip${isFlipped ? " is-flipped" : ""}`}
          >
            <div
              className="cert-flip__inner"
              tabIndex={0}
              role="button"
              aria-expanded={isFlipped}
              aria-label={`${item.label}. ${item.text}`}
              onClick={() => toggle(item.label)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(item.label);
                }
              }}
            >
              <div className="cert-flip__face cert-flip__front">
                <div className="cert-flip__logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt=""
                    width={140}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="cert-flip__title">{item.label}</p>
              </div>
              <div className="cert-flip__face cert-flip__back">
                <p className="cert-flip__title cert-flip__title--sm">
                  {item.label}
                </p>
                <p className="cert-flip__text">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
