import type { NextConfig } from "next";
import slugRedirects from "./data/slug-redirects.json";

const nextConfig: NextConfig = {
  async redirects() {
    // Düzeltilen eski slug'lar -> yeni slug'lar (scripts/seo-merge.mjs üretir).
    // Sadece harf büyüklüğü değişenler (guL -> gul) burada atlanır: Next.js
    // redirect eşleşmesi büyük/küçük harfe duyarsız olduğu için yeni adres de
    // kurala uyar ve sonsuz döngü oluşur. Onları proxy.ts küçük harfe çevirir.
    return slugRedirects
      .filter(({ from, to }) => from.toLowerCase() !== to.toLowerCase())
      .map(({ from, to }) => ({
        source: from,
        destination: to,
        statusCode: 301 as const,
      }));
  },
};

export default nextConfig;
