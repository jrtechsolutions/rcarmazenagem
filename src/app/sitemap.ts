import type { MetadataRoute } from "next";
import { isSiteUnderConstruction } from "@/lib/construction";
import { SEGMENT_PAGES } from "@/lib/seo-segmentos";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  if (isSiteUnderConstruction()) {
    return [
      {
        url: SITE.url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }

  const staticPaths = [
    "",
    "/estrutura",
    "/compliance",
    "/como-funciona",
    "/quem-somos",
    "/contato",
    "/orcamento",
    "/politica-de-privacidade",
  ];

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
