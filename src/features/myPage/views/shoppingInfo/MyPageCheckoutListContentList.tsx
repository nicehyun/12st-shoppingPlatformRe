"use client"

import MyPageTableContentEl from "../MyPageTableContentEl"
import { numberToLocaleString } from "@/features/common/utils/price"
import { checkoutTotalPrice } from "../../utils/price"
import MyPageListNoneContents from "../MyPageListNoneContents"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListContentLayout from "../MyPageListContentLayout"
import { parseISOString } from "@/features/checkout/utils/checkout"

const MyPageCheckoutListContentList = () => {
  const { checkoutList, isLoading } = useGetCheckoutListQuery()

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (checkoutList.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <ul>
      {checkoutList?.map((checkoutListEl, index) => (
        <MyPageListContentLayout
          key={`checkoutList-${checkoutList[index]?.checkoutNumber}-${index}`}
          className="cursor-pointer group"
        >
          <MyPageTableContentEl
            content={`${parseISOString(checkoutListEl?.checkoutDate).year}/${
              parseISOString(checkoutListEl?.checkoutDate).month
            }/${parseISOString(checkoutListEl?.checkoutDate).date}`}
            NoCenter
            className="w-3/12"
          />

          <MyPageTableContentEl
            content={`${checkoutListEl?.checkoutNumber}`}
            NoCenter
            className="truncate-2 w-1/5 break-words mx-[20px]"
          />

          <MyPageTableContentEl
            content={
              <div className={`flex group-hover:text-lightRed `}>
                <span
                  className={`block sm:truncate-2 md:truncate-2 truncate-2 xl:mr-[10px]`}
                >
                  {checkoutListEl.productList[0].name}
                </span>
                <span className="flex items-end font-bold whitespace-nowrap">
                  {checkoutListEl.productList.length === 1
                    ? ""
                    : `외 ${checkoutListEl.productList.length - 1}개`}
                </span>
              </div>
            }
            NoCenter
            className="w-2/3 md:w-1/3 sm:w-1/4"
          />

          <MyPageTableContentEl
            content={numberToLocaleString(
              checkoutTotalPrice(checkoutList[index])
            )}
            NoCenter
            className="text-end w-3/12"
          />
        </MyPageListContentLayout>
      ))}
    </ul>
  )
}

export default MyPageCheckoutListContentList
