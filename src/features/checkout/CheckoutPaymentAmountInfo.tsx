"use client"
import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

const CheckoutPaymentAmountInfo = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <div className="border-t-[2px] border-black">
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
    </div>
  )
}

export default CheckoutPaymentAmountInfo
