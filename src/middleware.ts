import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const pageList = [
    "/",
    "/auth/signIn",
    "/auth/signUp",
    "/cart",
    "/checkout",
    "/checkoutConfirmed",
    "/myPage",
    "/myPage/checkoutList",
    "/myPage/checkoutCancelList",
    "/myPage/reviewList",
    "/myPage/reviewList/writeableReviews",
    "/myPage/reviewList/myReview",
    "/myPage/userInfoOfModification",
  ]
  const withAuthPageList = [
    "/cart",
    "/checkout",
    "/checkoutConfirmed",
    "/myPage",
    "/myPage/checkoutList",
    "/myPage/checkoutCancelList",
    "/myPage/reviewList",
    "/myPage/reviewList/writeableReviews",
    "/myPage/reviewList/myReview",
    "/myPage/userInfoOfModification",
  ]
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "next-auth.session-token",
  })

  const isWithoutAuth = withAuthPageList.includes(pathname)
  const isIncludePageList = pageList.includes(pathname)

  if (!isIncludePageList)
    return NextResponse.redirect(new URL("/", request.url))

  if (isWithoutAuth && !token)
    return NextResponse.redirect(new URL("/auth/signIn", request.url))

  if (request.nextUrl.pathname.startsWith("/auth/signIn") && !!token)
    return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
