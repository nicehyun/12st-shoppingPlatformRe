export const getKoreanPaymentMethod = (payment: string) => {
  if (!payment) return

  const paymentList = [
    { kor: "신용/체크카드", eng: "credit" },
    { kor: "토스페이", eng: "tosspay" },
    { kor: "네이버페이", eng: "naverpay" },
    { kor: "카카오페이", eng: "kakaopay" },
    { kor: "삼성페이", eng: "samsungpay" },
    { kor: "페이코", eng: "payco" },
    { kor: "SSG 페이", eng: "SSGpay" },
    { kor: "무통장입금", eng: "deposit" },
  ]

  const findedKoreanPayment = paymentList.find((item) => item.eng === payment)

  return findedKoreanPayment ? findedKoreanPayment.kor : undefined
}

export const formatCheckoutDate = (checkoutDate: string) => {
  if (!checkoutDate) return

  const formattedDate = checkoutDate.replace(/-|:/g, ",").replace(/\s/g, "")

  const [year, month, date, hour, minute] = formattedDate.split(",")

  return { year, month, date, hour, minute }
}

export const formatCheckoutPayment = (payment: string) => {
  const [selectedPayment, creditName, period] = payment.split(" - ")

  return { selectedPayment, creditName, period }
}
