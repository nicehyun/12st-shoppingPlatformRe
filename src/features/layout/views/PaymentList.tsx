import PaymentButton from "../../checkout/views/PaymentButton"

const PaymentList = () => {
  return (
    <div className="grid grid-cols-4 xl:grid-cols-2 gap-4 mb-[50px] pt-[50px]">
      <PaymentButton
        buttonContent="신용/체크카드"
        paymentButtonValue="credit"
      />
      <PaymentButton buttonContent="토스페이" paymentButtonValue="tosspay" />

      <PaymentButton buttonContent="네이버페이" paymentButtonValue="naverpay" />

      <PaymentButton buttonContent="카카오페이" paymentButtonValue="kakaopay" />

      <PaymentButton buttonContent="삼성페이" paymentButtonValue="samsungpay" />

      <PaymentButton buttonContent="페이코" paymentButtonValue="payco" />

      <PaymentButton buttonContent="SSG 페이" paymentButtonValue="SSGpay" />

      <PaymentButton buttonContent="무통장입금" paymentButtonValue="deposit" />
    </div>
  )
}

export default PaymentList
