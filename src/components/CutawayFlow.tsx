"use client";

import { useEffect, useId, useRef } from "react";
import { IconCheck, IconNested, IconWarehouse } from "@/components/Icons";
import { FLOW_TECH, PASSOS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

const TECH_ICONS = {
  nested: IconNested,
  check: IconCheck,
  warehouse: IconWarehouse,
} as const;

function CutawaySvg({ clipId }: { clipId: string }) {
  return (
    <svg viewBox="0 0 900 260" fill="none" aria-hidden>
      <path
        d="M20,60 L450,15 L880,60"
        stroke="#164D33"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="230"
        x2="880"
        y2="230"
        stroke="#164D33"
        strokeWidth="3"
      />

      <g className="zone-1">
        <rect
          x="40"
          y="60"
          width="220"
          height="170"
          fill="none"
          stroke="#DCDFDA"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <rect
          x="65"
          y="150"
          width="70"
          height="80"
          fill="#E7EFF7"
          stroke="#2D6CA6"
          strokeWidth="2"
        />
        <path
          d="M135,175 h35 l20,20 v35 h-55z"
          fill="#E7EFF7"
          stroke="#2D6CA6"
          strokeWidth="2"
        />
        <circle cx="90" cy="230" r="9" fill="#fff" stroke="#164D33" strokeWidth="2" />
        <circle cx="175" cy="230" r="9" fill="#fff" stroke="#164D33" strokeWidth="2" />
        <rect x="185" y="110" width="26" height="26" rx="3" fill="#1F6B47" />
        <path
          d="M191,123 l6,6 12,-13"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="60" cy="80" r="14" fill="#164D33" />
        <text
          x="60"
          y="85"
          textAnchor="middle"
          fill="#fff"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="14"
          fontWeight="700"
        >
          1
        </text>
      </g>

      <defs>
        <clipPath id={clipId}>
          <rect className="line-clip-rect" x="270" y="150" width="0" height="30" />
        </clipPath>
      </defs>
      <path
        className="flow-line"
        d="M270,165 L660,165"
        stroke="#D98A2B"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        fill="none"
        clipPath={`url(#${clipId})`}
      />

      <g className="zone-2">
        <rect
          x="290"
          y="60"
          width="320"
          height="170"
          fill="none"
          stroke="#DCDFDA"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <rect x="320" y="90" width="60" height="120" fill="none" stroke="#164D33" strokeWidth="2" />
        <line x1="320" y1="130" x2="380" y2="130" stroke="#164D33" strokeWidth="2" />
        <line x1="320" y1="170" x2="380" y2="170" stroke="#164D33" strokeWidth="2" />
        <rect x="327" y="98" width="18" height="18" fill="#1F6B47" />
        <rect x="352" y="138" width="18" height="18" fill="#1F6B47" />
        <rect x="327" y="178" width="18" height="18" fill="#B9CBC0" />
        <rect x="420" y="90" width="60" height="120" fill="none" stroke="#164D33" strokeWidth="2" />
        <line x1="420" y1="130" x2="480" y2="130" stroke="#164D33" strokeWidth="2" />
        <line x1="420" y1="170" x2="480" y2="170" stroke="#164D33" strokeWidth="2" />
        <rect x="427" y="98" width="18" height="18" fill="#B9CBC0" />
        <rect x="452" y="138" width="18" height="18" fill="#1F6B47" />
        <rect x="427" y="178" width="18" height="18" fill="#1F6B47" />
        <rect x="520" y="90" width="60" height="120" fill="none" stroke="#164D33" strokeWidth="2" />
        <line x1="520" y1="130" x2="580" y2="130" stroke="#164D33" strokeWidth="2" />
        <line x1="520" y1="170" x2="580" y2="170" stroke="#164D33" strokeWidth="2" />
        <rect x="527" y="98" width="18" height="18" fill="#1F6B47" />
        <rect x="552" y="178" width="18" height="18" fill="#1F6B47" />
        <circle cx="320" cy="80" r="14" fill="#164D33" />
        <text
          x="320"
          y="85"
          textAnchor="middle"
          fill="#fff"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="14"
          fontWeight="700"
        >
          2
        </text>
      </g>

      <g className="zone-3">
        <rect
          x="630"
          y="60"
          width="230"
          height="170"
          fill="none"
          stroke="#DCDFDA"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <rect
          x="680"
          y="150"
          width="70"
          height="80"
          fill="#EEF4F0"
          stroke="#1F6B47"
          strokeWidth="2"
        />
        <path
          d="M750,175 h35 l20,20 v35 h-55z"
          fill="#EEF4F0"
          stroke="#1F6B47"
          strokeWidth="2"
        />
        <circle cx="705" cy="230" r="9" fill="#fff" stroke="#164D33" strokeWidth="2" />
        <circle cx="790" cy="230" r="9" fill="#fff" stroke="#164D33" strokeWidth="2" />
        <path d="M655,120 l10,-14 h14 l0,14z" fill="#D98A2B" />
        <line x1="662" y1="106" x2="662" y2="150" stroke="#D98A2B" strokeWidth="2.5" />
        <circle cx="655" cy="80" r="14" fill="#164D33" />
        <text
          x="655"
          y="85"
          textAnchor="middle"
          fill="#fff"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="14"
          fontWeight="700"
        >
          3
        </text>
      </g>
    </svg>
  );
}

type Props = {
  /** Home: só a ilustração. Página: ilustração + legenda + tech grid. */
  compact?: boolean;
};

export function CutawayFlow({ compact = false }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const rawId = useId().replace(/:/g, "");
  const clipId = `lineClip-${rawId}`;

  useEffect(() => {
    const block = blockRef.current;
    const wrap = wrapRef.current;
    if (!block || !wrap) return;
    return onVisibleOnce(
      block,
      () => {
        wrap.classList.add("on");
      },
      0.3,
    );
  }, []);

  return (
    <div ref={blockRef} className={compact ? "cutaway-block cutaway-compact" : "cutaway-block"}>
      <div ref={wrapRef} className="cutaway-wrap">
        <CutawaySvg clipId={clipId} />

        {compact ? null : (
          <>
            <p className="cutaway-hint">
              Cada número da ilustração corresponde a uma etapa abaixo:
            </p>
            <div className="cutaway-legend">
              {PASSOS.map((p) => (
                <div key={p.n}>
                  <div className="top-zone">
                    <span className="n">{p.n}</span>
                    <h5>{p.titulo}</h5>
                    <p>{p.texto}</p>
                  </div>
                  <div className="long">{p.legend}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {compact ? null : (
        <div className="tech-grid">
          {FLOW_TECH.map((item) => {
            const Icon = TECH_ICONS[item.icon];
            return (
              <div key={item.title} className="tech-box">
                <div className="head">
                  <Icon />
                  <h6>{item.title}</h6>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
