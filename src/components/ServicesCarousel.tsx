"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type ServicesCarouselItem = {
  title: string;
  text: string;
  href?: string;
  cta?: string;
  external?: boolean;
};

type Props = {
  items: readonly ServicesCarouselItem[];
  intervalMs?: number;
};

export function ServicesCarousel({ items, intervalMs = 4200 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const goTo = useCallback(
    (next: number) => {
      const el = trackRef.current;
      if (!el || count === 0) return;
      const i = ((next % count) + count) % count;
      setIndex(i);
      const card = el.children[i] as HTMLElement | undefined;
      if (!card) return;
      const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    },
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % count;
        const el = trackRef.current;
        const card = el?.children[next] as HTMLElement | undefined;
        if (el && card) {
          const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
          el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
        }
        return next;
      });
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, count, intervalMs]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const node = child as HTMLElement;
        const mid = node.offsetLeft + node.offsetWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setIndex(best);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="svc-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="svc-carousel__track" ref={trackRef}>
        {items.map((item, i) => (
          <article
            key={item.title}
            className={`svc-carousel__card tone-${(i % 3) + 1}${i === index ? " is-active" : ""}`}
          >
            <span className="svc-carousel__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.href ? (
              item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-carousel__link"
                >
                  {item.cta ?? "Saber mais →"}
                </a>
              ) : (
                <Link href={item.href} className="svc-carousel__link">
                  {item.cta ?? "Saber mais →"}
                </Link>
              )
            ) : null}
          </article>
        ))}
      </div>

      <div className="svc-carousel__controls">
        <button
          type="button"
          className="svc-carousel__nav"
          aria-label="Anterior"
          onClick={() => goTo(index - 1)}
        >
          ‹
        </button>
        <div className="svc-carousel__dots" role="tablist" aria-label="Serviços">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para ${item.title}`}
              className={`svc-carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="svc-carousel__nav"
          aria-label="Próximo"
          onClick={() => goTo(index + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
