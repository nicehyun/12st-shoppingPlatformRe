"use client"
import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

const CheckoutPaymentAmountInfo = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <div className="border-y-2 border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제금액</h3>

        <div className="flex">
          <p className="text-[18px] text-lightRed">69900원</p>
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
          isShowDetail ? "visible max-h-[500px]" : "invisible max-h-0"
        } transition-max-h transition-3`}
      >
        <div className="pt-[20px] mb-[10px] flex justify-between">
          <span>총 상품금액</span>
          <span>69900원</span>
        </div>

        <div className="mb-[10px] flex justify-between">
          <span>쿠폰 사용</span>
          <span>0원</span>
        </div>

        <div className="mb-[10px] flex justify-between">
          <span>마일리지 사용</span>
          <span>0원</span>
        </div>

        <div className="mb-[10px] flex justify-between">
          <span>배송비</span>
          <span>0원</span>
        </div>

        <div className="border-t-[1px] border-border py-[20px] flex justify-between">
          <span>총 결제금액</span>
          <span>69900원</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPaymentAmountInfo
