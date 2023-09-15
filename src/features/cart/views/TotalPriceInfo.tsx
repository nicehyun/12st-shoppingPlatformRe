"use client"

import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useAppSelector } from "@/redux/hooks"

import TotalPriceList from "./TotalPriceList"

const TotalPriceInfo = () => {
  const checkedProductList = useAppSelector(selectCheckedProductList)

  return (
    <div className="grow max-h-[300px] bg-white sm:mr-[5px] md:mr-[5px] rounded-[5px] shadow border-[1px] border-border py-[30px] px-[20px] text-black">
      <h3 className="mb-[20px] pb-[20px] border-b-[2px] border-black sm:text-[12px] md:text-[14px]">
        결제 예정금액 / 총
        <span className="totalAmount">{checkedProductList.length}</span>개
      </h3>

      <TotalPriceList />
    </div>
  )
}

export default TotalPriceInfo
