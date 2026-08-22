"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";

export type CardTone = "t1" | "t2" | "t3";

export function NumberedCard({
  index,
  tone,
  title,
  text,
  icon,
  proof,
}: {
  index: number;
  tone: CardTone;
  title: string;
  text: string;
  icon: ReactNode;
  proof?: { label: string; href: string };
}) {
  return (
    <article className={`fleet-num-card ${tone}`}>
      <span className="num">{String(index + 1).padStart(2, "0")}</span>
      <div className="ic">{icon}</div>
      <h5>{title}</h5>
      <p>{text}</p>
      {proof ? (
        <Link href={proof.href} className="proof">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden
          >
            <path d="M5 13l4 4 10-10" />
          </svg>
          {proof.label}
        </Link>
      ) : null}
    </article>
  );
}

export function useNumCardReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".fleet-num-card");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((c) => c.classList.add("reveal"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cards.forEach((c, i) => {
            c.style.animationDelay = `${i * 0.07}s`;
            c.classList.add("reveal");
          });
          observer.disconnect();
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);
}

export function NumCardGrid({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useNumCardReveal(ref);
  return (
    <div className="fleet-num-grid" ref={ref}>
      {children}
    </div>
  );
}
