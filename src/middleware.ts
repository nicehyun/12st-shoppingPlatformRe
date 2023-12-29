import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

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

  const isSearchProductListToProductPage = (pathname: string) =>
    pathname.startsWith("/searchProductList/product")
  const isSearchProductListToBrandPage = (pathname: string) =>
    pathname.startsWith("/searchProductList/brand")

  const wholePage = [
    "/signIn",
    "/signUp",
    "/",
    "/arrivalProductList",
    "/bestProductList",
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
    !wholePage.includes(pathname) &&
    !isCategoryManagementPage(pathname) &&
    !isProductDetailPage(pathname) &&
    !isSearchProductListToProductPage(pathname) &&
    !isSearchProductListToBrandPage
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (token) {
    if (pathname.startsWith("/signIn") || pathname.startsWith("/signUp")) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  } else if (
    ["/cart", "/checkout", "/checkoutConfirmed"].includes(pathname) ||
    pathname.startsWith("/myPage")
  ) {
    return NextResponse.redirect(new URL("/signIn", request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
