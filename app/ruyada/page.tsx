import type { Metadata } from "next";
import RuyadaClient from "./RuyadaClient";

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
          Rüyanda gördüğün sembollerin anlamını keşfet. 100 rüya sembolü,
          detaylı yorumlar ve daha fazlası.
        </p>
      </div>

      <RuyadaClient />

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
