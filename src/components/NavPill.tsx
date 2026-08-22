"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.startsWith("http")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavPill() {
  const pathname = usePathname();
  const pillRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const movePill = useCallback((el: HTMLElement | null) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (!el) {
      pill.style.width = "0px";
      pill.style.opacity = "0";
      return;
    }
    pill.style.opacity = "1";
    pill.style.left = `${el.offsetLeft}px`;
    pill.style.width = `${el.offsetWidth}px`;
  }, []);

  const moveToActive = useCallback(() => {
    const active = linkRefs.current.find((a) => a?.dataset.active === "true");
    movePill(active ?? null);
  }, [movePill]);

  useEffect(() => {
    const id = requestAnimationFrame(() => moveToActive());
    const onResize = () => moveToActive();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname, moveToActive]);

  return (
    <nav
      className="nav-anim hidden lg:flex"
      onMouseLeave={moveToActive}
      aria-label="Principal"
    >
      <div className="nav-pill" ref={pillRef} aria-hidden />
      {NAV.map((item, i) => {
        const active = isActive(pathname, item.href);
        const external = "external" in item && item.external;
        const shared = {
          ref: (el: HTMLAnchorElement | null) => {
            linkRefs.current[i] = el;
          },
          "data-active": active ? "true" : "false",
          className: active ? "active" : undefined,
          onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) =>
            movePill(e.currentTarget),
        };

        if (external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              {...shared}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.href} href={item.href} {...shared}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderCta() {
  const pathname = usePathname();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector("#hero");
    if (!heroEl) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="header-right hidden items-center gap-3.5 lg:flex">
      <a
        href={SITE.transportesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group-badge"
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
      <Link
        href="/orcamento"
        className={`header-cta${heroVisible ? " is-away" : ""}`}
        aria-hidden={heroVisible}
        tabIndex={heroVisible ? -1 : undefined}
      >
        Orçamento
      </Link>
    </div>
  );
}
