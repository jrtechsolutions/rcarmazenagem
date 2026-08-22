"use client";

import { useEffect, useId, useRef } from "react";

export function ComplianceSeal() {
  const ticksRef = useRef<SVGGElement>(null);
  const uid = useId().replace(/:/g, "");
  const topId = `circleTop-${uid}`;
  const bottomId = `circleBottom-${uid}`;

  useEffect(() => {
    const ticks = ticksRef.current;
    if (!ticks || ticks.childElementCount > 0) return;
    const ns = "http://www.w3.org/2000/svg";
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * 360;
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 88 * Math.cos(rad);
      const y1 = 100 + 88 * Math.sin(rad);
      const x2 = 100 + 96 * Math.cos(rad);
      const y2 = 100 + 96 * Math.sin(rad);
      const line = document.createElementNS(ns, "line");
      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      line.setAttribute("stroke", "#F7F7F5");
      line.setAttribute("stroke-width", "2");
      ticks.appendChild(line);
    }
  }, []);

  return (
    <div className="seal" aria-hidden>
      <svg viewBox="0 0 200 200">
        <defs>
          <path id={topId} d="M 30,100 A 70,70 0 0 1 170,100" fill="none" />
          <path id={bottomId} d="M 170,105 A 70,70 0 0 1 30,105" fill="none" />
        </defs>
        <g fill="#164D33">
          <circle cx="100" cy="100" r="96" />
        </g>
        <g ref={ticksRef} />
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="#FBFBFA"
          stroke="#164D33"
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#1F6B47"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <text
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          fontWeight="700"
          fill="#164D33"
          letterSpacing="2"
        >
          <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
            COMPLIANCE
          </textPath>
        </text>
        <text
          fontFamily="IBM Plex Mono, monospace"
          fontSize="9"
          fontWeight="600"
          fill="#164D33"
          letterSpacing="1.5"
        >
          <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
            RC ARMAZENAGEM
          </textPath>
        </text>
        <g transform="translate(100,104)">
          <path
            d="M0,-32 L26,-22 V6 C26,26 12,38 0,44 C-12,38 -26,26 -26,6 V-22 Z"
            fill="#1F6B47"
            stroke="#164D33"
            strokeWidth="2"
          />
          <path
            d="M-11,0 L-3,9 L13,-11"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
