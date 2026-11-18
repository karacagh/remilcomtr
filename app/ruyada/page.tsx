import type { Metadata } from "next";
import MiniFooter from "@/components/MiniFooter";
import RuyadaClient from "./RuyadaClient";

export const metadata: Metadata = {
  title: "Rüya Tabirleri – Rüya Yorumu ve Rüyada Görülen Sembollerin Anlamları",
  description:
    "Rüyanda gördüklerinin anlamını keşfet. Remil yapay zeka ile rüyanı yorumlar. Yılan, su, uçmak, diş düşmesi ve 100 rüya sembolünün tabiri.",
  keywords:
    "rüya tabirleri, rüya anlamları, rüyada görmek ne demek, rüya yorumu, rüya sözlüğü",
  alternates: { canonical: "https://www.remil.com.tr/ruyada" },
  openGraph: {
    type: "website",
    url: "https://www.remil.com.tr/ruyada",
    title: "Rüya Tabirleri",
    siteName: "Remil",
    locale: "tr_TR",
  },
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
          <a
            href="/"
            className="text-xl font-bold"
            style={{ color: "#A855F7" }}
          >
            remil.com.tr
          </a>
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
      <style>{"html{scroll-behavior:smooth}"}</style>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 30%, rgba(168,85,247,0.28), transparent 70%), radial-gradient(circle at 85% 80%, rgba(249,203,66,0.07), transparent 40%)",
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          <span className="absolute text-4xl opacity-40" style={{ top: "14%", left: "8%" }}>🌙</span>
          <span className="absolute text-xl opacity-50" style={{ top: "22%", right: "12%" }}>✨</span>
          <span className="absolute text-lg opacity-40" style={{ top: "62%", left: "14%" }}>⭐</span>
          <span className="absolute text-2xl opacity-30" style={{ bottom: "14%", right: "8%" }}>🌟</span>
          <span className="absolute text-sm opacity-50" style={{ top: "42%", right: "22%" }}>✦</span>
          <span className="absolute text-sm opacity-40" style={{ top: "10%", left: "38%" }}>✦</span>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-12 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#d8c4fb",
            }}
          >
            🌙 Remil artık rüya da yorumluyor
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ color: "#F9CB42" }}>
            Rüya Tabirleri
          </h1>
          <p className="text-xl font-semibold mb-4" style={{ color: "#e9ddff" }}>
            Rüyandan kalan izleri keşfet.
          </p>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8" style={{ color: "#c4b5e8" }}>
            Yapay zeka destekli falcılarımız rüyanı dinler, sembollerini çözer ve
            sana özel yorumlar. Aşağıdan 100 rüya sembolünün anlamına da göz
            atabilirsin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://remil.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-xl font-bold text-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#A855F7",
                color: "#fff",
                boxShadow: "0 0 32px rgba(168,85,247,0.45)",
              }}
            >
              Rüyamı Anlat ✨
            </a>
            <a
              href="#ruya-ara"
              className="inline-block px-4 py-3 font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#F9CB42" }}
            >
              Sembollere Göz At ↓
            </a>
          </div>
        </div>
      </section>

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
      <MiniFooter />
    </main>
  );
}
