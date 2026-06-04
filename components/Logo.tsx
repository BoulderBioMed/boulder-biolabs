type LogoProps = { variant?: "light" | "dark"; height?: number };

// Brand-compliant per LOCKED V3 brand standard / bbm-brand-style-guide:
//   "Boulder" [gray #636466, white on dark] | vertical bar #9A9A9A | Name [BBM blue #286898]
// Forbidden (removed): navy #0B2545, teal/blue crosshair mark, blue "Boulder" prefix.

export function BoulderBioLabsLogo({ variant = "light", height = 48 }: LogoProps) {
  const boulderFill = variant === "light" ? "#636466" : "#FFFFFF";
  const labsFill = "#286898"; // company name stays BBM blue on light and dark
  return (
    <svg viewBox="0 0 470 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boulder BioLabs" style={{ height, width: "auto" }}>
      <g fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        <text x="20" y="54" fontSize="42" fontWeight="300" letterSpacing="-0.8" fill={boulderFill}>Boulder</text>
        <line x1="200" y1="20" x2="200" y2="64" stroke="#9A9A9A" strokeWidth="2" />
        <text x="212" y="54" fontSize="42" fontWeight="700" letterSpacing="-0.4" fill={labsFill}>BioLabs</text>
      </g>
    </svg>
  );
}

export function BoulderBioMedLogo({ variant = "light", height = 38 }: LogoProps) {
  const boulderFill = variant === "light" ? "#636466" : "#FFFFFF";
  const biomedFill = "#286898"; // company name stays BBM blue on light and dark
  return (
    <svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boulder BioMed" style={{ height, width: "auto" }}>
      <g fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        <text x="20" y="54" fontSize="42" fontWeight="300" letterSpacing="-0.8" fill={boulderFill}>Boulder</text>
        <line x1="200" y1="20" x2="200" y2="64" stroke="#9A9A9A" strokeWidth="2" />
        <text x="212" y="54" fontSize="42" fontWeight="700" letterSpacing="-0.4" fill={biomedFill}>BioMed</text>
      </g>
    </svg>
  );
}
