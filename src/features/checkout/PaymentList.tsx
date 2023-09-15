import PaymentButton, { Payment } from "./PaymentButton"

interface IPaymentList {
  payment: {
    value: string
    label: string
  }

  onChangePayment: (paymentValue: Payment, selecedPayment: string) => void
}

const PaymentList = ({ payment, onChangePayment }: IPaymentList) => {
  return (
    <div className="grid grid-cols-4 xl:grid-cols-2 gap-4 mb-[20px] pt-[50px]">
      <PaymentButton
        buttonContent="신용/체크카드"
        paymentButtonValue="credit"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />
      <PaymentButton
        buttonContent="토스페이"
        paymentButtonValue="tosspay"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="네이버페이"
        paymentButtonValue="naverpay"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="카카오페이"
        paymentButtonValue="kakaopay"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="삼성페이"
        paymentButtonValue="samsungpay"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="페이코"
        paymentButtonValue="payco"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="SSG 페이"
        paymentButtonValue="SSGpay"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />

      <PaymentButton
        buttonContent="무통장입금"
        paymentButtonValue="deposit"
        onChangePaymentValue={onChangePayment}
        paymentValue={payment.value}
      />
    </div>
  )
}

export default PaymentList
