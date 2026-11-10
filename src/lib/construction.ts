/** Flag público — acessível em Server, Client e Middleware. */
export function isSiteUnderConstruction() {
  return process.env.NEXT_PUBLIC_SITE_UNDER_CONSTRUCTION === "true";
}

/** Rotas liberadas mesmo com o site em desenvolvimento. */
export const CONSTRUCTION_ALLOWED_PATHS = [
  "/",
  "/politica-de-privacidade",
] as const;

export const CONSTRUCTION_PREVIEW_COOKIE = "rc_preview";
