import type { Metadata } from "next";
import { getIndustryBySlug } from "@/content/industries";
import { IndustryPageLayout } from "@/components/IndustryPageLayout";

const ind = getIndustryBySlug("orthopedic-implants")!;
export const metadata: Metadata = { title: `Orthopedic Implant Microbiology Testing | Boulder BioLabs`, description: `Sterility, bioburden, and EO/CD residuals testing for spine, joint, trauma, and sports medicine implants.` };

export default function OrthoPage() {
  return (
    <IndustryPageLayout industry={ind} image="/img/industry-orthopedic.png" imageAlt="Orthopedic implants - spine, joint, trauma devices">
      <h2>Why CD Sterilization Matters for Orthopedics</h2>
      <p>Many orthopedic devices — particularly those with bioabsorbable polymers, temperature-sensitive coatings, or heat-sensitive electronics in smart implants — can&apos;t tolerate EO cycles. Chlorine dioxide is the alternative, but it requires CD residuals testing that almost no contract lab offers. Boulder BioLabs offers it precisely because we are co-located with Boulder Sterilization&apos;s CD cycle — the only U.S. contract CD sterilization under ISO 13485.</p>
    </IndustryPageLayout>
  );
}
