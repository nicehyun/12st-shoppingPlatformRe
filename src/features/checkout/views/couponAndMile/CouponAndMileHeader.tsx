import { ReactNode } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { showBasicModal } from "@/redux/features/modalSlice"
import CheckoutSectionHeader from "../CheckoutSectionHeader"
import ExplanationButton from "../explanations/ExplanationButton"

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
    <CheckoutSectionHeader>
      <span className="flex">
        <h3>쿠폰 / 마일리지</h3>

        <ExplanationButton
          onClickExplanationButton={showCouponExplanationModal}
        />
      </span>

      {children}
    </CheckoutSectionHeader>
  )
}

export default CouponAndMileHeader
