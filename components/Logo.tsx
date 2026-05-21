type LogoProps = { variant?: "light" | "dark"; height?: number };

export function BoulderBioLabsLogo({ variant = "light", height = 48 }: LogoProps) {
  const boulderFill = variant === "light" ? "#5A6478" : "#cfd8e3";
  const labsFill = variant === "light" ? "#0B2545" : "#FFFFFF";
  return (
    <svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boulder BioLabs" style={{ height, width: "auto" }}>
      <g fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        <text x="40" y="78" fontSize="56" fontWeight="300" letterSpacing="-1" fill={boulderFill}>Boulder</text>
        <g transform="translate(280, 72)">
          <line x1="0" y1="-22" x2="0" y2="22" stroke="#3DA9C7" strokeWidth="1.5" />
          <line x1="-22" y1="0" x2="22" y2="0" stroke="#3DA9C7" strokeWidth="1.5" />
        </g>
        <text x="160" y="124" fontSize="42" fontWeight="700" letterSpacing="-0.5" fill={labsFill}>BioLabs</text>
      </g>
    </svg>
  );
}

export function BoulderBioMedLogo({ variant = "light", height = 38 }: LogoProps) {
  const boulderFill = variant === "light" ? "#5A6478" : "#cfd8e3";
  const biomedFill = variant === "light" ? "#0B2545" : "#FFFFFF";
  return (
    <svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boulder BioMed" style={{ height, width: "auto" }}>
      <g fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif">
        <text x="20" y="54" fontSize="42" fontWeight="300" letterSpacing="-0.8" fill={boulderFill}>Boulder</text>
        <line x1="200" y1="20" x2="200" y2="64" stroke="#3DA9C7" strokeWidth="1.5" />
        <text x="212" y="54" fontSize="42" fontWeight="700" letterSpacing="-0.4" fill={biomedFill}>BioMed</text>
      </g>
    </svg>
  );
}
