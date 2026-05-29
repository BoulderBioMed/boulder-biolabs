// Boulder BioLabs gated lead-magnet PDFs.
// Each one has a landing page at /resources/<slug>/ with an email-capture form,
// and the file itself sits at /public/downloads/<file>.

export interface PdfLeadMagnet {
  slug: string;
  title: string;
  description: string;
  pages: number;
  file: string; // path under /public, leading slash included
  audience: string;
  insideBullets: string[];
}

export const pdfs: PdfLeadMagnet[] = [
  {
    slug: "sterility-readiness-checklist",
    title: "Sterility Testing Readiness Checklist",
    description:
      "Eight questions to answer before your sterility testing program starts. For QA leads preparing for an ISO 11135 EO validation.",
    pages: 4,
    file: "/downloads/boulder-biolabs-sterility-readiness-checklist.pdf",
    audience: "QA leads preparing an EO sterilization validation",
    insideBullets: [
      "8-item pre-validation checklist tied to ISO 11737-1, ISO 11135, and USP <71>",
      "Common 483-finding pitfalls and how to avoid them",
      "When method suitability has to be re-run (material changes, geometry changes)",
      "How Boulder BioLabs bundles method suitability with every sterility program",
    ],
  },
  {
    slug: "eo-residuals-submission-guide",
    title: "EO Residuals Sample Submission Guide",
    description:
      "How to sample, label, and ship EO residuals samples for ISO 10993-7 compliance. Or just hand them across the campus.",
    pages: 3,
    file: "/downloads/boulder-biolabs-eo-residuals-submission-guide.pdf",
    audience: "Manufacturing and QA leads submitting samples for EO residuals testing",
    insideBullets: [
      "Patient contact category to limit table",
      "Sample size guidance by validation phase",
      "When to use headspace vs. exhaustive extraction",
      "8-item submission checklist plus the Boulder Sterilization fast-path",
    ],
  },
  {
    slug: "cd-primer",
    title: "Chlorine Dioxide Sterilization: A Manufacturer's Primer",
    description:
      "Where chlorine dioxide fits, how the validation differs from EO, and what the Clordisys 2026 study means for your program.",
    pages: 4,
    file: "/downloads/boulder-biolabs-cd-primer.pdf",
    audience: "Device companies evaluating CD as an EO alternative",
    insideBullets: [
      "When CD is the right answer (heat-sensitive electronics, bioabsorbable polymers, fast cycles)",
      "EO vs. CD validation comparison table covering BIs, residuals standards, methods, and thresholds",
      "What the March 2026 Clordisys study gives you as a citeable framework",
      "The only U.S. team operating the full CD stack under one ISO 13485 QMS",
    ],
  },
];

export function getPdfBySlug(slug: string): PdfLeadMagnet | undefined {
  return pdfs.find((p) => p.slug === slug);
}
