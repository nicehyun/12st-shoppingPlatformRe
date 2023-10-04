export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/checkoutConfirmed/:path*",
    "/myPage/:path*",
  ],
}
