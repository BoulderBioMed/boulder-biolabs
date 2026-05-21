import type { Metadata } from "next";
import { getIndustryBySlug } from "@/content/industries";
import { IndustryPageLayout } from "@/components/IndustryPageLayout";

const ind = getIndustryBySlug("cardiovascular")!;
export const metadata: Metadata = { title: `Cardiovascular Device Microbiology Testing | Boulder BioLabs`, description: `Sterility, BET, and EO/CD residuals testing for cardiovascular devices — stents, catheters, vascular grafts. Co-located with Boulder Sterilization.` };

export default function CardiovascularPage() {
  return (
    <IndustryPageLayout industry={ind}>
      <h2>Validation Pathway</h2>
      <p>For new cardiovascular device introductions, our typical scope is: bioburden recovery efficiency study → method suitability → sterility validation (half-cycle, full-cycle, PCD) → EO residuals validation → BET inhibition/enhancement → routine release program. Most of this can be bundled into a single integrated quote with Boulder Sterilization.</p>
    </IndustryPageLayout>
  );
}
