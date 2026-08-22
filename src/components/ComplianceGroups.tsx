"use client";

import { useEffect, useRef } from "react";
import { SegmentIcon } from "@/components/Icons";
import { COMPLIANCE_GROUPS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

export function ComplianceGroups() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return onVisibleOnce(
      root,
      () => {
        root.querySelectorAll<HTMLElement>(".cgroup").forEach((g, i) => {
          window.setTimeout(() => g.classList.add("on"), i * 150);
        });
      },
      0.2,
    );
  }, []);

  return (
    <div ref={ref}>
      {COMPLIANCE_GROUPS.map((group) => (
        <div key={group.head} className="cgroup">
          <div className="cgroup-head">
            <span className="dot2" aria-hidden />
            {group.head}
          </div>
          {group.items.map((item) => (
            <div key={item.titulo} className="citem">
              <div className="ic">
                <SegmentIcon name={item.icon} />
              </div>
              <div>
                <h3>
                  {item.titulo}
                  {"pendente" in item && item.pendente ? (
                    <span className="citem-pending"> [confirmar se aplicável]</span>
                  ) : null}
                </h3>
                <p>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
