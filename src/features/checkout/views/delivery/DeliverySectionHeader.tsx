"use client"

import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import ExplanationButton from "../explanations/ExplanationButton"

const DeliverySectionHeader = () => {
  const dispatch = useAppDispatch()

  const handleExplanationButtonClick = () => {
    dispatch(
      showBasicModal({
        modalId: "deliveryExplanation",
        modalTitle: "배송 안내",
        modalContent: "DeliveryExplanation",
      })
    )
  }

  return (
    <header className="flex justify-between py-[18px] font-bold">
      <span className="flex">
        <h3>배송정보</h3>
        <ExplanationButton
          onClickExplanationButton={handleExplanationButtonClick}
        />
      </span>
      <p className="text-[14px]">
        <span className="text-lightRed">*</span> 필수 입력 항목
      </p>
    </header>
  )
}

export default DeliverySectionHeader
