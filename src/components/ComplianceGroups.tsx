"use client";

import { useEffect, useRef, useState } from "react";
import { SegmentIcon } from "@/components/Icons";
import { COMPLIANCE_GROUPS } from "@/lib/site";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

export function ComplianceGroups() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    return onVisibleOnce(
      root,
      () => {
        root.querySelectorAll<HTMLElement>(".cgroup").forEach((g, i) => {
          window.setTimeout(() => g.classList.add("on"), i * 120);
        });
      },
      0.15,
    );
  }, []);

  return (
    <div className="cgroups" ref={ref}>
      {COMPLIANCE_GROUPS.map((group, index) => {
        const isOpen = open === index;
        return (
          <div
            key={group.head}
            className={`cgroup${group.tone === "ops" ? " cgroup--ops" : ""}${
              isOpen ? " cgroup--open" : ""
            }`}
          >
            <button
              type="button"
              className="cgroup-head"
              aria-expanded={isOpen}
              onClick={() => {
                if (window.matchMedia("(max-width: 759px)").matches) {
                  setOpen(isOpen ? -1 : index);
                }
              }}
            >
              <span className="dot2" aria-hidden />
              <span className="cgroup-head__label">{group.head}</span>
              <span className="cgroup-head__chev" aria-hidden />
            </button>
            <div className="cgroup-body">
              {group.items.map((item) => (
                <div key={item.titulo} className="citem">
                  <div className="ic">
                    <SegmentIcon name={item.icon} />
                  </div>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
