"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * How oversized the inner layer is vs the frame (1.35 = 35% taller).
   * Travel distance = overflow created by this factor.
   */
  cover?: number;
};

/**
 * Scroll-window parallax: image is taller than the frame and translates
 * opposite to scroll — feels like descending/ascending inside the photo.
 */
export function ParallaxMedia({
  children,
  className = "",
  cover = 1.4,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      inner.style.transform = "none";
      inner.style.height = "100%";
      return;
    }

    // Inner is taller than frame; we slide it through the overflow.
    const applySize = () => {
      inner.style.position = "absolute";
      inner.style.left = "0";
      inner.style.right = "0";
      inner.style.top = "0";
      inner.style.width = "100%";
      inner.style.height = `${cover * 100}%`;
    };
    applySize();

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      if (!active) return;

      const rect = wrap.getBoundingClientRect();
      if (rect.height < 8) return;

      const viewH = window.innerHeight || 1;
      // 0 = frame just entering bottom; 1 = frame just leaving top
      const start = viewH;
      const end = -rect.height;
      const span = start - end || 1;
      const raw = (start - rect.top) / span;
      const progress = Math.min(1, Math.max(0, raw));

      const travel = rect.height * (cover - 1);
      // Scroll down → image moves up (looking into the scene)
      const y = -progress * travel;
      inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) onScroll();
      },
      { rootMargin: "15% 0px" },
    );

    io.observe(wrap);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [cover]);

  return (
    <div ref={wrapRef} className={`parallax-media ${className}`.trim()}>
      <div ref={innerRef} className="parallax-media__inner">
        {children}
      </div>
    </div>
  );
}
