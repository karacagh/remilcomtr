import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import semboller from "@/data/semboller.json";

type Sembol = (typeof semboller)[number];

interface Props {
  params: Promise<{ slug: string }>;
}

function getSembol(slug: string): Sembol | undefined {
  return semboller.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return semboller.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sembol = getSembol(slug);
  if (!sembol) return {};

  return {
    title: `${sembol.baslik} – Kahve Falı Anlamı | remil.com.tr`,
    description: sembol.meta_description,
    keywords: sembol.keywords,
    alternates: {
      canonical: `https://remil.com.tr/falda/${sembol.slug}`,
    },
    openGraph: {
      title: `${sembol.baslik} – Kahve Falı Anlamı`,
      description: sembol.meta_description,
      url: `https://remil.com.tr/falda/${sembol.slug}`,
      siteName: "remil.com.tr",
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function SembolPage({ params }: Props) {
  const { slug } = await params;
  const sembol = getSembol(slug);

  if (!sembol) notFound();

  const ilgiliSemboller = sembol.ilgili_semboller
    .map((s) => semboller.find((x) => x.slug === s))
    .filter(Boolean) as Sembol[];

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0a0718", color: "#f3f0ff" }}
    >
      {/* Header */}
      <header
        className="border-b sticky top-0 z-10 backdrop-blur"
        style={{
          borderColor: "rgba(168,85,247,0.2)",
          backgroundColor: "rgba(10,7,24,0.9)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/falda"
            className="text-sm flex items-center gap-1 transition-colors hover:text-purple-300"
            style={{ color: "#A855F7" }}
          >
            ← Tüm Semboller
          </Link>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            Falıma Bak →
          </a>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Sembol Başlık */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-5">{sembol.emoji}</div>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#F9CB42" }}
          >
            {sembol.baslik}
          </h1>
          <div
            className="inline-block px-5 py-2 rounded-full text-base font-semibold"
            style={{
              backgroundColor: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#d8b4fe",
            }}
          >
            {sembol.kisa_anlam}
          </div>
        </div>

        {/* İçerik */}
        <section
          className="rounded-2xl p-8 mb-10"
          style={{
            backgroundColor: "rgba(168,85,247,0.07)",
            border: "1px solid rgba(168,85,247,0.18)",
          }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "#A855F7" }}
          >
            Detaylı Yorum
          </h2>
          <p className="leading-relaxed text-base" style={{ color: "#e0d4f5" }}>
            {sembol.icerik}
          </p>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 mb-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(249,203,66,0.08) 100%)",
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <p
            className="text-2xl font-bold mb-2"
            style={{ color: "#F9CB42" }}
          >
            Kendi falında ne var?
          </p>
          <p className="mb-6 text-sm" style={{ color: "#c4b5e8" }}>
            Yapay zeka destekli kahve falı yorumu için Remil'i dene.
          </p>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            remil.app'te Falıma Bak ✨
          </a>
        </section>

        {/* İlgili Semboller */}
        {ilgiliSemboller.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-5"
              style={{ color: "#A855F7" }}
            >
              İlgili Semboller
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ilgiliSemboller.map((ilgili) => (
                <Link
                  key={ilgili.slug}
                  href={`/falda/${ilgili.slug}`}
                  className="group rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <span className="text-3xl">{ilgili.emoji}</span>
                  <div>
                    <p
                      className="font-semibold text-sm group-hover:text-purple-300 transition-colors"
                      style={{ color: "#e9d9ff" }}
                    >
                      {ilgili.baslik}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#9f86c8" }}>
                      {ilgili.kisa_anlam}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Footer */}
      <footer
        className="border-t mt-10"
        style={{ borderColor: "rgba(168,85,247,0.15)" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/falda"
            className="text-sm transition-colors hover:text-purple-300"
            style={{ color: "#9f86c8" }}
          >
            ← Tüm Sembollere Dön
          </Link>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold transition-colors hover:text-purple-300"
            style={{ color: "#A855F7" }}
          >
            remil.app
          </a>
        </div>
      </footer>
    </main>
  );
}
