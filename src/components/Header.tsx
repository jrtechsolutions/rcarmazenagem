"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/LogoLockup";
import { HeaderCta, NavPill } from "@/components/NavPill";
import { IconClose, IconMenu } from "@/components/Icons";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-borda bg-white">
      <div className="shell flex items-center justify-between gap-3 py-3">
        <LogoLockup />
        <NavPill />
        <div className="flex items-center gap-2">
          <HeaderCta />
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-borda lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <IconClose className="h-5 w-5 text-texto" />
            ) : (
              <IconMenu className="h-5 w-5 text-texto" />
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
