/** Consentimento de cookies (LGPD). Chave: rc_cookie_consent */

export const COOKIE_CONSENT_KEY = "rc_cookie_consent";
export const COOKIE_CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 182; // ~6 meses

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  updatedAt: number;
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (
      typeof parsed?.updatedAt !== "number" ||
      typeof parsed?.analytics !== "boolean"
    ) {
      return null;
    }
    if (Date.now() - parsed.updatedAt > COOKIE_CONSENT_TTL_MS) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    return { necessary: true, analytics: parsed.analytics, updatedAt: parsed.updatedAt };
  } catch {
    return null;
  }
}

export function writeCookieConsent(analytics: boolean): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    analytics,
    updatedAt: Date.now(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("rc-cookie-consent", { detail: value }));
  return value;
}
