import React from "react"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { CheckoutList } from "@/features/checkout/types/checkout"
import { numberToLocaleString } from "@/features/common/utils/price"
import { checkoutTotalPrice } from "../../models/price"
import { parseISOString } from "@/features/checkout/models/checkout"

interface ICheckoutListTableContent {
  checkoutList: CheckoutList
}

const CheckoutListTableContent = ({
  checkoutList,
}: ICheckoutListTableContent) => {
  return (
    <MyPageListContentLayout
      className={`flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border`}
    >
      <MyPageTableContentEl
        content={`${parseISOString(checkoutList?.checkoutDate).year}/${
          parseISOString(checkoutList?.checkoutDate).month
        }/${parseISOString(checkoutList?.checkoutDate).date}`}
        NoCenter
        className="w-3/12"
      />

      <MyPageTableContentEl
        content={`${checkoutList?.checkoutNumber}`}
        NoCenter
        className="truncate-2 w-1/5 break-words mx-[20px]"
      />

      <MyPageTableContentEl
        content={
          <div className={`flex group-hover:text-lightRed `}>
            <span
              className={`block sm:truncate-2 md:truncate-2 truncate-2 xl:mr-[10px]`}
            >
              {checkoutList.productList[0].name}
            </span>
            <span className="flex items-end font-bold whitespace-nowrap">
              {checkoutList.productList.length === 1
                ? ""
                : `외 ${checkoutList.productList.length - 1}개`}
            </span>
          </div>
        }
        NoCenter
        className="w-2/3 md:w-1/3 sm:w-1/4"
      />

      <MyPageTableContentEl
        content={numberToLocaleString(checkoutTotalPrice(checkoutList))}
        NoCenter
        className="text-end w-3/12"
      />
    </MyPageListContentLayout>
  )
}

export default CheckoutListTableContent
