"use client";

import { useEffect, useRef } from "react";
import {
  IconBadgeCheck,
  IconFlame,
  IconMedicalCross,
} from "@/components/Icons";
import { onVisibleOnce } from "@/lib/onVisibleOnce";

const ITEMS = [
  { label: "ISO 9001", Icon: IconBadgeCheck },
  { label: "ANVISA", Icon: IconMedicalCross },
  { label: "Corpo de Bombeiros", Icon: IconFlame },
] as const;

export function CertWall() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wall = ref.current;
    if (!wall) return;

    return onVisibleOnce(
      wall,
      () => {
        wall.querySelectorAll<HTMLElement>(".cert-item").forEach((c, i) => {
          window.setTimeout(() => c.classList.add("on"), i * 80);
        });
      },
      0.3,
    );
  }, []);

  return (
    <div className="cert-wall cert-wall-3" ref={ref}>
      {ITEMS.map((item) => {
        const { label, Icon } = item;
        return (
          <div key={label} className="cert-item">
            <Icon />
            <span className="cert-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
