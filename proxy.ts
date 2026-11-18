import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sembol slug'ları hep küçük harftir. Büyük harf içeren eski adresleri
// (ör. /falda/guL-gormek) küçük harfli karşılığına kalıcı (301) yönlendirir.
// next.config redirects büyük/küçük harfe duyarsız eşleştiği için bu durum
// orada çözülemiyor (döngü oluşuyor).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!/[A-Z]/.test(pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = pathname.replace(/[A-Z]/g, (c) => c.toLowerCase());
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/falda/:path*", "/ruyada/:path*"],
};
