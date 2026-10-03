"use client";

import { useEffect, useRef } from "react";
import { COMPLIANCE_PROOFS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

export function ComplianceProofs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return onVisibleOnce(root, () => root.classList.add("reveal"), 0.15);
  }, []);

  return (
    <div className="cproofs" ref={ref}>
      {COMPLIANCE_PROOFS.map((item) => (
        <article key={item.label} className="cproof">
          <div className="cproof__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              width={140}
              height={72}
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3>{item.label}</h3>
          {"status" in item ? (
            <span className="cert-status">{item.status}</span>
          ) : null}
          <p>{item.texto}</p>
        </article>
      ))}
    </div>
  );
}
