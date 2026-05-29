import Link from "next/link";
import { Service, getServiceBySlug } from "@/content/services";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

type Props = {
  service: Service;
  children: React.ReactNode;
  faqs?: { q: string; a: string }[];
  image?: string;
  imageAlt?: string;
};

export function ServicePageLayout({ service, children, faqs, image, imageAlt }: Props) {
  const url = `https://boulderbiolabs.com/services/${service.slug}`;
  const schemas: object[] = [
    serviceSchema({ name: service.shortTitle, description: service.metaDescription, url, serviceType: service.shortTitle }),
    breadcrumbSchema([
      { name: "Home", url: "https://boulderbiolabs.com/" },
      { name: "Services", url: "https://boulderbiolabs.com/#services" },
      { name: service.shortTitle, url },
    ]),
  ];
  if (faqs && faqs.length > 0) schemas.push(faqSchema(faqs));

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", marginBottom: "0.6rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.95)" }}>Home</Link> › Services › {service.shortTitle}
          </div>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", color: "#fff", padding: "0.3rem 0.8rem", borderRadius: 4, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", marginBottom: "0.6rem" }}>{service.isoTag}</span>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>{service.title}</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>{service.intro}</p>
        </div>
      </section>

      {image && (
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 1.5rem", marginTop: "-2rem" }}>
          <img src={image} alt={imageAlt || service.shortTitle} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 10, boxShadow: "0 6px 20px rgba(11,37,69,0.18)" }} />
        </div>
      )}

      <section style={{ padding: image ? "2.5rem 1.5rem 3.5rem" : "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
          <div className="service-main">{children}</div>
          <aside style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", height: "fit-content", position: "sticky", top: 90 }}>
            <h3 style={{ marginTop: 0, color: "#0B2545", fontSize: "1.05rem" }}>Related Services</h3>
            <ul style={{ listStyle: "none", margin: "0 0 1rem 0", padding: 0 }}>
              {service.related.map((slug) => {
                const r = getServiceBySlug(slug);
                if (!r) return null;
                return (
                  <li key={slug} style={{ marginBottom: "0.5rem" }}>
                    <Link href={`/services/${r.slug}`} style={{ color: "#2A8AA8", fontWeight: 600 }}>{r.shortTitle} →</Link>
                  </li>
                );
              })}
            </ul>
            <h3 style={{ color: "#0B2545", fontSize: "1.05rem" }}>Quick Quote</h3>
            <p style={{ color: "#5A6478", fontSize: "0.9rem" }}>Tell us your device and we&apos;ll respond within one business day.</p>
            <Link href="/contact" className="btn btn-primary" style={{ display: "block", textAlign: "center" }}>Get a Quote</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
