"use client"

import {
  SelectedCheckoutInfo,
  selectCheckoutInfo,
} from "@/redux/features/myPageSlice"
import useCheckoutNumberToProductInfoPair from "../../hooks/useCheckoutNumberToProductInfoPair"
import { useAppDispatch } from "@/redux/hooks"
import { hideBasicModal } from "@/redux/features/modalSlice"
import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListNoneContents from "../MyPageListNoneContents"
import { parseISOString } from "@/features/checkout/utils/checkout"

const MyPageCheckoutNumberToCheckoutPairList = () => {
  const dispatch = useAppDispatch()

  const { checkoutNumberToCheckoutInfoPairList, isLoading } =
    useCheckoutNumberToProductInfoPair()

  const handleCheckoutInfoSelect = (checkoutInfo: SelectedCheckoutInfo) => {
    dispatch(selectCheckoutInfo(checkoutInfo))
    dispatch(hideBasicModal())
  }

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (checkoutNumberToCheckoutInfoPairList.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <ul>
      {checkoutNumberToCheckoutInfoPairList.map(
        (checkoutNumberToCheckoutInfoPair, index) => (
          <MyPageListContentLayout
            key={`checkoutNumberToCheckoutInfoPair__${checkoutNumberToCheckoutInfoPair.product.id}-${index}`}
            onClick={() =>
              handleCheckoutInfoSelect(checkoutNumberToCheckoutInfoPair)
            }
            className="group hover:cursor-pointer"
          >
            <MyPageTableContentEl
              content={checkoutNumberToCheckoutInfoPair.checkoutNumber ?? ""}
              className="break-words group-hover:text-lightRed w-1/4"
            />

            <MyPageTableContentEl
              className="w-1/4 text-lightBlack"
              content={`${
                parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate)
                  .year
              }-${
                parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate)
                  .month
              }-${
                parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate)
                  .date
              }`}
            />
            <MyPageTableContentEl
              content={checkoutNumberToCheckoutInfoPair.product.name}
              className="truncate-2 w-1/2"
              NoCenter
            />
          </MyPageListContentLayout>
        )
      )}
    </ul>
  )
}

export default MyPageCheckoutNumberToCheckoutPairList
