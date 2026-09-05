import type { SegmentPage } from "@/lib/seo-segmentos";
import { FAQ, SITE } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqLike = { q: string; a: string };

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RC Armazenagem",
    url: SITE.url,
    logo: `${SITE.url}/assets-visuais/logo-simbolo.png`,
    telephone: "+55-11-5521-8282",
    email: SITE.email,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Av. do Rio Bonito, 1522, Veleiros",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "04776-002",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Av. Juvenal Arantes, 2500, Jardim Sarapiranga",
        addressLocality: "Jundiaí",
        addressRegion: "SP",
        postalCode: "13212-354",
        addressCountry: "BR",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Armazenagem de cosméticos regulados",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Armazenagem de saneantes" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Armazenagem de correlatos" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Armazenagem de produtos químicos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Armazenagem de medicamentos",
        },
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Licença ANVISA",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "CETESB",
      },
    ],
  };
}

export function serviceJsonLd(page: SegmentPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.serviceType,
    provider: { "@type": "Organization", name: "RC Armazenagem" },
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "City", name: "Jundiaí" },
    ],
    description: page.serviceDescription,
    hasCertification: page.hasCertification,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageJsonLd(items: readonly FaqLike[] = FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function segmentBreadcrumbs(page: SegmentPage): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: page.serviceType, path: `/${page.slug}` },
  ];
}
