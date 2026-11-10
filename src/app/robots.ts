import type { MetadataRoute } from "next";
import { isSiteUnderConstruction } from "@/lib/construction";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (isSiteUnderConstruction()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/confirmacao"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
