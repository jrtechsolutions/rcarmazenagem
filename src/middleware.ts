import { NextResponse, type NextRequest } from "next/server";
import {
  CONSTRUCTION_ALLOWED_PATHS,
  CONSTRUCTION_PREVIEW_COOKIE,
  isSiteUnderConstruction,
} from "@/lib/construction";

export function middleware(request: NextRequest) {
  if (!isSiteUnderConstruction()) {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  // Preview interno: ?preview=1 libera; ?preview=0 revoga
  if (searchParams.has("preview")) {
    const enabled = searchParams.get("preview") === "1";
    const url = request.nextUrl.clone();
    url.searchParams.delete("preview");
    const res = NextResponse.redirect(url);
    if (enabled) {
      res.cookies.set(CONSTRUCTION_PREVIEW_COOKIE, "1", {
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      });
    } else {
      res.cookies.delete(CONSTRUCTION_PREVIEW_COOKIE);
    }
    return res;
  }

  if (request.cookies.get(CONSTRUCTION_PREVIEW_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  const allowed = (CONSTRUCTION_ALLOWED_PATHS as readonly string[]).includes(
    pathname,
  );
  if (allowed) {
    return NextResponse.next();
  }

  const home = request.nextUrl.clone();
  home.pathname = "/";
  home.search = "";
  return NextResponse.redirect(home);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|txt|xml|json)$).*)",
  ],
};
