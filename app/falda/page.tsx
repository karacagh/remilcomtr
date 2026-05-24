import type { Metadata } from "next";
import Link from "next/link";
import semboller from "@/data/semboller.json";

export const metadata: Metadata = {
  title: "Kahve Falında Semboller – Tüm Fal Sembolleri ve Anlamları",
  description:
    "Kahve falında görülen tüm semboller ve anlamları. At, kedi, yılan, kuş ve daha fazlası için detaylı fal yorumları.",
  keywords:
    "kahve falı sembolleri, falda sembol anlamları, kahve falı yorumu, fal sembolleri listesi",
};

export default function FaldaSembollerPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0a0718", color: "#f3f0ff" }}
    >
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(168,85,247,0.2)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "#A855F7" }}
          >
            remil.com.tr
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
      </div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <div className="text-5xl mb-4">☕</div>
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#F9CB42" }}>
          Kahve Falı Sembolleri
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c4b5e8" }}>
          Fincanda gördüğün şekillerin anlamını keşfet. {semboller.length} sembol,
          detaylı yorumlar ve daha fazlası.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {semboller.map((sembol) => (
            <Link
              key={sembol.slug}
              href={`/falda/${sembol.slug}`}
              className="group rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <span className="text-3xl">{sembol.emoji}</span>
              <span
                className="text-sm font-semibold leading-tight group-hover:text-purple-300 transition-colors"
                style={{ color: "#e9d9ff" }}
              >
                {sembol.baslik}
              </span>
              <span className="text-xs" style={{ color: "#9f86c8" }}>
                {sembol.kisa_anlam}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(168,85,247,0.2)", backgroundColor: "rgba(168,85,247,0.06)" }}
      >
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <p className="text-2xl font-bold mb-3" style={{ color: "#F9CB42" }}>
            Kendi falına baktırmak ister misin?
          </p>
          <p className="mb-8" style={{ color: "#c4b5e8" }}>
            Remil ile yapay zeka destekli kahve falı yorumu al.
          </p>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            remil.app'te Falıma Bak ✨
          </a>
        </div>
      </div>
    </main>
  );
}
