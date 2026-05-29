import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, type ArticleSection } from "@/content/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  const url = `https://boulderbiolabs.com/resources/${article.slug}`;
  return {
    title: `${article.title} | Boulder BioLabs`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderSection(section: ArticleSection, i: number) {
  switch (section.type) {
    case "h2":
      return <h2 key={i} style={{ color: "#0B2545", marginTop: "2.2rem", marginBottom: "0.8rem", fontSize: "1.5rem" }}>{section.text}</h2>;
    case "h3":
      return <h3 key={i} style={{ color: "#0B2545", marginTop: "1.6rem", marginBottom: "0.6rem", fontSize: "1.2rem" }}>{section.text}</h3>;
    case "p":
      return <p key={i} style={{ marginBottom: "1rem", lineHeight: 1.7, color: "#1f2937" }}>{section.text}</p>;
    case "ul":
      return (
        <ul key={i} style={{ marginBottom: "1.2rem", paddingLeft: "1.4rem", lineHeight: 1.7, color: "#1f2937" }}>
          {section.items.map((item, j) => <li key={j} style={{ marginBottom: "0.4rem" }}>{item}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} style={{ marginBottom: "1.2rem", paddingLeft: "1.4rem", lineHeight: 1.7, color: "#1f2937" }}>
          {section.items.map((item, j) => <li key={j} style={{ marginBottom: "0.4rem" }}>{item}</li>)}
        </ol>
      );
    case "callout":
      return (
        <div key={i} style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.3rem 1.6rem", borderRadius: 6, margin: "1.5rem 0" }}>
          {section.title && <h3 style={{ color: "#0B2545", marginTop: 0, marginBottom: "0.5rem" }}>{section.title}</h3>}
          <p style={{ margin: 0, lineHeight: 1.7 }}>{section.text}</p>
        </div>
      );
    case "cta":
      return (
        <div key={i} style={{ background: "#0B2545", color: "#fff", padding: "1.6rem 1.8rem", borderRadius: 8, marginTop: "2rem" }}>
          <p style={{ margin: 0, marginBottom: "1rem", color: "#e3eaf2" }}>{section.text}</p>
          <Link href="/contact" style={{ display: "inline-block", background: "#3DA9C7", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>Request a Quote →</Link>
        </div>
      );
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.related.map((s) => getArticleBySlug(s)).filter((a): a is NonNullable<typeof a> => Boolean(a));
  const articleUrl = `/resources/${article.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: article.title,
              description: article.description,
              url: articleUrl,
              datePublished: article.datePublished,
              authorName: article.author,
              authorUrl: "/about",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://boulderbiolabs.com/" },
              { name: "Resources", url: "https://boulderbiolabs.com/resources" },
              { name: article.title, url: `https://boulderbiolabs.com${articleUrl}` },
            ]),
          ),
        }}
      />

      <nav style={{ background: "#F2F4F7", padding: "0.8rem 1.5rem", borderBottom: "1px solid #e1e7ee" }} aria-label="Breadcrumb">
        <div style={{ maxWidth: 1180, margin: "0 auto", fontSize: "0.875rem", color: "#5A6478" }}>
          <Link href="/" style={{ color: "#5A6478", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <Link href="/resources" style={{ color: "#5A6478", textDecoration: "none" }}>Resources</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <span style={{ color: "#0B2545" }}>{article.title}</span>
        </div>
      </nav>

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#9DD6E8", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "0.8rem" }}>{formatDate(article.datePublished)} · Boulder BioLabs</p>
          <h1 style={{ color: "#fff", fontSize: "2.2rem", lineHeight: 1.2, maxWidth: 900 }}>{article.title}</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>{article.description}</p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {article.body.map(renderSection)}

          {related.length > 0 && (
            <div style={{ borderTop: "1px solid #e1e7ee", marginTop: "3rem", paddingTop: "2rem" }}>
              <h2 style={{ color: "#0B2545", fontSize: "1.3rem", marginBottom: "1rem" }}>Related Articles</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.8rem" }}>
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/resources/${rel.slug}`} style={{ display: "block", padding: "1rem 1.2rem", border: "1px solid #e1e7ee", borderRadius: 6, textDecoration: "none", color: "#0B2545" }}>
                    <div style={{ fontWeight: 600, marginBottom: "0.3rem" }}>{rel.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "#5A6478" }}>{rel.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
