"use client"

import CheckoutRelationRadioList from "./CheckoutRelationRadioList"
import GeneralRelationRadioList from "./GeneralRelationRadioList"
import ETCRelationRadioList from "./ETCRelationRadioList"
import CustomerCounselingWriteContentList from "./CustomerCounselingWriteContentList"
import ProductSearch from "./ProductSearch"
import CheckoutSearch from "./CheckoutSearch"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { resetCsType, selectSelectedCsType } from "@/redux/features/myPageSlice"
import CustomerCounselingWriteUserInfoList from "./CustomerCounselingWriteUserInfoList"
import { useEffect } from "react"
import { useCustomerCounselingWriteSubmitMutation } from "../../hooks/useCustomerCounselingWriteSubmitMutation"
import LoadingButton from "@/features/common/views/LoadingButton"

const InquiryCustomerCounselingWriteForm = () => {
  const {
    customerCounselingWriteSubmitMutateAsync,
    isLoading,
    checkoutRelationRadioValueList,
  } = useCustomerCounselingWriteSubmitMutation()

  const selectedCsType = useAppSelector(selectSelectedCsType)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetCsType())
    }
  }, [])

  return (
    <form
      onSubmit={customerCounselingWriteSubmitMutateAsync}
      className="mt-[50px] border-t-[1px] w-full"
    >
      <ul>
        <CheckoutRelationRadioList />

        <GeneralRelationRadioList className="border-border border-t-[1px]" />
        <ETCRelationRadioList className="border-border border-t-[1px]" />

        {checkoutRelationRadioValueList.includes(selectedCsType as string) && (
          <CheckoutSearch />
        )}
        {selectedCsType === "product" && <ProductSearch />}

        <CustomerCounselingWriteUserInfoList />

        <CustomerCounselingWriteContentList />
      </ul>

      <div className="text-center">
        <LoadingButton
          type="submit"
          content="등록하기"
          isLoading={isLoading}
          className="tracking-[5px] h-[50px] w-[140px] mt-[50px] sm:text-[14px] md:text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px] tr"
        />
      </div>
    </form>
  )
}

export default InquiryCustomerCounselingWriteForm
