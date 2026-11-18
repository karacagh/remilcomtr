import type { MetadataRoute } from "next";
import semboller from "@/data/semboller.json";
import ruyalar from "@/data/ruyalar.json";

const baseUrl = "https://www.remil.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/falda`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ruyada`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/hakkimizda`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const faldaPages: MetadataRoute.Sitemap = semboller.map((s) => ({
    url: `${baseUrl}/falda/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const ruyadaPages: MetadataRoute.Sitemap = ruyalar.map((r) => ({
    url: `${baseUrl}/ruyada/${r.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...faldaPages, ...ruyadaPages];
}
