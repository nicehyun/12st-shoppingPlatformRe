"use client"

import Button from "@/features/common/views/Button"
import useSelectCoupon from "@/features/checkout/hooks/useSelectCoupon"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs"
import CouponSelect from "./CouponSelect"
import Mile from "./Mile"

const CheckoutCouponAndMile = () => {
  const dispatch = useAppDispatch()
  const { selectedCoupon } = useSelectCoupon()

  const [isShowDetail, setIsShowDetail] = useState(true)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

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
    <section className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <span className="flex">
          <h3>쿠폰 / 마일리지</h3>
          <Button
            onClick={showCouponExplanationModal}
            classNames="ml-[5px] text-border"
            content={<BsQuestionCircle />}
          />
        </span>

        <div className="flex items-center">
          <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
            쿠폰 {selectedCoupon ? "적용" : "미적용"} / 0P 사용
          </p>
          <Button
            onClick={toggleShowDetail}
            classNames={`${
              isShowDetail ? "text-border" : "text-black dark:text-white"
            } text-[20px] ml-[10px]`}
            content={isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
          />
        </div>
      </div>

      <div
        className={`opacity-${isShowDetail ? "100" : "0"} ${
          isShowDetail ? "visible max-h-[300px]" : "invisible max-h-0"
        } transition-max-h transition-3`}
      >
        <div className="py-[18px]">
          <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] mb-[10px]">
            보너스 쿠폰
          </p>
          <CouponSelect />
        </div>

        <div className="py-[18px]">
          <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] mb-[10px]">
            마일리지
          </p>

          <Mile />
        </div>
      </div>
    </section>
  )
}

export default CheckoutCouponAndMile
