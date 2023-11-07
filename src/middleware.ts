import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"
import { ROUTE } from "./common/hooks/useNavigations"

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const pageList: string[] = [
    ROUTE.HOME,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.CART,
    ROUTE.CHECKOUT,
    ROUTE.CHECKOUTCOMFIRMED,
    ROUTE.MYPAGE,
    ROUTE.CHECKOUTLIST,
    ROUTE.CHECKOUTCANCELLIST,
    ROUTE.CHECKOUTREVIEWLIST,
    ROUTE.USERINFOOFMODIFICATION,
    ROUTE.COUPONS,
    ROUTE.Mile,
    ROUTE.INQUIRYCUSTOMERCOUNSELING,
    ROUTE.COUNSELINGWRITE,
    ROUTE.PRODUCTQNA,
  ]
  const withAuthPageList: string[] = [
    ROUTE.CART,
    ROUTE.CHECKOUT,
    ROUTE.CHECKOUTCOMFIRMED,
    ROUTE.MYPAGE,
    ROUTE.CHECKOUTLIST,
    ROUTE.CHECKOUTCANCELLIST,
    ROUTE.CHECKOUTREVIEWLIST,
    ROUTE.USERINFOOFMODIFICATION,
    ROUTE.COUPONS,
    ROUTE.Mile,
    ROUTE.INQUIRYCUSTOMERCOUNSELING,
    ROUTE.COUNSELINGWRITE,
    ROUTE.PRODUCTQNA,
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
