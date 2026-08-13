"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SESSION_KEY = "rc-armazenagem-logo-played";
const DURATION_MS = 4625 + 300;

export function LogoLockup() {
  const [phase, setPhase] = useState<"animating" | "static">("static");
  const [usedMotion, setUsedMotion] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const play = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("static");
      setUsedMotion(false);
      return;
    }
    if (timer.current) clearTimeout(timer.current);
    setUsedMotion(true);
    setPhase("animating");
    setAnimKey((k) => k + 1);
    timer.current = setTimeout(() => setPhase("static"), DURATION_MS);
  }, []);

  useEffect(() => {
    const played = sessionStorage.getItem(SESSION_KEY);
    if (!played) {
      sessionStorage.setItem(SESSION_KEY, "1");
      play();
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [play]);

  const showStatic = phase === "static";
  const staticClass = showStatic ? (usedMotion ? "showing" : "visible") : "";

  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      onMouseEnter={play}
      aria-label="RC Armazenagem — página inicial"
    >
      <div className="logo-stage">
        <div className={`anim-layer ${showStatic ? "fading" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={animKey}
            src="/assets-visuais/header-anim-armazenagem.webp"
            alt=""
          />
        </div>
        <div className={`static-layer ${staticClass}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets-visuais/logo-simbolo.png" alt="" />
        </div>
      </div>
      <b className={`wordmark ${staticClass}`}>Armazenagem</b>
    </Link>
  );
}
