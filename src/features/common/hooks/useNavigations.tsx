import { usePathname, useRouter, useSearchParams } from "next/navigation"

export enum ROUTE {
  CART = "/cart",
  MYPAGE = "/myPage",
  HOME = "/",

  CHECKOUT = "/checkout",
  CHECKOUTCOMFIRMED = "/checkoutConfirmed",
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

  // auth 관련 routes
  SIGNIN = "/signIn",
  SIGNUP = "/signUp",

  // 상품 리스트 관련 routes
  BESTPRODUCTLIST = "/bestProductList",
  ARRIVALPRODUCTLIST = "/arrivalProductList",
  TOPSALEPRODUCTLIST = "/topSaleProductList",
  SEARCHPRODUCTLIST = "/searchProductList/product",
}

export const useNavigations = () => {
  const { push, replace } = useRouter()
  const pathname = usePathname()

  const routeTo = (path: ROUTE, isReplace = false, dataToSend?: string) => {
    const newPath = dataToSend
      ? `${path}?data=${encodeURIComponent(JSON.stringify(dataToSend))}`
      : path
    isReplace ? replace(newPath) : push(newPath)
  }

  return {
    pathname,
    routeTo,
  }
}
