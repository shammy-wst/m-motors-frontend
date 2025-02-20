import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth/");
  const isProtectedPage =
    request.nextUrl.pathname.startsWith("/dossiers/") ||
    request.nextUrl.pathname.startsWith("/admin/") ||
    request.nextUrl.pathname.startsWith("/catalogue/new") ||
    request.nextUrl.pathname.includes("/edit");

  // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Rediriger vers la page d'accueil si l'utilisateur est déjà authentifié
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/dossiers/:path*",
    "/admin/:path*",
    "/catalogue/new",
    "/catalogue/:path*/edit",
  ],
};
