// Kullanım (proje kökünden):
//   node scripts/seo-merge.mjs --dry   -> sadece rapor, hiçbir dosyayı değiştirmez
//   node scripts/seo-merge.mjs         -> yedek alır, düzeltir, ek dosyaları birleştirir
//
// Ne yapar:
//  1. data/ klasörünü data/backup/<tarih>/ altına yedekler
//  2. semboller.json içindeki hatalı slug'ları düzeltir (guL, guverCin, atesh, leyla...)
//  3. Var olmayan sluglara giden "ilgili_semboller" linklerini onarır
//  4. data/falda-ek-*.json ve data/ruyada-ek-*.json dosyalarını (ask, para, olumlu, olumsuz, fincan) birleştirir
//  5. Eski -> yeni slug eşleşmelerini data/slug-redirects.json dosyasına yazar
//  6. Doğrulama başarısızsa hiçbir şey yazmaz

import fs from "node:fs";
import path from "node:path";

const DIR = "data";
const DRY = process.argv.includes("--dry");
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const FIELDS = ["ask", "para", "olumlu", "olumsuz", "fincan"];

const read = (f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
const falda = read("semboller.json");
const ruya = read("ruyalar.json");

// ---------- 1) Slug düzeltmeleri (sadece falda) ----------
const FALDA_RENAME = {
  "guL-gormek": "gul-gormek",
  "guverCin-gormek": "guvercin-gormek",
  "atesh-gormek": "ates-gormek",
  "leyla-gormek": "lale-gormek",
  "kovboy-gormek": "sapka-gormek",
  "bulbul-yuvasi-gormek": "yuva-gormek",
  "bulbul-kafes-gormek": "kafes-gormek",
  "kaplica-gormek": "kaynak-gormek",
  "mumluk-gormek": "fener-gormek",
  "yildiz-kayma-gormek": "kayan-yildiz-gormek",
  "sogut-gormek": "sogut-agaci-gormek",
};

// ---------- 2) Kırık ilgili linklerin yerine geçecekler ----------
const FALDA_REMAP = {
  ...FALDA_RENAME,
  "ag-gormek": "ari-gormek",
  "bahce-gormek": "agac-gormek",
  "dusман-gormek": "akrep-gormek", // kiril karakterli hatalı kayıt
  "kalem-gormek": "kitap-gormek",
  "kalkan-gormek": "ok-gormek",
  "karanlik-gormek": "baykus-gormek",
  "kilit-gormek": "kapi-gormek",
  "meyve-gormek": "elma-gormek",
  "okul-gormek": "kitap-gormek",
  "orman-gormek": "dag-gormek",
  "taç-gormek": "tac-gormek",
  "tekne-gormek": "sandal-gormek",
};
const FALDA_OVERRIDE = {
  "yilan-gormek": ["akrep-gormek", "kedi-gormek", "orumcek-gormek"],
  "kitap-gormek": ["elma-gormek", "mum-gormek", "anahtar-gormek"],
  "anahtar-gormek": ["ev-gormek", "kapi-gormek", "sandik-gormek"],
  "agac-gormek": ["cicek-gormek", "elma-gormek", "dag-gormek"],
};
const FALDA_FALLBACK = ["yildiz-gormek", "yol-gormek", "kus-gormek"];

const RUYA_REMAP = {
  "ag-gormek": "zincir-gormek",
  "akrep-gormek": "orumcek-gormek",
  "atesh-gormek": "ates-gormek",
  "baykus-gormek": "kus-gormek",
  "bulut-gormek": "ruzgar-gormek",
  "bıcak-gormek": "bicak-gormek", // noktasız ı'lı hatalı kayıt
  "el-gormek": "arkadas-gormek",
  "gokkusagi-gormek": "gunes-gormek",
  "goz-gormek": "ayna-gormek",
  "guL-gormek": "bahce-gormek",
  "is-gormek": "altin-gormek",
  "kalp-gormek": "yuzuk-gormek",
  "kanat-gormek": "kus-gormek",
  "karanlik-gormek": "magara-gormek",
  "kilit-gormek": "kapi-gormek",
  "kitap-gormek": "okul-gormek",
  "meyve-gormek": "bahce-gormek",
  "saray-gormek": "tac-gormek",
  "sel-gormek": "su-gormek",
  "tas-gormek": "dag-gormek",
};
const RUYA_OVERRIDE = {
  "yilan-gormek": ["orumcek-gormek", "kedi-gormek", "magara-gormek"],
  "orumcek-gormek": ["yilan-gormek", "zincir-gormek", "fare-gormek"],
};
const RUYA_FALLBACK = ["yol-gormek", "yildiz-gormek", "su-gormek"];

// ---------- yardımcılar ----------
const redirects = [];

function renameSlugs(arr, map, base) {
  for (const it of arr) {
    if (map[it.slug]) {
      redirects.push({ from: `${base}/${it.slug}`, to: `${base}/${map[it.slug]}` });
      it.slug = map[it.slug];
    }
  }
}

function fixRelated(arr, remap, override, fallback) {
  const valid = new Set(arr.map((x) => x.slug));
  for (const it of arr) {
    let list = (override[it.slug] ?? it.ilgili_semboller ?? []).map((s) => remap[s] ?? s);
    list = list.filter((s, i) => valid.has(s) && s !== it.slug && list.indexOf(s) === i);
    for (const f of fallback) {
      if (list.length >= 3) break;
      if (valid.has(f) && f !== it.slug && !list.includes(f)) list.push(f);
    }
    it.ilgili_semboller = list.slice(0, 3);
  }
}

function validate(name, arr) {
  const errs = [];
  const slugs = arr.map((x) => x.slug);
  const set = new Set(slugs);
  if (set.size !== slugs.length) errs.push(`${name}: tekrar eden slug var`);
  for (const s of slugs) if (!SLUG_RE.test(s)) errs.push(`${name}: geçersiz slug "${s}"`);
  for (const it of arr)
    for (const l of it.ilgili_semboller ?? [])
      if (!set.has(l)) errs.push(`${name}: ${it.slug} -> kırık link "${l}"`);
  return errs;
}

function mergeEk(arr, prefix, renameMap) {
  const files = fs.readdirSync(DIR).filter((f) => new RegExp(`^${prefix}-ek-\\d+\\.json$`).test(f)).sort();
  const bySlug = new Map(arr.map((x) => [x.slug, x]));
  const report = { files, merged: 0, unmatched: [] };
  for (const f of files) {
    for (const e of read(f)) {
      const slug = renameMap[e.slug] ?? e.slug;
      const target = bySlug.get(slug);
      if (!target) { report.unmatched.push(`${f}: ${e.slug}`); continue; }
      for (const k of FIELDS)
        if (typeof e[k] === "string" && e[k].trim()) target[k] = e[k].trim();
      report.merged++;
    }
  }
  return report;
}

// ---------- çalıştır ----------
renameSlugs(falda, FALDA_RENAME, "/falda");
fixRelated(falda, FALDA_REMAP, FALDA_OVERRIDE, FALDA_FALLBACK);
fixRelated(ruya, RUYA_REMAP, RUYA_OVERRIDE, RUYA_FALLBACK);

const rF = mergeEk(falda, "falda", FALDA_RENAME);
const rR = mergeEk(ruya, "ruyada", {});

const errors = [...validate("falda", falda), ...validate("ruya", ruya)];

const cover = (arr) => arr.filter((x) => FIELDS.slice(0, 4).every((k) => x[k])).length;
console.log(`falda : ${rF.files.length} ek dosya, ${rF.merged} sembol birleşti, ${cover(falda)}/${falda.length} sembolde 4 alan tam`);
console.log(`ruya  : ${rR.files.length} ek dosya, ${rR.merged} sembol birleşti, ${cover(ruya)}/${ruya.length} sembolde 4 alan tam`);
console.log(`slug düzeltmesi (falda): ${redirects.length}`);
for (const u of [...rF.unmatched, ...rR.unmatched]) console.log(`  eşleşmedi: ${u}`);

if (errors.length) {
  console.error("\nDOĞRULAMA HATASI, hiçbir dosya yazılmadı:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
if (DRY) {
  console.log("\n--dry: dosyalar değiştirilmedi.");
  process.exit(0);
}

// yedek
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const bdir = path.join(DIR, "backup", stamp);
fs.mkdirSync(bdir, { recursive: true });
for (const f of fs.readdirSync(DIR))
  if (f.endsWith(".json")) fs.copyFileSync(path.join(DIR, f), path.join(bdir, f));
console.log(`yedek: ${bdir}`);

// yaz
const out = (f, d) => fs.writeFileSync(path.join(DIR, f), JSON.stringify(d, null, 2) + "\n");
out("semboller.json", falda);
out("ruyalar.json", ruya);

if (redirects.length) {
  const rf = path.join(DIR, "slug-redirects.json");
  const old = fs.existsSync(rf) ? JSON.parse(fs.readFileSync(rf, "utf8")) : [];
  const seen = new Set(old.map((r) => r.from));
  out("slug-redirects.json", [...old, ...redirects.filter((r) => !seen.has(r.from))]);
  console.log("yönlendirme listesi: data/slug-redirects.json");
}

// backup klasörü git'e girmesin
const gi = ".gitignore";
const cur = fs.existsSync(gi) ? fs.readFileSync(gi, "utf8") : "";
if (!cur.includes("data/backup")) fs.appendFileSync(gi, (cur.endsWith("\n") || !cur ? "" : "\n") + "data/backup/\n");

console.log("tamam.");
