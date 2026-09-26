"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
} from "react";
import { createPortal } from "react-dom";
import { CERT_MARQUEE } from "@/lib/site";

type ActiveTip = {
  label: string;
  tip: string;
  left: number;
  top: number;
};

function CertGroup({
  duplicate = false,
  tipId,
  activeLabel,
  onShow,
  onHide,
  groupRef,
}: {
  duplicate?: boolean;
  tipId: string;
  activeLabel: string | null;
  onShow: (el: HTMLElement, label: string, tip: string) => void;
  onHide: () => void;
  groupRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={groupRef}
      className="cert-marquee__group"
      aria-hidden={duplicate || undefined}
    >
      {CERT_MARQUEE.map((item) => (
        <button
          key={`${duplicate ? "dup" : "main"}-${item.label}`}
          type="button"
          className="cert-marquee__item"
          tabIndex={duplicate ? -1 : 0}
          aria-describedby={
            !duplicate && activeLabel === item.label ? tipId : undefined
          }
          aria-label={duplicate ? undefined : `${item.label}: ${item.tip}`}
          onMouseEnter={(e) => onShow(e.currentTarget, item.label, item.tip)}
          onMouseLeave={onHide}
          onFocus={(e) => onShow(e.currentTarget, item.label, item.tip)}
          onBlur={onHide}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt=""
            width={120}
            height={72}
            loading={duplicate ? "lazy" : "eager"}
            decoding="async"
            draggable={false}
          />
        </button>
      ))}
    </div>
  );
}

export function CertMarquee() {
  const tipId = useId();
  const railRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);
  const [active, setActive] = useState<ActiveTip | null>(null);
  const [mounted, setMounted] = useState(false);
  const activeEl = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCopies = useCallback(() => {
    const rail = railRef.current;
    const group = measureRef.current;
    if (!rail || !group) return;

    const groupWidth = group.getBoundingClientRect().width;
    if (groupWidth <= 0) return;

    const needed = Math.ceil(rail.clientWidth / groupWidth) + 1;
    setCopies(Math.max(3, needed));
  }, []);

  useLayoutEffect(() => {
    updateCopies();

    const rail = railRef.current;
    if (!rail) return;

    const observer = new ResizeObserver(() => updateCopies());
    observer.observe(rail);
    if (measureRef.current) observer.observe(measureRef.current);

    window.addEventListener("resize", updateCopies);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCopies);
    };
  }, [updateCopies]);

  const placeTip = useCallback((el: HTMLElement, label: string, tip: string) => {
    const rect = el.getBoundingClientRect();
    activeEl.current = el;
    setActive({
      label,
      tip,
      left: rect.left + rect.width / 2,
      top: rect.bottom + 10,
    });
  }, []);

  const clearTip = useCallback(() => {
    activeEl.current = null;
    setActive(null);
  }, []);

  useEffect(() => {
    if (!active) return;

    const sync = () => {
      const el = activeEl.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setActive((prev) =>
        prev
          ? {
              ...prev,
              left: rect.left + rect.width / 2,
              top: rect.bottom + 10,
            }
          : null,
      );
    };

    window.addEventListener("scroll", sync, true);
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync, true);
      window.removeEventListener("resize", sync);
    };
  }, [active]);

  const shift = `${-(100 / copies)}%`;

  return (
    <section
      className={`cert-marquee${active ? " is-tip-open" : ""}`}
      aria-label="Certificações e licenças"
    >
      <div className="cert-marquee__rail" ref={railRef}>
        <div
          className="cert-marquee__fade cert-marquee__fade--left"
          aria-hidden
        />
        <div
          className="cert-marquee__fade cert-marquee__fade--right"
          aria-hidden
        />
        <div
          className="cert-marquee__track"
          style={
            {
              "--cert-shift": shift,
              "--cert-duration": `${Math.max(28, copies * 14)}s`,
            } as CSSProperties
          }
        >
          {Array.from({ length: copies }, (_, index) => (
            <CertGroup
              key={index}
              groupRef={index === 0 ? measureRef : undefined}
              duplicate={index > 0}
              tipId={tipId}
              activeLabel={index === 0 ? (active?.label ?? null) : null}
              onShow={placeTip}
              onHide={clearTip}
            />
          ))}
        </div>
      </div>

      {mounted && active
        ? createPortal(
            <div
              id={tipId}
              role="tooltip"
              className="cert-marquee__tip is-open"
              style={{ left: active.left, top: active.top }}
            >
              <strong>{active.label}</strong>
              {active.tip}
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
