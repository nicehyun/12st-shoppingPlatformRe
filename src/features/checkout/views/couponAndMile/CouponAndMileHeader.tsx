import Button from "@/features/common/views/Button"
import React, { ReactNode } from "react"
import SelectedCouponInfo from "./SelectedCouponAndMileInfo"
import { BsQuestionCircle } from "react-icons/bs"
import { useAppDispatch } from "@/redux/hooks"
import { showBasicModal } from "@/redux/features/modalSlice"

interface ICouponAndMileHeader {
  children: ReactNode
}

const CouponAndMileHeader = ({ children }: ICouponAndMileHeader) => {
  const dispatch = useAppDispatch()

  const showCouponExplanationModal = () => {
    dispatch(
      showBasicModal({
        modalId: "couponExplanation",
        modalTitle: "쿠폰 안내",
        modalContent: "CouponExplanation",
      })
    )
  }

  return (
    <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
      <span className="flex">
        <h3>쿠폰 / 마일리지</h3>
        <Button
          onClick={showCouponExplanationModal}
          classNames="ml-[5px] text-border"
          content={<BsQuestionCircle />}
        />
      </span>

      {children}
    </div>
  )
}

export default CouponAndMileHeader
