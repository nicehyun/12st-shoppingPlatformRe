import { CsType } from "../types/myPage"

export const getKoreanCsType = (csType: CsType) => {
  if (!csType) return

  const csTypeList = [
    { kor: "배송문의", eng: "delivery" },
    { kor: "주문문의", eng: "checkout" },
    { kor: "취소문의", eng: "cancel" },
    { kor: "반품문의", eng: "return" },
    { kor: "교환문의", eng: "change" },
    { kor: "환불문의", eng: "refund" },
    { kor: "입금문의", eng: "deposit" },
    { kor: "시스템문의", eng: "system" },
    { kor: "기타문의", eng: "etc" },
    { kor: "회원정보문의", eng: "userInfo" },
    { kor: "결제방법문의", eng: "payment" },
    { kor: "상품문의", eng: "product" },
    { kor: "쿠폰/마일리지문의", eng: "couponAndMile" },
  ]

  const findedKoreanCstype = csTypeList.find((item) => item.eng === csType)

  return findedKoreanCstype ? findedKoreanCstype.kor : undefined
}
