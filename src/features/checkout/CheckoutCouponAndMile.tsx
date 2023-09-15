"use client"

import BasicModal from "@/common/views/BasicModal"
import { selectSeletedCoupon } from "@/redux/features/couponSlice"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs"
import CouponExplanation from "./CouponExplanation"
import CouponSelect from "./CouponSelect"
import MileExplanation from "./MileExplanation"

const CheckoutCouponAndMile = () => {
  const seletedCoupon = useAppSelector(selectSeletedCoupon)
  console.log(seletedCoupon)
  const [isShowCouponExplanationModal, setIsShowCouponExplanationModal] =
    useState(false)
  const [isShowMileExplanationModal, setIsShowMileExplanationModal] =
    useState(false)
  const [isShowDetail, setIsShowDetail] = useState(false)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  const showCouponExplanationModal = () => {
    setIsShowCouponExplanationModal(true)
  }

  const hideCouponExplanationModal = () => {
    setIsShowCouponExplanationModal(false)
  }

  const showMileExplanationModal = () => {
    setIsShowCouponExplanationModal(true)
  }

  const hideMileExplanationModal = () => {
    setIsShowCouponExplanationModal(false)
  }
  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <span className="flex">
          <h3>쿠폰 / 마일리지</h3>
          <button
            onClick={showCouponExplanationModal}
            type="button"
            className="ml-[5px] text-border"
          >
            <BsQuestionCircle />
          </button>
        </span>

        <div className="flex">
          <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
            쿠폰 {seletedCoupon ? "적용" : "미적용"} / 0P 사용
          </p>
          <button
            onClick={toggleShowDetail}
            type="button"
            className={`${
              isShowDetail ? "text-border" : "text-black dark:text-white"
            } text-[20px] ml-[10px]`}
          >
            {isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
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
          <div className="flex">
            <div className="border-[1px] border-border py-[14px] px-[20px] grow">
              0
            </div>

            <button className="bg-border w-[100px] ml-[20px]">모두 사용</button>
          </div>

          <div className="flex mt-[10px]">
            <p>
              사용 가능 0P / <span className="text-lightGray">보유 0P</span>
            </p>
            <button
              onClick={showMileExplanationModal}
              type="button"
              className="ml-[5px] text-border"
            >
              <BsQuestionCircle />
            </button>
          </div>
        </div>
      </div>

      <BasicModal
        modalTitle="마일리지 사용 안내"
        modalId="couponExplanation"
        isShowModal={isShowCouponExplanationModal}
        hideModal={hideMileExplanationModal}
      >
        <MileExplanation />
      </BasicModal>

      <BasicModal
        modalTitle="쿠폰 안내"
        modalId="couponExplanation"
        isShowModal={isShowMileExplanationModal}
        hideModal={hideCouponExplanationModal}
      >
        <CouponExplanation />
      </BasicModal>
    </div>
  )
}

export default CheckoutCouponAndMile
