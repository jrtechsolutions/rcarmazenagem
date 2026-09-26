"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(true);

  useEffect(() => {
    const existing = readCookieConsent();
    if (!existing) setVisible(true);
  }, []);

  function save(analytics: boolean) {
    writeCookieConsent(analytics);
    setVisible(false);
    setCustomizing(false);
  }

  if (!visible) return null;

  return (
    <>
      <div className="cookie-banner" role="dialog" aria-label="Preferências de cookies">
        <div className="cookie-banner-ic" aria-hidden>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="9" cy="10" r="1" />
            <circle cx="14" cy="9" r="1" />
            <circle cx="15" cy="14" r="1" />
            <circle cx="10" cy="15" r="1" />
          </svg>
        </div>
        <div className="cookie-banner-txt">
          <p>
            Usamos cookies pra entender como o site é usado (Google Analytics).
            Saiba mais na nossa{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-btn reject"
            onClick={() => save(false)}
          >
            Rejeitar
          </button>
          <button
            type="button"
            className="cookie-btn customize"
            onClick={() => {
              setAnalyticsOn(true);
              setCustomizing(true);
            }}
          >
            Personalizar
          </button>
          <button
            type="button"
            className="cookie-btn accept"
            onClick={() => save(true)}
          >
            Aceitar
          </button>
        </div>
      </div>

      {customizing ? (
        <div
          className="cookie-modal-overlay"
          role="presentation"
          onClick={() => setCustomizing(false)}
        >
          <div
            className="cookie-modal"
            role="dialog"
            aria-labelledby="cookie-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cookie-modal-title">Preferências de cookies</h2>
            <p className="cookie-modal-lead">
              Escolha quais cookies podem ser usados neste site.
            </p>

            <div className="cookie-pref">
              <div>
                <b>Necessários</b>
                <span>Essenciais pro funcionamento. Sempre ativos.</span>
              </div>
              <span className="cookie-pref-fixed">Ativo</span>
            </div>

            <div className="cookie-pref">
              <div>
                <b>Analíticos</b>
                <span>Google Analytics (GA4), só com consentimento.</span>
              </div>
              <button
                type="button"
                className={`cookie-toggle${analyticsOn ? " on" : ""}`}
                aria-pressed={analyticsOn}
                aria-label="Cookies analíticos"
                onClick={() => setAnalyticsOn((v) => !v)}
              >
                <span className="cookie-toggle-knob" />
              </button>
            </div>

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="cookie-btn customize"
                onClick={() => setCustomizing(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="cookie-btn accept"
                onClick={() => save(analyticsOn)}
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Carrega GA4 só depois do consentimento de analíticos. */
export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    setConsent(readCookieConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail);
    };
    window.addEventListener("rc-cookie-consent", onChange);
    return () => window.removeEventListener("rc-cookie-consent", onChange);
  }, []);

  useEffect(() => {
    if (!measurementId || !consent?.analytics) return;

    const existing = document.getElementById("ga4-script");
    if (existing) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", measurementId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }, [consent?.analytics, measurementId]);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
