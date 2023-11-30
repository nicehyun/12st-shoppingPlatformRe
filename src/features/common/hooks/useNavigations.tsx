import { usePathname, useRouter, useSearchParams } from "next/navigation"

export enum ROUTE {
  CART = "/cart",
  MYPAGE = "/myPage",
  HOME = "/",
  SIGNIN = "/signIn",
  CHECKOUT = "/checkout",
  CHECKOUTCOMFIRMED = "/checkoutConfirmed",
  SIGNUP = "/signUp",
  FIND_EMAIL = "/find/email",
  FIND_PASSWORD = "/find/password",
  CHECKOUTLIST = "/myPage/checkoutList",
  CHECKOUTCANCELLIST = "/myPage/checkoutCancelList",
  CHECKOUTREVIEWLIST = "/myPage/reviewList",
  USERINFOOFMODIFICATION = "/myPage/userInfoOfModification",
  COUPONS = "/myPage/coupons",
  Mile = "/myPage/mile",
  INQUIRYCUSTOMERCOUNSELING = "/myPage/inquiryCustomerCounseling",
  COUNSELINGWRITE = "/myPage/inquiryCustomerCounseling/write",
  PRODUCTQNA = "/myPage/productQnAList",
  HEARTPRODUCTLIST = "/myPage/heartProductList",
  PRODUCTINFO = "/productInfo/:path*",
  CATEGORYMANAGEMENT = "categoryManagement",

  // 상품 리스트 관련 routes
  BESTPRODUCTLIST = "/bestProductList",
  ARRIVALPRODUCTLIST = "/arrivalProductList",
  TOPSALEPRODUCTLIST = "/topsaleProductList",
}

export const useNavigations = () => {
  const { push, replace } = useRouter()
  const pathname = usePathname()

  const params = useSearchParams()

  const routeTo = (
    path: ROUTE,
    isReplace = false,
    dataToSend?: Record<string, any>
  ) => {
    const newPath = dataToSend
      ? `${path}?data=${encodeURIComponent(JSON.stringify(dataToSend))}`
      : path
    isReplace ? replace(newPath) : push(newPath)
  }

  const getParams = () => {
    const paramsData = params.get("data")

    if (paramsData) {
      return JSON.parse(paramsData)
    } else {
      return null
    }
  }

  return {
    pathname,
    routeTo,
    getParams,
  }
}
