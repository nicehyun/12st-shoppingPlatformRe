import { usePathname, useRouter, useSearchParams } from "next/navigation"

export enum ROUTE {
  CART = "/cart",
  MYPAGE = "/myPage",
  HOME = "/",
  SIGNIN = "/auth/signIn",
  CHECKOUT = "/checkout",
  SIGNUP = "/auth/signup",
  FIND_EMAIL = "/auth/find/email",
  FIND_PASSWORD = "/auth/find/password",
}
// TODO : 커스텀 useRouter 만들기
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
