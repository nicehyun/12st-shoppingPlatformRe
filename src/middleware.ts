import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const withAuthPageList = [
    "/cart",
    "/checkout",
    "/checkoutConfirmed",
    "/myPage",
  ]
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "next-auth.session-token",
  })

  const isWithoutAuth = withAuthPageList.includes(pathname)

  if (isWithoutAuth && !token)
    return NextResponse.rewrite(new URL("/auth/signIn", request.url))

  if (request.nextUrl.pathname.startsWith("/auth/signIn") && !!token)
    return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
