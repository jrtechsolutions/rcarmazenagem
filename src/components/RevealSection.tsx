"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  /** Stagger .reveal-child elements inside when section enters view. */
  stagger?: boolean;
};

/** Scroll-reveal: opacity 0 → .in-view (IntersectionObserver threshold 0.15). */
export function RevealSection({
  children,
  className = "",
  alt,
  stagger,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`sec ${alt ? "sec-alt" : ""} ${stagger ? "sec-stagger" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
