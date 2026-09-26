"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/LogoLockup";
import { HeaderCta, NavPill } from "@/components/NavPill";
import { IconClose, IconMenu } from "@/components/Icons";
import { NAV, SITE } from "@/lib/site";

const CINEMATIC_PATHS = new Set(["/", "/estrutura"]);

function isCinematicPath(pathname: string) {
  return CINEMATIC_PATHS.has(pathname);
}

export function Header() {
  const pathname = usePathname();
  const isCinematicHero = isCinematicPath(pathname);
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(isCinematicHero);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isCinematicHero) {
      setOverHero(false);
      return;
    }

    // Assume overlay transparente até o observer confirmar (evita flash branco)
    setOverHero(true);

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let raf = 0;
    let tries = 0;

    const connect = () => {
      const heroEl = document.querySelector("#hero");
      if (!heroEl) {
        // Hero ainda não montou após navegação client-side
        if (tries++ < 60) {
          raf = requestAnimationFrame(connect);
        }
        return;
      }
      if (cancelled) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!cancelled) setOverHero(entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
      );
      observer.observe(heroEl);
      setOverHero(heroEl.getBoundingClientRect().bottom > 72);
    };

    connect();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [isCinematicHero, pathname]);

  const transparent = isCinematicHero && overHero && !open;

  return (
    <header
      className={[
        "site-header",
        isCinematicHero ? "site-header--overlay" : "",
        transparent ? "is-transparent" : "is-solid",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shell flex items-center justify-between gap-3 py-3">
        <LogoLockup />
        <NavPill />
        <div className="flex items-center gap-2">
          <HeaderCta />
          <button
            type="button"
            className="site-header__menu-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-borda bg-white lg:hidden"
        >
          <nav className="shell flex flex-col gap-1 py-4">
            {NAV.map((item) => {
              const external = "external" in item && item.external;
              if (external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[8px] px-3 py-3 text-[15px] hover:bg-card"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[8px] px-3 py-3 text-[15px] hover:bg-card"
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SITE.transportesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group-badge mt-2 w-fit"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden
              >
                <circle cx="8" cy="12" r="4.5" />
                <circle cx="16" cy="12" r="4.5" opacity="0.55" />
              </svg>
              Parte do Grupo RC
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link href="/orcamento" className="header-cta mt-2 text-center">
              Orçamento
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
