import { usePathname, useRouter } from "next/navigation"

export enum ROUTE {
  CART = "/cart",
  HOME = "/",
  CHECKOUT = "/checkout",
  CHECKOUTCOMFIRMED = "/checkoutConfirmed",
  PRODUCTINFO = "/productInfo/:path*",
  CATEGORYMANAGEMENT = "/categoryManagement",

  MYPAGE = "/myPage",
  CHECKOUTCANCELLIST = "/myPage/checkoutCancelList",
  CHECKOUTREVIEWLIST = "/myPage/reviewList",
  USERINFOOFMODIFICATION = "/myPage/userInfoOfModification",
  COUPONS = "/myPage/coupons",
  Mile = "/myPage/mile",
  INQUIRYCUSTOMERCOUNSELING = "/myPage/inquiryCustomerCounseling",
  COUNSELINGWRITE = "/myPage/inquiryCustomerCounseling/write",
  PRODUCTQNA = "/myPage/productQnAList",
  HEARTPRODUCTLIST = "/myPage/heartProductList",
  WHOLECHECKOUTLIST = "/myPage/wholeCheckoutList",
  SIGNIN = "/signIn",
  SIGNUP = "/signUp",

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
