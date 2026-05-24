import type { Metadata } from "next";
import Link from "next/link";
import ruyalar from "@/data/ruyalar.json";

export const metadata: Metadata = {
  title: "Rüya Tabirleri – Tüm Rüya Anlamları ve Yorumları",
  description:
    "Rüyada gördüğünüz sembollerin anlamını keşfedin. Yılan, diş düşmesi, uçmak ve daha fazlası için detaylı rüya yorumları.",
  keywords:
    "rüya tabirleri, rüya anlamları, rüyada görmek ne demek, rüya yorumu, rüya sözlüğü",
};

export default function RuyadaSembollerPage() {
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
            Rüyamı Yorumla →
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <div className="text-5xl mb-4">🌙</div>
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#F9CB42" }}>
          Rüya Tabirleri
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c4b5e8" }}>
          Rüyanda gördüğün sembollerin anlamını keşfet. {ruyalar.length} rüya sembolü,
          detaylı yorumlar ve daha fazlası.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {ruyalar.map((ruya) => (
            <Link
              key={ruya.slug}
              href={`/ruyada/${ruya.slug}`}
              className="group rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <span className="text-3xl">{ruya.emoji}</span>
              <span
                className="text-sm font-semibold leading-tight group-hover:text-purple-300 transition-colors"
                style={{ color: "#e9d9ff" }}
              >
                {ruya.baslik}
              </span>
              <span className="text-xs" style={{ color: "#9f86c8" }}>
                {ruya.kisa_anlam}
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
            Rüyanın anlamını merak mı ediyorsun?
          </p>
          <p className="mb-8" style={{ color: "#c4b5e8" }}>
            Remil ile yapay zeka destekli rüya yorumu al.
          </p>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            remil.app'te Rüyamı Yorumla ✨
          </a>
        </div>
      </div>
    </main>
  );
}
