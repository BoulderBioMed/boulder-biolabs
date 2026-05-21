// JSON-LD schema builders for Boulder BioLabs site
// MedicalLaboratory + Organization + Service + FAQPage + BreadcrumbList + Person

const SITE_URL = "https://boulderbiolabs.com";
const SAME_AS = [
  "https://boulderbiomed.com/",
  "https://boulderiq.com/",
  "https://bouldersterilization.com/",
  "https://boulderraqa.com/",
  "https://boulderpackagetesting.com/",
  "https://www.linkedin.com/company/boulder-iq/",
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Boulder BioLabs",
    url: SITE_URL,
    parentOrganization: {
      "@type": "Organization",
      name: "Boulder BioMed",
      url: "https://boulderbiomed.com/",
    },
    sameAs: SAME_AS,
  };
}

export function medicalLabSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalLaboratory",
    "@id": `${SITE_URL}/#lab`,
    name: "Boulder BioLabs",
    url: SITE_URL,
    telephone: "+1-303-531-1238",
    email: "info@boulderiq.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5375 Western Avenue",
      addressLocality: "Boulder",
      addressRegion: "CO",
      postalCode: "80301",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 40.0274, longitude: -105.2519 },
    parentOrganization: { "@type": "Organization", name: "Boulder BioMed", url: "https://boulderbiomed.com/" },
    sameAs: SAME_AS,
    areaServed: "US",
  };
}

export function serviceSchema(args: { name: string; description: string; url: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    serviceType: args.serviceType,
    provider: { "@id": `${SITE_URL}/#lab` },
    areaServed: "US",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function personSchema(args: { name: string; jobTitle: string; description: string; credentials?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: args.name,
    jobTitle: args.jobTitle,
    description: args.description,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    ...(args.credentials ? { honorificSuffix: args.credentials.join(", ") } : {}),
  };
}
