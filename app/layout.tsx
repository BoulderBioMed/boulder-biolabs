import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FamilyBar } from "@/components/FamilyBar";
import { organizationSchema, medicalLabSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://boulderbiolabs.com"),
  title: { default: "Boulder BioLabs | Medical Device Microbiology Testing Lab", template: "%s | Boulder BioLabs" },
  description: "Contract microbiology testing for medical devices — sterility, bioburden, endotoxin, EO and CD residuals. Co-located with Boulder Sterilization. 4-hour cycle release with 3M Attest rapid-readout BIs.",
  openGraph: {
    title: "Boulder BioLabs | Medical Device Microbiology Testing Lab",
    description: "Contract microbiology testing for medical devices. Co-located with Boulder Sterilization. 4-hour cycle release with 3M Attest rapid-readout BIs.",
    url: "https://boulderbiolabs.com",
    siteName: "Boulder BioLabs",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Boulder BioLabs", description: "Contract microbiology testing co-located with sterilization." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalLabSchema()) }} />
      </head>
      <body>
        <FamilyBar />
        <Nav />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
