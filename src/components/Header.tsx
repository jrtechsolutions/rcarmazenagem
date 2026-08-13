"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/LogoLockup";
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
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4 py-3 sm:px-7">
        <LogoLockup />

        <nav className="hidden items-center gap-[22px] text-[13px] text-mono-ink lg:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "font-semibold text-texto" : "hover:text-texto"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE.transportesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-azul px-2.5 py-[5px] font-mono text-[10.5px] text-white"
          >
            Parte do Grupo RC →
          </a>
          <Link
            href="/orcamento"
            className="rounded-[8px] bg-verde-escuro px-[15px] py-[9px] text-[12.5px] font-semibold text-white"
          >
            Orçamento
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-borda lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? (
            <IconClose className="h-5 w-5 text-texto" />
          ) : (
            <IconMenu className="h-5 w-5 text-texto" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-borda bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-[15px] hover:bg-card"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.transportesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-full bg-azul px-3 py-1.5 font-mono text-[11px] text-white"
            >
              Parte do Grupo RC →
            </a>
            <Link
              href="/orcamento"
              className="mt-2 rounded-[8px] bg-verde-escuro px-4 py-3 text-center text-[13.5px] font-semibold text-white"
            >
              Orçamento
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
