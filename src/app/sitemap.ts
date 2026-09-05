import type { MetadataRoute } from "next";
import { SEGMENT_PAGES } from "@/lib/seo-segmentos";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/estrutura",
    "/compliance",
    "/como-funciona",
    "/contato",
    "/orcamento",
  ];

  const now = new Date();

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const segmentEntries = SEGMENT_PAGES.map((page) => ({
    url: `${SITE.url}/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...segmentEntries];
}
