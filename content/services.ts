export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  isoTag: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "sterility-testing",
    title: "Sterility Testing for Medical Devices",
    shortTitle: "Sterility Testing",
    isoTag: "ALIGNED WITH ISO 11737-2 · USP <71>",
    metaTitle: "Sterility Testing | ISO 11737-2 USP 71 | Boulder BioLabs",
    metaDescription: "Sterility testing aligned with ISO 11737-2 and USP <71>. Co-located with Boulder Sterilization. 4-hour BI release option.",
    intro: "Sterility testing is the regulatory gate between a sterilized lot and a released product. Boulder BioLabs executes sterility test protocols aligned with ISO 11737-2 and USP <71>, operating under the Boulder BioMed ISO 13485 quality management system. Because we sit on the same campus as Boulder Sterilization, your devices move from sterilizer to incubator without leaving the property — no shipping, no transit contamination risk, no lost days. For BI-based release programs, we also offer 4-hour cycle release using 3M Attest rapid-readout biological indicators.",
    related: ["method-suitability", "bioburden-testing", "eo-residuals-testing"],
  },
  {
    slug: "bioburden-testing",
    title: "Bioburden Testing",
    shortTitle: "Bioburden Testing",
    isoTag: "ALIGNED WITH ISO 11737-1",
    metaTitle: "Bioburden Testing | ISO 11737-1 | Boulder BioLabs",
    metaDescription: "Bioburden testing aligned with ISO 11737-1. Co-located with Boulder Sterilization for faster cycle iteration and routine monitoring.",
    intro: "Bioburden testing quantifies the microbial population on a medical device before sterilization. Boulder BioLabs executes bioburden testing protocols aligned with ISO 11737-1, operating under the Boulder BioMed ISO 13485 quality management system. The data feeds directly into the cycle development and routine monitoring programs at Boulder Sterilization next door.",
    related: ["sterility-testing", "method-suitability", "eo-residuals-testing"],
  },
  {
    slug: "method-suitability",
    title: "Method Suitability Testing — Bacteriostasis & Fungistasis",
    shortTitle: "Method Suitability (B/F)",
    isoTag: "ALIGNED WITH ISO 11737-2 · USP <71>",
    metaTitle: "Method Suitability Testing (B/F) | Boulder BioLabs",
    metaDescription: "Bacteriostasis and fungistasis (B/F) method suitability aligned with ISO 11737-2 and USP <71>. The prerequisite for defensible sterility testing.",
    intro: "Method suitability testing — also called B/F testing — is the prerequisite that makes every sterility test you run defensible. Boulder BioLabs executes method suitability studies using protocols aligned with ISO 11737-2 and USP <71>, operating under the Boulder BioMed ISO 13485 quality management system.",
    related: ["sterility-testing", "bioburden-testing", "lal-endotoxin-testing"],
  },
  {
    slug: "lal-endotoxin-testing",
    title: "LAL / Bacterial Endotoxin Testing",
    shortTitle: "LAL / Endotoxin Testing",
    isoTag: "ALIGNED WITH USP <85>",
    metaTitle: "LAL Endotoxin Testing | USP 85 BET | Boulder BioLabs",
    metaDescription: "Bacterial Endotoxin Testing (LAL/BET) aligned with USP <85>. Gel-clot, turbidimetric, and chromogenic methods for cardiovascular, CSF, class II/III devices.",
    intro: "Bacterial endotoxin testing (BET) by Limulus Amebocyte Lysate (LAL) method quantifies endotoxin levels on medical devices that contact blood, CSF, the lymphatic system, or other endotoxin-sensitive routes. Boulder BioLabs executes BET using protocols aligned with USP <85> and the ISO 11737 family, operating under the Boulder BioMed ISO 13485 quality management system.",
    related: ["sterility-testing", "eo-residuals-testing", "method-suitability"],
  },
  {
    slug: "eo-residuals-testing",
    title: "EO Residuals Testing",
    shortTitle: "EO Residuals Testing",
    isoTag: "ALIGNED WITH ISO 10993-7",
    metaTitle: "EO Residuals Testing | ISO 10993-7 | Boulder BioLabs",
    metaDescription: "EO, ECH, and EG residuals testing aligned with ISO 10993-7. Headspace and exhaustive extraction. Co-located with Boulder Sterilization.",
    intro: "Every EO-sterilized device must demonstrate that residual EO, ethylene chlorohydrin (ECH), and ethylene glycol (EG) meet the patient-contact thresholds in ISO 10993-7. Boulder BioLabs executes EO residuals testing protocols aligned with ISO 10993-7 using headspace and exhaustive extraction GC methods, operating under the Boulder BioMed ISO 13485 quality management system.",
    related: ["sterility-testing", "bioburden-testing", "cd-sterilization-testing"],
  },
  {
    slug: "cd-sterilization-testing",
    title: "Chlorine Dioxide (CD) Sterilization Residuals Testing",
    shortTitle: "CD Sterilization Residuals",
    isoTag: "RARE SERVICE · UNIQUE IN U.S.",
    metaTitle: "CD Sterilization Residuals Testing | Boulder BioLabs",
    metaDescription: "Chlorine dioxide sterilization residuals testing — co-located with Boulder Sterilization, the only U.S. contract CD sterilizer under ISO 13485.",
    intro: "Chlorine dioxide sterilization is the low-temperature, EO-alternative process used for heat-, moisture-, and EO-sensitive devices. Most contract labs don't offer CD residuals testing — most aren't co-located with a CD sterilizer. Boulder BioLabs offers it precisely because we are co-located with Boulder Sterilization, the only U.S. contract sterilizer running CD cycles under ISO 13485.",
    related: ["sterility-testing", "eo-residuals-testing", "bioburden-testing"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
