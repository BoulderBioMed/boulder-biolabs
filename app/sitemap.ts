import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { articles } from "@/content/articles";
import { pdfs } from "@/content/pdfs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://boulderbiolabs.com";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, priority: 1.0 },
    { url: `${base}/integrated-testing`, lastModified, priority: 0.9 },
    { url: `${base}/about`, lastModified, priority: 0.7 },
    { url: `${base}/faq`, lastModified, priority: 0.7 },
    { url: `${base}/family`, lastModified, priority: 0.5 },
    { url: `${base}/contact`, lastModified, priority: 0.8 },
    { url: `${base}/resources`, lastModified, priority: 0.7 },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified, priority: 0.8 })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.slug}`, lastModified, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${base}/resources/${a.slug}`, lastModified: new Date(a.datePublished), priority: 0.6 })),
    ...pdfs.map((p) => ({ url: `${base}/resources/${p.slug}`, lastModified, priority: 0.7 })),
  ];
}
