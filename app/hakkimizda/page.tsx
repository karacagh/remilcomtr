import type { Metadata } from "next";
import MiniFooter from "@/components/MiniFooter";

export const metadata: Metadata = {
  title: "Hakkımızda – Remil Ücretsiz Yapay Zeka Fal ve Rüya Yorumu Uygulaması",
  description:
    "Remil, yapay zeka destekli, tamamen ücretsiz bir fal ve rüya yorumu uygulamasıdır. Kahve, el, yüz ve ilişki falı, numeroloji, tarot ve rüya yorumu; 6 farklı falcı karakteriyle.",
  alternates: { canonical: "https://www.remil.com.tr/hakkimizda" },
  openGraph: {
    type: "website",
    url: "https://www.remil.com.tr/hakkimizda",
    title: "Remil Hakkında",
    description:
      "Yapay zeka destekli, tamamen ücretsiz fal ve rüya yorumu uygulaması Remil'in hikayesi.",
    locale: "tr_TR",
    siteName: "Remil",
  },
};

const falTurleri = [
  { emoji: "☕", ad: "Kahve Falı" },
  { emoji: "✋", ad: "El Falı" },
  { emoji: "🙂", ad: "Yüz Falı" },
  { emoji: "💞", ad: "İlişki Falı" },
  { emoji: "🔢", ad: "Numeroloji" },
  { emoji: "🃏", ad: "Tarot" },
  { emoji: "🌙", ad: "Rüya Yorumu" },
];

const cardStyle = {
  backgroundColor: "rgba(168,85,247,0.07)",
  border: "1px solid rgba(168,85,247,0.25)",
};

export default function HakkimizdaPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#0a0718", color: "#f3f0ff" }}
    >
      {/* Header */}
      <div className="border-b" style={{ borderColor: "rgba(168,85,247,0.2)" }}>
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="text-xl font-bold" style={{ color: "#A855F7" }}>
            remil.com.tr
          </a>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            Uygulamayı Aç →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 30%, rgba(168,85,247,0.25), transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-12 text-center">
          <div className="text-5xl mb-4" aria-hidden="true">🔮</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "#F9CB42" }}>
            Hakkımızda
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#c4b5e8" }}>
            Fal geleneğini yapay zekayla buluşturan, tamamen ücretsiz bir fal ve
            rüya yorumu uygulaması.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        <section className="rounded-2xl p-8" style={cardStyle}>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#F9CB42" }}>
            Remil Nedir?
          </h2>
          <p className="leading-relaxed" style={{ color: "#e0d4f5" }}>
            Remil, yapay zeka destekli bir fal ve rüya yorumu uygulamasıdır.
            Fincanının, avucunun ya da yüzünün fotoğrafını yüklersin; seçtiğin
            falcı fotoğrafı inceler ve sana özel bir yorum hazırlar. Rüyanı
            anlattığında da sembollerini çözer, rüyanın sana ne söylediğini
            yorumlar.
          </p>
        </section>

        <section className="rounded-2xl p-8" style={cardStyle}>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#F9CB42" }}>
            Tamamen Ücretsiz
          </h2>
          <p className="leading-relaxed" style={{ color: "#e0d4f5" }}>
            Remil&apos;deki tüm falcılar ve tüm fal türleri ücretsizdir. Üyelik
            ya da ödeme gerekmez; uygulamayı indirip hemen falına baktırabilirsin.
          </p>
        </section>

        <section className="rounded-2xl p-8" style={cardStyle}>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#F9CB42" }}>
            6 Farklı Falcı Karakteri
          </h2>
          <p className="leading-relaxed" style={{ color: "#e0d4f5" }}>
            Remil&apos;de her biri kendine has kişiliğe ve yorum tarzına sahip 6
            falcı karakteri seni bekliyor. Kimi sıcak ve samimi, kimi şiirsel ve
            gizemli, kimi de sert ve gerçekçi. Hangi tarzı seviyorsan o falcıyı
            seçebilirsin.
          </p>
        </section>

        <section className="rounded-2xl p-8" style={cardStyle}>
          <h2 className="text-xl font-bold mb-5" style={{ color: "#F9CB42" }}>
            Neler Yorumluyoruz?
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {falTurleri.map((f) => (
              <li
                key={f.ad}
                className="rounded-xl px-4 py-3 flex items-center gap-3"
                style={{
                  backgroundColor: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <span className="text-2xl" aria-hidden="true">{f.emoji}</span>
                <span className="text-sm font-semibold" style={{ color: "#e9d9ff" }}>
                  {f.ad}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl p-8" style={cardStyle}>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#F9CB42" }}>
            Hikayemiz
          </h2>
          <p className="leading-relaxed" style={{ color: "#e0d4f5" }}>
            Fincan kapatıp sohbet etmek, bir rüyayı sabah kahvaltısında
            yorumlamak bu toprakların en sevilen geleneklerinden. Remil, bu
            sıcak geleneği modern bir deneyime taşımak için doğdu: aynı merakı,
            aynı sohbet tadını yapay zekanın yorum gücüyle birleştirip cebine
            getiriyoruz.
          </p>
        </section>

        <section
          className="rounded-2xl p-6"
          style={{
            backgroundColor: "rgba(249,203,66,0.06)",
            border: "1px solid rgba(249,203,66,0.25)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#e9ddc0" }}>
            <strong style={{ color: "#F9CB42" }}>Not:</strong> Remil&apos;deki
            fal ve rüya yorumları eğlence amaçlıdır. Sağlık, hukuk, finans gibi
            önemli kararlarınızda profesyonel destek almanızı öneririz.
          </p>
        </section>

        <section className="rounded-2xl p-8 text-center" style={cardStyle}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#F9CB42" }}>
            Bize Ulaş
          </h2>
          <p style={{ color: "#c4b5e8" }}>
            Soru, öneri ve geri bildirimlerin için:{" "}
            <a
              href="mailto:destek@remil.com.tr"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: "#A855F7" }}
            >
              destek@remil.com.tr
            </a>
          </p>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(249,203,66,0.08) 100%)",
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <p className="text-2xl font-bold mb-2" style={{ color: "#F9CB42" }}>
            Falına bakmaya hazır mısın?
          </p>
          <p className="mb-6" style={{ color: "#c4b5e8" }}>
            Remil&apos;i aç, falcını seç, sana özel yorumunu al.
          </p>
          <a
            href="https://remil.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#A855F7", color: "#fff" }}
          >
            remil.app&apos;e Git ✨
          </a>
        </section>
      </article>

      <MiniFooter />
    </main>
  );
}
