import BasicModal from "@/common/views/BasicModal"
import { useState } from "react"
import PaymentBenefitEl from "./PaymentBenefitEl"
import {
  PaymentBenefitKBCardExplanation,
  PaymentBenefitLotteCardExplanation,
  PaymentBenefitTosspayExplanation,
  PaymentBenefitWooriCardExplanation,
} from "./PaymentBenefitExplanation"

type PaymentBenefitModalValue = {
  id: string
  title: string
  benefitComponents: JSX.Element
} | null

const PaymentBenefit = () => {
  const paymentBenefit = {
    lotteCard: {
      id: "benefit-lotteCart",
      title: "[롯데카드] 14만원 이상 7천원 즉시할인",
      benefitComponents: <PaymentBenefitLotteCardExplanation />,
    },
    wooriCard: {
      id: "benefit-wooriCart",
      title: "[우리카드] 우리페이 12만원 이상 6천원 즉시할인",
      benefitComponents: <PaymentBenefitWooriCardExplanation />,
    },
    KBCard: {
      id: "benefit-KBCart",
      title: "[KB국민카드] KB Pay 12만원 이상 6천원 즉시할인",
      benefitComponents: <PaymentBenefitKBCardExplanation />,
    },
    tosspay: {
      id: "benefit-tosspay",
      title: "[토스페이] 생애 첫결제 1만원 이상 3천 토스페이 포인트 적립",
      benefitComponents: <PaymentBenefitTosspayExplanation />,
    },
  }

  const [paymentBenefitModalValue, setPaymentBenefitModalValue] =
    useState<PaymentBenefitModalValue>(null)
  const [isShowBenefitModal, setIsShowbenefitModal] = useState(false)

  const handlePaymentBenefitModalClick = (
    payment: "lotteCard" | "wooriCard" | "KBCard" | "tosspay"
  ) => {
    const selectedPayment = paymentBenefit[payment]

    setPaymentBenefitModalValue(selectedPayment)
    setIsShowbenefitModal(true)
  }

  const hidePaymentBenefitModal = () => {
    setPaymentBenefitModalValue(null)
    setIsShowbenefitModal(false)
  }

  return (
    <>
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

      <BasicModal
        modalTitle={paymentBenefitModalValue?.title ?? ""}
        isShowModal={isShowBenefitModal}
        hideModal={hidePaymentBenefitModal}
        modalId={`benefit-${paymentBenefitModalValue?.id}`}
      >
        {paymentBenefitModalValue?.benefitComponents}
      </BasicModal>
    </>
  )
}

export default PaymentBenefit
