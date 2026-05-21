import type { Metadata } from "next";
import { getIndustryBySlug } from "@/content/industries";
import { IndustryPageLayout } from "@/components/IndustryPageLayout";

const ind = getIndustryBySlug("ivd-diagnostics")!;
export const metadata: Metadata = { title: `IVD & Diagnostic Device Microbiology Testing | Boulder BioLabs`, description: `Bioburden, sterility, and method suitability testing for IVD devices, sample collection kits, and point-of-care diagnostics.` };

export default function IVDPage() {
  return (
    <IndustryPageLayout industry={ind}>
      <h2>Working with IVD Sample Geometries</h2>
      <p>IVD devices often present unusual sample geometries — small swabs, plastic test cassettes, lateral flow strips, sample collection tubes. Method selection (extraction technique, recovery efficiency study design) is tuned to the specific device.</p>
    </IndustryPageLayout>
  );
}
