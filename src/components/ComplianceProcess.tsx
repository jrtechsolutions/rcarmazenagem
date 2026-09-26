"use client";

import { useEffect, useRef } from "react";
import { COMPLIANCE_PROCESS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

export function ComplianceProcess() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return onVisibleOnce(
      root,
      () => {
        root.querySelectorAll<HTMLElement>(".cproc").forEach((el, i) => {
          window.setTimeout(() => el.classList.add("on"), i * 120);
        });
      },
      0.12,
    );
  }, []);

  return (
    <div className="cproc-grid" ref={ref}>
      {COMPLIANCE_PROCESS.map((item) => (
        <article key={item.step} className="cproc">
          <div className="cproc__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="cproc__body">
            <span className="cproc__step">{item.step}</span>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
