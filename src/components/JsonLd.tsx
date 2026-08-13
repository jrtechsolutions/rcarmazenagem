import { ENDERECOS, SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: "+55-11-5521-8282",
    foundingDate: String(SITE.founded),
    image: `${SITE.url}/assets-visuais/logo-simbolo.png`,
    sameAs: [SITE.instagram, SITE.facebook, SITE.transportesUrl],
    address: ENDERECOS.map((e) => ({
      "@type": "PostalAddress",
      streetAddress: e.extra ? `${e.logradouro} (${e.extra})` : e.logradouro,
      addressLocality: e.cidade,
      addressRegion: e.uf,
      postalCode: e.cep,
      addressCountry: "BR",
    })),
    areaServed: [
      "São Paulo",
      "Jundiaí",
      "Campinas",
      "Hortolândia",
      "Indaiatuba",
      "Itatiba",
      "Itu",
      "Sorocaba",
      "Sumaré",
      "Vinhedo",
      "Cajamar",
    ],
    knowsAbout: [
      "armazenagem de cosméticos",
      "armazenagem de saneantes",
      "armazenagem de correlatos",
      "armazenagem de produtos químicos",
      "produtos perigosos",
      "produtos controlados",
      "produtos inflamáveis",
      "armazenagem de medicamentos",
      "produtos hospitalares",
      "carga regulada",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
