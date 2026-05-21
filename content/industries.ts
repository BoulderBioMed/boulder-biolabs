export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  tests: string[];
  whatsDifferent: string;
};

export const industries: Industry[] = [
  {
    slug: "cardiovascular",
    name: "Microbiology Testing for Cardiovascular Devices",
    shortName: "Cardiovascular",
    tagline: "Stents, catheters, guidewires, vascular grafts, heart valves",
    intro: "Cardiovascular devices face the strictest sterility, endotoxin, and residuals thresholds in the device industry. Boulder BioLabs supports cardiovascular device manufacturers through validation, routine release, and post-market monitoring — co-located with Boulder Sterilization's EO and CD cycles.",
    tests: ["sterility-testing", "lal-endotoxin-testing", "eo-residuals-testing", "bioburden-testing", "method-suitability"],
    whatsDifferent: "Cardiovascular devices typically have complex internal geometries (lumens, braided structures, coatings) that challenge both extraction recovery (for bioburden) and aseptic technique (for sterility). Method suitability becomes more critical, not less.",
  },
  {
    slug: "csf-neurosurgical",
    name: "Microbiology Testing for CSF-Contacting and Neurosurgical Devices",
    shortName: "CSF & Neurosurgical",
    tagline: "Shunts, drains, intrathecal catheters, neurosurgical implants",
    intro: "Shunts, drains, intrathecal catheters, and neurosurgical implants contact cerebrospinal fluid — the most endotoxin-sensitive route in the medical device industry. CSF-contact endotoxin limits are 10x stricter than blood-contact. Boulder BioLabs supports CSF-contacting device manufacturers through full validation and routine release.",
    tests: ["sterility-testing", "lal-endotoxin-testing", "eo-residuals-testing", "cd-sterilization-testing", "bioburden-testing", "method-suitability"],
    whatsDifferent: "FDA's 2015 guidance sets the CSF-contacting endotoxin limit at 2.15 EU/device — roughly an order of magnitude stricter than the 20 EU/device blood-contact limit. That tighter limit drives method selection (typically kinetic chromogenic LAL) and increases the importance of the inhibition/enhancement study.",
  },
  {
    slug: "orthopedic-implants",
    name: "Microbiology Testing for Orthopedic Implants",
    shortName: "Orthopedic Implants",
    tagline: "Spine, joint, trauma, sports medicine",
    intro: "Spine, joint, trauma, and sports medicine implants face full ISO 10993-7 implant-route residual limits and ISO 11135 EO validation requirements. Many orthopedic devices also use chlorine dioxide sterilization for temperature-sensitive materials — one of the few areas where Boulder BioLabs offers a service most competitors can't.",
    tests: ["sterility-testing", "bioburden-testing", "eo-residuals-testing", "cd-sterilization-testing", "method-suitability"],
    whatsDifferent: "Many orthopedic devices — particularly those with bioabsorbable polymers, temperature-sensitive coatings, or heat-sensitive electronics in smart implants — can't tolerate EO cycles. Chlorine dioxide is the alternative, but it requires CD residuals testing that almost no contract lab offers.",
  },
  {
    slug: "ivd-diagnostics",
    name: "Microbiology Testing for IVD and Diagnostic Devices",
    shortName: "IVD & Diagnostics",
    tagline: "Diagnostic devices, sample collection kits, point-of-care",
    intro: "In vitro diagnostic (IVD) devices, sample collection kits, and point-of-care diagnostics have testing requirements that differ from implantable devices — sterility may or may not apply, but bioburden control is often critical for assay accuracy. Boulder BioLabs supports IVD manufacturers with the specific test menu their device class requires.",
    tests: ["bioburden-testing", "sterility-testing", "method-suitability", "eo-residuals-testing"],
    whatsDifferent: "IVD devices often present unusual sample geometries — small swabs, plastic test cassettes, lateral flow strips, sample collection tubes. Method selection (extraction technique, recovery efficiency study design) is tuned to the specific device.",
  },
];

export const getIndustryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
