import { usePathname, useRouter, useSearchParams } from "next/navigation"

export enum ROUTE {
  CART = "/cart",
  MYPAGE = "/myPage",
  HOME = "/",
  SIGNIN = "/auth/signIn",
  CHECKOUT = "/checkout",
  CHECKOUTCOMFIRMED = "/checkoutConfirmed",
  SIGNUP = "/auth/signUp",
  FIND_EMAIL = "/auth/find/email",
  FIND_PASSWORD = "/auth/find/password",
}

export const useNavigations = () => {
  const { push, replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return {
    pathname,
    searchParams: searchParams.get("search"),
    routeTo: (path: ROUTE, isReplace = false) =>
      isReplace ? replace(path) : push(path),
  }
}
