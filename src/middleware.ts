import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const secret = process.env.NEXTAUTH_SECRET

  const accessToken = await getToken({
    req: request,
    secret: secret,
    // cookieName: "next-auth.session-token",
    // cookieName: "__Secure-next-auth.session-token",
    cookieName:
      process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
  })

  const isCategoryManagementPage = (pathname: string) =>
    pathname.startsWith("/categoryManagement")

  const isProductDetailPage = (pathname: string) =>
    pathname.startsWith("/productDetail")

  const isBestProductPage = (pathname: string) =>
    pathname.startsWith("/bestProductList")

  const isSearchProductListToProductPage = (pathname: string) =>
    pathname.startsWith("/searchProductList/product")
  const isSearchProductListToBrandPage = (pathname: string) =>
    pathname.startsWith("/searchProductList/brand")

  const wholePage = [
    "/signIn",
    "/signUp",
    "/",
    "/arrivalProductList",
    "/topSaleProductList",
    "/cart",
    "/categoryManagement",
    "/checkout",
    "/checkoutConfirmed",
    "/myPage",
    "/myPage/checkoutCancelList",
    "/myPage/reviewList",
    "/myPage/userInfoOfModification",
    "/myPage/coupons",
    "/myPage/mile",
    "/myPage/inquiryCustomerCounseling",
    "/myPage/inquiryCustomerCounseling/write",
    "/myPage/productQnAList",
    "/myPage/heartProductList",
    "/myPage/wholeCheckoutList",
  ]

  if (
    !isBestProductPage(pathname) &&
    !isCategoryManagementPage(pathname) &&
    !isProductDetailPage(pathname) &&
    !isSearchProductListToProductPage(pathname) &&
    !isSearchProductListToBrandPage(pathname) &&
    !wholePage.includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (isProductDetailPage(pathname)) {
    const [, , productId] = pathname.split("/")

    const productDetail = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productId}`,
      {
        next: { revalidate: 60 * 5 },
      }
    ).then((res) => res.json())

    if (Object.keys(productDetail).length === 0) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  if (accessToken) {
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
