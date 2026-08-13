"use client";

import { useEffect, useRef, useState } from "react";

const PALLETS = [
  { left: 13, top: 11, delay: "0s" },
  { left: 42, top: 11, delay: "0.15s" },
  { left: 72, top: 47, delay: "0.6s" },
  { left: 101, top: 47, delay: "0.75s" },
  { left: 130, top: 83, delay: "1.2s" },
  { left: 13, top: 83, delay: "1.35s" },
];

const NIVEIS = ["Recebimento", "Estocagem", "Expedição"];

type Props = {
  labeled?: boolean;
  className?: string;
};

export function RackMotif({ labeled = false, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <div className="relative h-[148px] w-[180px] shrink-0">
        <div className="absolute inset-0 rounded-[2px] border-[3px] border-[#163F2C]" />
        <div className="absolute top-[37px] right-[3px] left-[3px] h-[2px] bg-[#163F2C]" />
        <div className="absolute top-[74px] right-[3px] left-[3px] h-[2px] bg-[#163F2C]" />
        <div className="absolute top-[111px] right-[3px] left-[3px] h-[2px] bg-[#163F2C]" />
        {PALLETS.map((p, i) => (
          <span
            key={i}
            className={`pallet absolute h-[21px] w-[21px] rounded-[3px] ${inView ? "in-view" : ""}`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
      {labeled ? (
        <ol className="flex h-[148px] flex-col justify-between py-1 font-mono text-[11px] text-verde-escuro">
          {NIVEIS.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
