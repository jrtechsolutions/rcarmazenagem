/** Helpers de embed do Google Maps (sem API key). */

export function mapsEmbedSrc(query: string, zoom: number) {
  const params = new URLSearchParams({
    q: query,
    z: String(zoom),
    hl: "pt-BR",
    output: "embed",
  });
  return `https://www.google.com/maps?${params.toString()}`;
}

export function mapsOpenUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
