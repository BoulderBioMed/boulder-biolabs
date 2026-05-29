import type { Metadata } from "next";
import { getPdfBySlug } from "@/content/pdfs";
import { PdfLandingPage } from "@/components/PdfLandingPage";

const pdf = getPdfBySlug("cd-primer")!;

export const metadata: Metadata = {
  title: `${pdf.title} | Boulder BioLabs`,
  description: pdf.description,
  alternates: { canonical: `https://boulderbiolabs.com/resources/${pdf.slug}` },
  openGraph: {
    title: pdf.title,
    description: pdf.description,
    url: `https://boulderbiolabs.com/resources/${pdf.slug}`,
    type: "article",
  },
};

export default function Page() {
  return <PdfLandingPage pdf={pdf} />;
}
