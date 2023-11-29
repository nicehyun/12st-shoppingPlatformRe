"use client"

import BasicModal from "@/features/common/views/BasicModal"
import { selectBasicModalState } from "@/redux/features/modalSlice"
import { useAppSelector } from "@/redux/hooks"
import CollectionOfUserInfoClause from "./clauses/CollectionOfUserInfoClause"
import ProvisionOfUserInfoClause from "./clauses/ProvisionOfUserInfoClause"
import CouponExplanation from "./explanations/CouponExplanation"
import DeliveryExplanation from "./explanations/DeliveryExplanation"
import MileExplanation from "./explanations/MileExplanation"
import {
  PaymentBenefitKBCardExplanation,
  PaymentBenefitLotteCardExplanation,
  PaymentBenefitTosspayExplanation,
  PaymentBenefitWooriCardExplanation,
} from "./explanations/PaymentBenefitExplanation"

const CheckoutBasicModal = () => {
  const { modalContent } = useAppSelector(selectBasicModalState)

  const renderModalContent = () => {
    switch (modalContent) {
      case "DeliveryExplanation":
        return <DeliveryExplanation />
      case "CouponExplanation":
        return <CouponExplanation />
      case "MileExplanation":
        return <MileExplanation />
      case "CollectionOfUserInfoClause":
        return <CollectionOfUserInfoClause />
      case "ProvisionOfUserInfoClause":
        return <ProvisionOfUserInfoClause />
      case "PaymentBenefitLotteCardExplanation":
        return <PaymentBenefitLotteCardExplanation />
      case "PaymentBenefitWooriCardExplanation":
        return <PaymentBenefitWooriCardExplanation />
      case "PaymentBenefitKBCardExplanation":
        return <PaymentBenefitKBCardExplanation />
      case "PaymentBenefitTosspayExplanation":
        return <PaymentBenefitTosspayExplanation />
      default:
        return null
    }
  }

  return <BasicModal>{renderModalContent()}</BasicModal>
}

export default CheckoutBasicModal
