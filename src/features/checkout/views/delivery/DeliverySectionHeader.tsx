"use client"

import Button from "@/features/common/views/Button"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { BsQuestionCircle } from "react-icons/bs"

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
        <Button
          onClick={handleExplanationButtonClick}
          classNames="ml-[5px] text-border"
          content={<BsQuestionCircle />}
        />
      </span>
      <p className="text-[14px]">
        <span className="text-lightRed">*</span> 필수 입력 항목
      </p>
    </header>
  )
}

export default DeliverySectionHeader
