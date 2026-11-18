import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması | Kahve, El, Yüz, İlişki Falı",
  description:
    "Remil, Claude AI destekli Türkiye'nin en gelişmiş fal uygulamasıdır. Kahve falı, el falı, yüz falı ve ilişki falı — birbirinden farklı AI falcı karakterleriyle sana özel yorumlar. Tamamen ücretsiz fal uygulaması — üyelik ve ödeme yok.",
  keywords:
    "ücretsiz fal uygulaması, fal uygulaması, kahve falı, el falı, yüz falı, yapay zeka fal, AI fal, ilişki falı, tarot, numeroloji, online fal, fal yorumu, türk fal uygulaması",
  robots: "index, follow",
  authors: [{ name: "Remil" }],
  alternates: { canonical: "https://remil.com.tr/" },
  openGraph: {
    type: "website",
    url: "https://remil.com.tr/",
    title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması",
    description:
      "Kahve falı, el falı, yüz falı ve daha fazlası. AI destekli falcı karakterleriyle sana özel yorumlar. Ücretsiz fal uygulaması, üyelik ve ödeme yok!",
    locale: "tr_TR",
    siteName: "Remil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remil — Ücretsiz Yapay Zeka Fal Uygulaması",
    description: "Ücretsiz fal uygulaması: AI destekli kahve falı, el falı, yüz falı. Üyelik ve ödeme yok.",
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
    "Yapay zeka destekli, tamamen ücretsiz fal uygulaması. Kahve falı, el falı, yüz falı ve ilişki falı — üyelik ve ödeme yok.",
  url: "https://remil.com.tr",
  publisher: { "@type": "Organization", name: "Remil", url: "https://remil.com.tr" },
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
        text: "Remil, Anthropic'in geliştirdiği Claude AI modelini kullanan Türkiye'nin en gelişmiş fal uygulamasıdır. Kahve falı, el falı, yüz falı ve ilişki falı türlerini birbirinden farklı AI falcı karakterleriyle sunar.",
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
      name: "Hangi fal türleri mevcut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remil'de kahve falı, el falı, yüz falı ve ilişki falı aktif olarak kullanılabilir. Tarot ve numeroloji yakında eklenecektir.",
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
