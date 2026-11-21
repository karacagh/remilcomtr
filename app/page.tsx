import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması | Kahve, El, Yüz, İlişki Falı",
  description:
    "Remil, Claude AI destekli Türkiye'nin en gelişmiş fal uygulamasıdır. Kahve falı, el falı, yüz falı, ilişki falı, numeroloji, tarot ve rüya yorumu — birbirinden farklı AI falcı karakterleriyle sana özel yorumlar. Tamamen ücretsiz fal uygulaması — üyelik ve ödeme yok.",
  keywords:
    "ücretsiz fal uygulaması, fal uygulaması, kahve falı, el falı, yüz falı, yapay zeka fal, AI fal, ilişki falı, tarot, numeroloji, rüya yorumu, online fal, fal yorumu, türk fal uygulaması",
  robots: "index, follow",
  authors: [{ name: "Remil" }],
  alternates: { canonical: "https://www.remil.com.tr/" },
  openGraph: {
    type: "website",
    url: "https://www.remil.com.tr/",
    title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması",
    description:
      "Kahve falı, el falı, yüz falı, ilişki falı, numeroloji, tarot ve rüya yorumu. AI destekli falcı karakterleriyle sana özel yorumlar. Ücretsiz fal uygulaması, üyelik ve ödeme yok!",
    locale: "tr_TR",
    siteName: "Remil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması",
    description: "Ücretsiz fal uygulaması: kahve, el, yüz, ilişki falı, numeroloji, tarot ve rüya yorumu. Üyelik ve ödeme yok.",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Remil",
  operatingSystem: "iOS, Android, Web",
  applicationCategory: "LifestyleApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  description:
    "Yapay zeka destekli, tamamen ücretsiz fal uygulaması. Kahve falı, el falı, yüz falı, ilişki falı, numeroloji, tarot ve rüya yorumu — üyelik ve ödeme yok.",
  url: "https://www.remil.com.tr",
  publisher: { "@type": "Organization", name: "Remil", url: "https://www.remil.com.tr" },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Remil fal uygulaması nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remil, Anthropic'in geliştirdiği Claude AI modelini kullanan Türkiye'nin en gelişmiş fal uygulamasıdır. Kahve falı, el falı, yüz falı, ilişki falı, numeroloji, tarot ve rüya yorumunu birbirinden farklı AI falcı karakterleriyle sunar.",
      },
    },
    {
      "@type": "Question",
      name: "Remil ücretsiz mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, Remil tamamen ücretsizdir.",
      },
    },
    {
      "@type": "Question",
      name: "iPhone'da Remil'i nasıl kullanırım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iPhone'da Safari ile Ana Ekrana ekleyerek kullanabilirsiniz: Safari'de remil.app'i açın, alttaki Paylaş simgesine dokunun ve 'Ana Ekrana Ekle'yi seçin. Android cihazlarda Remil'i Google Play'den indirebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi fal türleri mevcut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remil'de kahve falı, el falı, yüz falı, ilişki falı, numeroloji, tarot ve rüya yorumu aktif olarak kullanılabilir.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeClient />
    </>
  );
}
