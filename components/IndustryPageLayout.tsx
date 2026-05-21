import Link from "next/link";
import { Industry } from "@/content/industries";
import { getServiceBySlug } from "@/content/services";
import { industries } from "@/content/industries";
import { breadcrumbSchema } from "@/lib/schema";

export function IndustryPageLayout({ industry, children }: { industry: Industry; children: React.ReactNode }) {
  const url = `https://boulderbiolabs.com/industries/${industry.slug}`;
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://boulderbiolabs.com/" },
    { name: "Industries", url: "https://boulderbiolabs.com/#industries" },
    { name: industry.shortName, url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", marginBottom: "0.6rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.95)" }}>Home</Link> › Industries › {industry.shortName}
          </div>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>{industry.name}</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>{industry.intro}</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
          <div>
            <h2>Tests This Industry Requires</h2>
            <ul>
              {industry.tests.map((slug) => {
                const s = getServiceBySlug(slug);
                if (!s) return null;
                return (
                  <li key={slug}><strong><Link href={`/services/${s.slug}`}>{s.shortTitle}</Link></strong></li>
                );
              })}
            </ul>
            <h2>What Makes {industry.shortName} Testing Different</h2>
            <p>{industry.whatsDifferent}</p>
            {children}
          </div>
          <aside style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", height: "fit-content", position: "sticky", top: 90 }}>
            <h3 style={{ marginTop: 0, color: "#0B2545", fontSize: "1.05rem" }}>Other Industries</h3>
            <ul style={{ listStyle: "none", margin: "0 0 1rem 0", padding: 0 }}>
              {industries.filter((i) => i.slug !== industry.slug).map((i) => (
                <li key={i.slug} style={{ marginBottom: "0.5rem" }}>
                  <Link href={`/industries/${i.slug}`} style={{ color: "#2A8AA8", fontWeight: 600 }}>{i.shortName} →</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ display: "block", textAlign: "center" }}>Get a Quote</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
