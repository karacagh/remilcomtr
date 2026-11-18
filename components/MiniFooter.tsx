const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/falda", label: "Falda Semboller" },
  { href: "/ruyada", label: "Rüyada Semboller" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function MiniFooter() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(168,85,247,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav aria-label="Alt menü">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm transition-colors hover:text-purple-300"
                  style={{ color: "#9f86c8" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs" style={{ color: "#7c6aa3" }}>
          © Remil · remil.com.tr
        </p>
      </div>
    </footer>
  );
}
