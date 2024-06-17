import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*"],
};

const publicRoutes = [
  "/",
  "/forgot-password",
  "/recovery-password",
  "/register",
  "/first-access",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("@vportal.token")?.value;
  const redirectAuth = request.cookies.get("@vportal.redirect")?.value;
  const redirectCookie = request.cookies.get("redirectTo")?.value;

  const baseUrl = request.nextUrl.origin;

  if (redirectCookie) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(baseUrl, {
      headers: {
        "Set-Cookie": "redirectTo=/; Path=/; HttpOnly; max-age=10;",
      },
    });
  } else {
    if (publicRoutes.includes(request.nextUrl.pathname))
      return NextResponse.redirect(baseUrl + redirectAuth);
    else return NextResponse.next();
  }
}
