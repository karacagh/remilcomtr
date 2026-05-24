"use client";

import { useState } from "react";
import Link from "next/link";
import ruyalar from "@/data/ruyalar.json";

type Ruya = (typeof ruyalar)[number];

export default function RuyadaClient() {
  const [query, setQuery] = useState("");

  const filtered: Ruya[] =
    query.trim() === ""
      ? ruyalar
      : ruyalar.filter((r) => {
          const q = query.toLowerCase();
          return (
            r.baslik.toLowerCase().includes(q) ||
            r.kisa_anlam.toLowerCase().includes(q) ||
            r.icerik.toLowerCase().includes(q)
          );
        });

  return (
    <>
      {/* Search */}
      <div className="max-w-2xl mx-auto px-4 pb-10">
        <div className="relative">
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none"
            aria-hidden="true"
          >
            🔍
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rüya ara… (ör: yılan, uçmak, su)"
            className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              backgroundColor: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#f3f0ff",
              caretColor: "#A855F7",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(168,85,247,0.7)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)")
            }
          />
        </div>
        {query.trim() !== "" && (
          <p className="text-xs mt-2 text-right" style={{ color: "#9f86c8" }}>
            {filtered.length} sonuç bulundu
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center py-16" style={{ color: "#9f86c8" }}>
            &quot;{query}&quot; için sonuç bulunamadı.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((ruya) => (
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
        )}
      </div>
    </>
  );
}
