import type { Metadata } from "next";
import FaldaClient from "./FaldaClient";

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
          Fincanda gördüğün şekillerin anlamını keşfet. 100 sembol,
          detaylı yorumlar ve daha fazlası.
        </p>
      </div>

      <FaldaClient />

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
