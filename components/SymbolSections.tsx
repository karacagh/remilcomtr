export type OptionalSections = {
  ask?: string;
  para?: string;
  olumlu?: string;
  olumsuz?: string;
  fincan?: string;
};

const SECTIONS: { key: keyof OptionalSections; title: string }[] = [
  { key: "ask", title: "Aşk Hayatında Anlamı" },
  { key: "para", title: "Para ve İş Hayatında Anlamı" },
  { key: "olumlu", title: "Olumlu Yorumu" },
  { key: "olumsuz", title: "Olumsuz Yorumu" },
  { key: "fincan", title: "Fincanın Üstünde / Dibinde Görülürse" },
];

export function SymbolSections({
  data,
  includeFincan = false,
}: {
  data: OptionalSections;
  includeFincan?: boolean;
}) {
  return (
    <>
      {SECTIONS.filter((s) => includeFincan || s.key !== "fincan").map(
        ({ key, title }) => {
          const text = data[key];
          if (typeof text !== "string" || text.trim() === "") return null;
          return (
            <section
              key={key}
              className="rounded-2xl p-8 mb-6"
              style={{
                backgroundColor: "rgba(168,85,247,0.05)",
                border: "1px solid rgba(168,85,247,0.35)",
              }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: "#F9CB42" }}>
                {title}
              </h2>
              <p className="leading-relaxed text-base" style={{ color: "#e0d4f5" }}>
                {text}
              </p>
            </section>
          );
        }
      )}
    </>
  );
}

export function SymbolCta({ text }: { text: string }) {
  return (
    <section
      className="rounded-2xl p-8 mt-4 mb-10 text-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(249,203,66,0.08) 100%)",
        border: "1px solid rgba(168,85,247,0.3)",
      }}
    >
      <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#F9CB42" }}>
        {text}
      </p>
      <a
        href="https://remil.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:opacity-90"
        style={{ backgroundColor: "#A855F7", color: "#fff" }}
      >
        Remil&apos;de Yorumlat ✨
      </a>
    </section>
  );
}

export const SITE_URL = "https://www.remil.com.tr";

export function symbolJsonLd(opts: {
  section: "falda" | "ruyada";
  slug: string;
  title: string;
  description: string;
}) {
  const sectionName = opts.section === "falda" ? "Falda Semboller" : "Rüyada Semboller";
  const url = `${SITE_URL}/${opts.section}/${opts.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: sectionName, item: `${SITE_URL}/${opts.section}` },
        { "@type": "ListItem", position: 3, name: opts.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: opts.title,
      description: opts.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "tr-TR",
      author: { "@type": "Organization", name: "Remil", url: `${SITE_URL}/` },
      publisher: { "@type": "Organization", name: "Remil", url: `${SITE_URL}/` },
    },
  ];
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
