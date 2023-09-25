import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import PaymentBenefitEl from "./PaymentBenefitEl"

const PaymentBenefit = () => {
  const paymentBenefit = {
    lotteCard: {
      id: "benefit-lotteCart",
      title: "[롯데카드] 14만원 이상 7천원 즉시할인",
      benefitComponent: "PaymentBenefitLotteCardExplanation",
    },
    wooriCard: {
      id: "benefit-wooriCart",
      title: "[우리카드] 우리페이 12만원 이상 6천원 즉시할인",
      benefitComponent: "PaymentBenefitWooriCardExplanation",
    },
    KBCard: {
      id: "benefit-KBCart",
      title: "[KB국민카드] KB Pay 12만원 이상 6천원 즉시할인",
      benefitComponent: "PaymentBenefitKBCardExplanation",
    },
    tosspay: {
      id: "benefit-tosspay",
      title: "[토스페이] 생애 첫결제 1만원 이상 3천 토스페이 포인트 적립",
      benefitComponent: "PaymentBenefitTosspayExplanation",
    },
  }

  const dispatch = useAppDispatch()

  const handlePaymentBenefitModalClick = (
    payment: "lotteCard" | "wooriCard" | "KBCard" | "tosspay"
  ) => {
    const selectedPayment = paymentBenefit[payment]

    dispatch(
      showBasicModal({
        modalId: selectedPayment.id,
        modalTitle: selectedPayment.title,
        modalContent: selectedPayment.benefitComponent,
      })
    )
  }

  return (
    <ul className="bg-lightBorder p-[14px] mb-[50px]">
      <PaymentBenefitEl
        benefitTitle="[롯데카드] 14만원 이상 7천원 즉시할인"
        classNames="mb-[10px]"
        onClickBenefit={() => handlePaymentBenefitModalClick("lotteCard")}
      />
      <PaymentBenefitEl
        benefitTitle="[우리카드] 우리페이 12만원 이상 6천원 즉시할인"
        classNames="mb-[10px]"
        onClickBenefit={() => handlePaymentBenefitModalClick("wooriCard")}
      />
      <PaymentBenefitEl
        benefitTitle="[KB국민카드] KB Pay 12만원 이상 6천원 즉시할인"
        classNames="mb-[10px]"
        onClickBenefit={() => handlePaymentBenefitModalClick("KBCard")}
      />
      <PaymentBenefitEl
        benefitTitle="[토스페이] 생애 첫결제 1만원 이상 3천 토스페이 포인트 적립"
        onClickBenefit={() => handlePaymentBenefitModalClick("tosspay")}
      />
    </ul>
  )
}

export default PaymentBenefit
