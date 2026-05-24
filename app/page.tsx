import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Remil — Yapay Zeka Fal Uygulaması | Kahve, El, Yüz, İlişki Falı",
  description:
    "Remil, Claude AI destekli Türkiye'nin en gelişmiş fal uygulamasıdır. Kahve falı, el falı, yüz falı ve ilişki falı — birbirinden farklı AI falcı karakterleriyle sana özel yorumlar. İlk üyelikte 200 token hediye.",
  keywords:
    "fal uygulaması, kahve falı, el falı, yüz falı, yapay zeka fal, AI fal, ilişki falı, tarot, numeroloji, online fal, fal yorumu, türk fal uygulaması",
  robots: "index, follow",
  authors: [{ name: "Remil" }],
  alternates: { canonical: "https://remil.com.tr/" },
  openGraph: {
    type: "website",
    url: "https://remil.com.tr/",
    title: "Remil — Yapay Zeka Fal Uygulaması",
    description:
      "Kahve falı, el falı, yüz falı ve daha fazlası. AI destekli falcı karakterleriyle sana özel yorumlar. İlk üyelikte 200 token hediye!",
    locale: "tr_TR",
    siteName: "Remil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remil — Yapay Zeka Fal Uygulaması",
    description: "AI destekli kahve falı, el falı, yüz falı. İlk üyelikte 200 token hediye.",
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
    "Yapay zeka destekli Türkiye en gelişmiş fal uygulaması. Kahve falı, el falı, yüz falı ve ilişki falı.",
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
      name: "İlk üyelikte kaç token hediye veriliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remil'e üye olduğunuzda 200 token hediye kazanırsınız.",
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
