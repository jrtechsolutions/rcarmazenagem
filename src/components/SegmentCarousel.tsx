"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SegmentIcon } from "@/components/Icons";
import { SEGMENTOS } from "@/lib/site";

const DRAG_MQ = "(max-width: 699px)";

export function SegmentCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({
    isDown: false,
    startX: 0,
    startScroll: 0,
  });

  useEffect(() => {
    const carousel = ref.current;
    if (!carousel) return;

    function canDrag() {
      return window.matchMedia(DRAG_MQ).matches;
    }

    function onDown(e: MouseEvent) {
      if (!canDrag()) return;
      const el = ref.current;
      if (!el) return;
      drag.current.isDown = true;
      el.classList.add("dragging");
      drag.current.startX = e.pageX;
      drag.current.startScroll = el.scrollLeft;
    }

    function onUp() {
      const el = ref.current;
      drag.current.isDown = false;
      el?.classList.remove("dragging");
    }

    function onMove(e: MouseEvent) {
      if (!drag.current.isDown || !canDrag()) return;
      const el = ref.current;
      if (!el) return;
      e.preventDefault();
      const delta = (e.pageX - drag.current.startX) * 1.2;
      el.scrollLeft = drag.current.startScroll - delta;
    }

    carousel.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    return () => {
      carousel.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="carousel-wrap">
      <div className="carousel" ref={ref}>
        {SEGMENTOS.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            className="seg-card"
            draggable={false}
          >
            <div className="seg-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" draggable={false} />
              <div className="ic-badge">
                <SegmentIcon name={s.icon} />
              </div>
            </div>
            <div className="seg-body">
              <h5>{s.nome}</h5>
              <p>{s.descricao}</p>
              <span className="ref">{s.cert}</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="carousel-hint mt-1 font-mono text-[11px] text-mono-ink">
        Arraste para ver todos
      </p>
    </div>
  );
}
