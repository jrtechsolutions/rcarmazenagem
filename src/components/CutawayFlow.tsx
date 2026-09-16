"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IconCheck, IconNested, IconWarehouse } from "@/components/Icons";
import { onVisibleOnce } from "@/lib/onVisibleOnce";
import { FLOW_TECH, PASSOS } from "@/lib/site";

const TECH_ICONS = {
  nested: IconNested,
  check: IconCheck,
  warehouse: IconWarehouse,
} as const;

type Props = {
  /** Home: teaser com 1 vídeo. Página: etapas interativas + tech grid. */
  compact?: boolean;
};

function MuteIcon({ muted }: { muted: boolean }) {
  if (muted) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 010 7" />
      <path d="M18.5 5.5a9 9 0 010 13" />
    </svg>
  );
}

function HomeFlowTeaser() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    return onVisibleOnce(
      el,
      () => {
        void video.play().catch(() => {});
      },
      0.4,
    );
  }, []);

  return (
    <div className="home-flow-teaser" ref={wrapRef}>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        src={PASSOS[0].video}
      />
      <div className="home-flow-overlay">
        <div className="home-flow-steps">
          {PASSOS.map((p) => (
            <span key={p.key}>
              {p.n} {p.titulo}
            </span>
          ))}
        </div>
        <Link href="/como-funciona" className="home-flow-link">
          Ver o fluxo completo →
        </Link>
      </div>
    </div>
  );
}

function FullVideoFlow() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const [progressMs, setProgressMs] = useState(0);
  const currentRef = useRef(0);
  const startedRef = useRef(false);
  const videoColRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goToStep = (index: number) => {
    const next = ((index % PASSOS.length) + PASSOS.length) % PASSOS.length;
    currentRef.current = next;
    setCurrent(next);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === next) {
        v.currentTime = 0;
        const applyDuration = () => {
          if (Number.isFinite(v.duration) && v.duration > 0) {
            setProgressMs(v.duration * 1000);
          }
        };
        if (v.readyState >= 1) applyDuration();
        else v.addEventListener("loadedmetadata", applyDuration, { once: true });
        void v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  useEffect(() => {
    const el = videoColRef.current;
    if (!el) return;
    return onVisibleOnce(
      el,
      () => {
        if (startedRef.current) return;
        startedRef.current = true;
        goToStep(0);
      },
      0.4,
    );
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) v.muted = muted;
    });
  }, [muted]);

  return (
    <div className="video-flow">
      <div className="video-flow-layout">
        <div className="video-flow-steps">
          {PASSOS.map((passo, idx) => {
            const active = idx === current;
            return (
              <button
                key={passo.key}
                type="button"
                className={`video-step-btn${active ? " active" : ""}`}
                onClick={() => {
                  startedRef.current = true;
                  goToStep(idx);
                }}
              >
                <span className="video-step-n">{passo.n}</span>
                <span className="video-step-text">
                  <h5>{passo.titulo}</h5>
                  <p>{passo.texto}</p>
                  {active ? (
                    <span className="video-step-progress">
                      <span
                        key={`${passo.key}-${progressMs}`}
                        className="video-step-progress-fill"
                        style={
                          progressMs > 0
                            ? { animationDuration: `${progressMs}ms` }
                            : undefined
                        }
                      />
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>

        <div className="video-flow-col" ref={videoColRef}>
          {PASSOS.map((passo, idx) => (
            <video
              key={passo.key}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              className={idx === current ? "active" : undefined}
              muted={muted}
              playsInline
              preload={idx === 0 ? "metadata" : "none"}
              src={passo.video}
              onEnded={() => {
                if (idx === currentRef.current) {
                  goToStep(currentRef.current + 1);
                }
              }}
            />
          ))}
          <span className="video-flow-label">{PASSOS[current].titulo}</span>
          <button
            type="button"
            className="video-mute-btn"
            aria-label={muted ? "Ativar som" : "Desativar som"}
            onClick={() => setMuted((m) => !m)}
          >
            <MuteIcon muted={muted} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function CutawayFlow({ compact = false }: Props) {
  if (compact) {
    return (
      <div className="cutaway-block cutaway-compact">
        <HomeFlowTeaser />
      </div>
    );
  }

  return (
    <div className="cutaway-block">
      <FullVideoFlow />

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
    </div>
  );
}
