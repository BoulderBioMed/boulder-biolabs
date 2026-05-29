// Boulder BioLabs launch articles for /resources/
// Source: Vault1/02-Projects/BoulderBioLabs-Website/Boulder-BioLabs-Blog-Drafts.md

export type ArticleSection =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "cta"; text: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  author: string;
  related: string[];
  body: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "iso-11135-2024-changes",
    title: "What Changed in ISO 11135:2024 — and Why Your EO Validation Probably Needs Revisiting",
    description:
      "The 2024 revision tightened bioburden monitoring, annual revalidation, adoption studies, and MPQ language. What it means for your EO validation package.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["bioburden-trending-best-practices", "eo-aeration-optimization", "method-suitability-red-flags"],
    body: [
      { type: "p", text: "If your last EO sterilization validation was written against ISO 11135:2014, your QMS document is now ten years behind the active standard. The 2024 revision tightened several requirements — particularly around adoption studies, microbial performance qualification, and bioburden monitoring frequency — and the changes are flowing into FDA and Notified Body audits this year. Here's what changed and what it means for your validation package." },
      { type: "h2", text: "What's Different" },
      { type: "ul", items: [
        "Section 9.2.5 on routine bioburden monitoring now has clearer guidance on action limits and trend evaluation. Quarterly monitoring remains the baseline, but the standard now expects you to define statistical or experiential action limits before deviation, not after.",
        "Section 12 on revalidation specifies that the annual EO process revalidation must include EO residuals retesting against ISO 10993-7 limits for the current patient contact category — even if no design or cycle changes have occurred.",
        "Adoption study guidance (Annex E) clarifies how to qualify a new product family against an existing validated cycle. Many companies' adoption study SOPs predate this guidance and now read as under-specified.",
        "Microbial performance qualification (MPQ) language now explicitly requires use of a defined biological indicator with documented D-value, with no implicit \"use what you have\" shortcuts.",
      ]},
      { type: "h2", text: "What This Means for You" },
      { type: "p", text: "If you're running production today on a 2014-based validation:" },
      { type: "ol", items: [
        "Pull your QMS document for ISO 11135 cycle validation. If it references the 2014 revision, schedule a gap assessment.",
        "Verify your bioburden action limits are formally documented in your QMS — not just historical \"we've never seen above X\" practice.",
        "Confirm your annual EO residuals retest is on the calendar. Many programs treat residuals as \"done at initial validation\" — that's no longer defensible.",
        "If you've added a product to a validated cycle in the last two years, your adoption study probably needs an addendum.",
      ]},
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "Bioburden testing, EO residuals retesting, and method suitability — all aligned with the current revision of the standard, all under one ISO 13485 quality system co-located with Boulder Sterilization. When your EO cycle needs to revalidate to ISO 11135:2024 expectations, the testing data is ready in days, not weeks." },
      { type: "cta", text: "Schedule an EO validation gap review" },
    ],
  },
  {
    slug: "fda-endotoxin-testing-guidance-2025",
    title: "FDA's 2025 Endotoxin Testing Guidance: What It Says, What It Means, and What's Actually New",
    description:
      "Current FDA endotoxin guidance status, where it's moving on rFC and CSF-contact limits, and what to do now.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["method-suitability-red-flags", "iso-11135-2024-changes", "bioburden-trending-best-practices"],
    body: [
      { type: "p", text: "FDA's Pyrogen and Endotoxins Testing guidance was last revised in 2015, and the agency has been signaling an update — particularly around recombinant Factor C (rFC) methods and CSF-contact thresholds. Here's a working summary of where the guidance currently stands, what's likely to change, and what's worth doing now." },
      { type: "h2", text: "Current State (2015 Guidance, Still Active)" },
      { type: "ul", items: [
        "Blood-contact limit: 0.5 EU/mL or 20 EU/device, K/M-based calculation",
        "CSF-contact limit: 2.15 EU/device (the most stringent commonly-encountered limit)",
        "Method approval: LAL (gel-clot, turbidimetric, chromogenic) with inhibition/enhancement validation",
        "rFC method: acknowledged but with caveats around regulatory acceptance",
      ]},
      { type: "h2", text: "Where It's Moving" },
      { type: "ul", items: [
        "Increased FDA receptiveness to rFC for environmental sustainability reasons (horseshoe crab population concerns)",
        "Tighter expectations around inhibition/enhancement re-validation cadence",
        "Increasing FDA scrutiny on combination devices and CSF-contacting neurostimulators",
      ]},
      { type: "h2", text: "What to Do Now" },
      { type: "ol", items: [
        "If your device is CSF-contacting, verify your current EU/device limit is 2.15 or lower in your QMS document.",
        "Confirm your inhibition/enhancement study is current — many programs treat I/E as a one-time event, but FDA expects re-qualification on material changes.",
        "If you're considering rFC, talk to your contract lab about validation pathway before switching.",
      ]},
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "LAL/BET testing with gel-clot, kinetic turbidimetric, and kinetic chromogenic methods. Co-located release path: sterility, endotoxin, and residuals returns from one sample drop." },
      { type: "cta", text: "Quote an endotoxin testing program" },
    ],
  },
  {
    slug: "chlorine-dioxide-residuals-clordisys-study",
    title: "Chlorine Dioxide Sterilization Residuals: The Clordisys 2026 Study and What It Means for Your Validation",
    description:
      "Clordisys's peer-reviewed CD residuals toxicity thresholds give device manufacturers a citeable framework for the first time. Here's how it changes the CD validation conversation.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["iso-11135-2024-changes", "eo-aeration-optimization", "bioburden-trending-best-practices"],
    body: [
      { type: "p", text: "In March 2026, Clordisys Solutions published \"Chlorine Dioxide Medical Device Sterilization: Residual Toxicity Testing\" in the Journal of Medical and Biological Engineering. The study proposed quantitative toxicity thresholds for chlorite and chlorate residuals — the first peer-reviewed reference framework device manufacturers can cite in a CD validation package. If you're evaluating CD as an EO alternative, this is the document that finally makes the regulatory case writable." },
      { type: "h2", text: "Why CD Has Been Hard to Adopt" },
      { type: "p", text: "Chlorine dioxide kills microorganisms effectively at low temperature, low humidity, and with rapid turnaround — making it ideal for heat- or moisture-sensitive devices and small-lot orthopedic implants. But until recently, the regulatory framework for CD residuals was thin: no peer-reviewed toxicity thresholds, no ISO-equivalent of 10993-7, and most contract labs not equipped to run CD residuals analysis." },
      { type: "h2", text: "What the Study Established" },
      { type: "ul", items: [
        "Residual chlorite toxicity threshold: <6.83 mg/device or <0.8 mg/L",
        "Residual chlorate toxicity threshold: <70.65 mg/device or <0.7 mg/L",
        "Validated extraction and analytical methods (ion chromatography and spectrophotometric)",
        "Demonstration that production-cycle CD residuals fall well below toxicity limits",
      ]},
      { type: "h2", text: "How This Changes the CD Validation Package" },
      { type: "p", text: "You can now write a CD validation rationale that cites the Clordisys framework directly, paired with device-specific residuals data from a lab equipped to run the analytical chemistry. Until 2026, that lab list was very short. After 2026, it's still short — but it has Boulder BioLabs on it." },
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "We are co-located with Boulder Sterilization, the only U.S. contract sterilizer running CD cycles under ISO 13485. CD residuals testing aligned with the Clordisys framework is offered as a routine service — not an exception." },
      { type: "cta", text: "Quote a CD residuals program" },
    ],
  },
  {
    slug: "bioburden-trending-best-practices",
    title: "Bioburden Trending Best Practices: Spotting Process Drift Before It Becomes a Sterility Failure",
    description:
      "A practical bioburden trending discipline for QA managers running quarterly monitoring — action limits, investigation triggers, and the most common drift causes.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["iso-11135-2024-changes", "method-suitability-red-flags", "eo-aeration-optimization"],
    body: [
      { type: "p", text: "Quarterly bioburden data sits in QMS folders untouched until an audit. Then someone pulls four quarters of data, lines it up, and notices an upward trend that should have been caught two cycles ago. This post is about catching it." },
      { type: "h2", text: "The Discipline of Bioburden Trending" },
      { type: "p", text: "ISO 11737-1 doesn't prescribe a specific statistical method for trend analysis, which is part of the problem — every QA team makes it up. What works in practice:" },
      { type: "ol", items: [
        "Plot every routine bioburden result chronologically, broken out by product family and sampling location.",
        "Define action limits before you have data drift — usually 2x the validated bioburden average, or a statistical control limit (e.g., +2σ).",
        "Trigger an investigation when any single result exceeds the action limit, OR when 3 consecutive results trend upward.",
        "Track the root-cause investigation outcomes in a running log — most \"investigations\" are actually \"we don't know\" without the log.",
      ]},
      { type: "h2", text: "Common Causes of Bioburden Drift" },
      { type: "ul", items: [
        "Raw material lot changes (especially polymer suppliers)",
        "Manufacturing environment changes (HVAC, cleaning frequency, traffic)",
        "Personnel turnover or training gaps",
        "Seasonal variation (humidity, outdoor traffic)",
        "Equipment changes upstream (molders, assembly fixtures)",
      ]},
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "Quarterly bioburden programs at Boulder BioLabs include rolling trend reports alongside individual lot data. When bioburden trends up, the data is in your hands days after sampling — not weeks — and the Boulder Sterilization team is two doors down if it triggers a cycle conversation." },
      { type: "cta", text: "Set up a routine bioburden program" },
    ],
  },
  {
    slug: "method-suitability-red-flags",
    title: "The Method Suitability Red Flags Inspectors Find — and How to Avoid Them",
    description:
      "Five common 483-finding patterns around method suitability (bacteriostasis/fungistasis), and the QMS practices that prevent each one.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["fda-endotoxin-testing-guidance-2025", "iso-11135-2024-changes", "bioburden-trending-best-practices"],
    body: [
      { type: "p", text: "Method suitability (B/F) is one of the most common 483 finding categories in medical device sterility programs. Inspectors look at it because it's a clear pass/fail document — either the methodology is defended or it isn't. Here are the five things they find when it isn't." },
      { type: "h2", text: "Red Flag 1: No Method Suitability Document at All" },
      { type: "p", text: "The most common finding. A sterility test was run, a positive result was investigated, but no method suitability study exists in the QMS to validate the test method against the device material. Fix: confirm every released device family has a current method suitability on file." },
      { type: "h2", text: "Red Flag 2: Method Suitability Covers a Different Material" },
      { type: "p", text: "Engineering changed the housing from PEEK to a new polymer blend. The sterility test method didn't change. The method suitability is now 18 months stale against a material it never validated. Fix: any material change triggers an MS re-evaluation." },
      { type: "h2", text: "Red Flag 3: Method Suitability Failed and Was \"Worked Around\"" },
      { type: "p", text: "The original MS showed recovery failure for P. aeruginosa with direct inoculation. The team switched to filtration but didn't re-run the full MS — they just documented that filtration \"would work.\" Fix: every method change requires a full re-validation, not a logical inference." },
      { type: "h2", text: "Red Flag 4: Method Suitability is Older Than the Device Family" },
      { type: "p", text: "The MS was run when the device was prototyped. Production-equivalent material wasn't tested. Fix: MS should reflect production materials, not engineering builds." },
      { type: "h2", text: "Red Flag 5: Method Suitability Doesn't Cover All Six Indicators" },
      { type: "p", text: "USP <71> specifies six indicator organisms. The MS only ran four (skipped C. sporogenes and A. brasiliensis for \"convenience\"). Fix: run all six per USP <71>." },
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "Method suitability is bundled into every sterility program by default. We won't release a sterility result against a stale or missing MS — not to save a week." },
      { type: "cta", text: "Audit your method suitability coverage" },
    ],
  },
  {
    slug: "eo-aeration-optimization",
    title: "EO Aeration Optimization: How Co-Location Cuts Your Validated Aeration Time",
    description:
      "Most EO-sterilized devices are aerated longer than they need to be because of logistics, not process. Co-locating residuals testing with the sterilizer recovers 36-48 hours per cycle.",
    datePublished: "2026-05-28",
    author: "Boulder BioLabs",
    related: ["iso-11135-2024-changes", "chlorine-dioxide-residuals-clordisys-study", "bioburden-trending-best-practices"],
    body: [
      { type: "p", text: "Most EO-sterilized devices are aerated longer than they need to be. The reason isn't process — it's logistics. Here's why your validated aeration time is probably wrong, and what to do about it." },
      { type: "h2", text: "The Hidden Aeration Window" },
      { type: "p", text: "A standard EO cycle has three phases: preconditioning, EO exposure, and aeration. Aeration is where residual EO out-gasses to safe levels. The validated aeration time is established by EO residuals testing — devices sampled at the end of aeration must meet ISO 10993-7 limits for the patient contact category." },
      { type: "p", text: "The problem: in a typical contract lab workflow, the device gets sterilized on Day 0, aerated through Day 2, packed and shipped on Day 3, arrives at the lab on Day 5, and is sampled on Day 6 or 7. The \"validated aeration time\" is whatever you ran in the chamber — but the sample also spent 4-5 days continuing to aerate in a shipping box." },
      { type: "p", text: "Result: the validated aeration time bakes in 4-5 extra days of out-gassing the production process doesn't get. Production devices stay in aeration chambers longer than necessary. Throughput suffers, refrigerator space costs more, and shelf-life clocks tick faster." },
      { type: "h2", text: "Co-Location Tightens the Cycle" },
      { type: "p", text: "When EO residuals testing happens on the same campus as the EO sterilizer, the sample is pulled at the moment chamber aeration ends. The validated aeration time becomes the actual minimum required. For many devices we've seen, that's 36-48 hours of aeration time recovered — every cycle, every load." },
      { type: "h2", text: "When You'll Notice It Most" },
      { type: "ul", items: [
        "High-volume programs (the throughput gain compounds)",
        "Devices with shelf-life concerns (every day in aeration is a day off shelf life)",
        "Devices in tight design-freeze-to-launch timelines (validation cycles iterate faster)",
      ]},
      { type: "h2", text: "How Boulder BioLabs Helps" },
      { type: "p", text: "EO residuals testing is run hours after aeration ends, not days. For Boulder Sterilization clients running EO cycles next door, the validation tightens automatically — no extra effort, no logistics change." },
      { type: "cta", text: "Validate or revalidate your EO aeration" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
