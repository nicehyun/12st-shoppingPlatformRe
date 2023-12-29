import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

// TODO : 로그인 제한 페이지
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "next-auth.session-token",
  })

  const isCategoryManagementPage = (pathname: string) =>
    pathname.startsWith("/categoryManagement")

  const isProductDetailPage = (pathname: string) =>
    pathname.startsWith("/productDetail")

  const wholePage = [
    "/signIn",
    "/signUp",
    "/",
    "/arrivalProductList",
    "/bestProductList",
    "/searchProductList",
    "/topSaleProductList",
    "/cart",
    "/categoryManagement",
    "/checkout",
    "/checkoutConfirmed",
    "/myPage",
    "/myPage/checkoutList",
    "/myPage/checkoutCancelList",
    "/myPage/reviewList",
    "/myPage/userInfoOfModification",
    "/myPage/coupons",
    "/myPage/mile",
    "/myPage/inquiryCustomerCounseling",
    "/myPage/inquiryCustomerCounseling/write",
    "/myPage/productQnAList",
    "/productDetail",
  ]

  if (
    !wholePage.includes(request.nextUrl.pathname) &&
    !isCategoryManagementPage(request.nextUrl.pathname) &&
    !isProductDetailPage(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (token) {
    if (
      request.nextUrl.pathname.startsWith("/signIn") ||
      request.nextUrl.pathname.startsWith("/signUp")
    ) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  } else if (
    ["/cart", "/checkout", "/checkoutConfirmed"].includes(
      request.nextUrl.pathname
    ) ||
    request.nextUrl.pathname.startsWith("/myPage")
  ) {
    return NextResponse.redirect(new URL("/signIn", request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
