"use client"

import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { ChangeEvent, useState } from "react"
import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"
import MyPageCutomerCounselingWriteUserInfoList from "./MyPageCutomerCounselingWriteUserInfoList"
import MyPageCustomerCounselingWriteContentList from "./MyPageCustomerCounselingWriteContentList"
import Button from "@/common/views/Button"
import MyPageProductSearch from "./MyPageProductSearch"
import MyPageCheckoutSearch from "./MyPageCheckoutSearch"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const { sessionQuery } = useSessionQuery()

  const [radioValue, setRadioValue] = useState("")
  const handleWriteFromRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value)
  }

  const checkoutRelationRadioValueList = [
    "delivery",
    "checkout",
    "cancel",
    "return",
    "change",
    "refund",
    "deposit",
  ]

  return (
    <form className="mt-[50px] border-t-[1px] w-full">
      <ul className="">
        <MyPageCheckoutRelationRadioList
          radioValue={radioValue}
          onChangeRadioValue={handleWriteFromRadioChange}
        />
        <MyPageGeneralRelationRadioList
          radioValue={radioValue}
          onChangeRadioValue={handleWriteFromRadioChange}
          className="border-border border-t-[1px]"
        />
        <MyPageETCRelationRadioList
          radioValue={radioValue}
          onChangeRadioValue={handleWriteFromRadioChange}
          className="border-border border-t-[1px]"
        />

        {checkoutRelationRadioValueList.includes(radioValue) && (
          <MyPageCheckoutSearch />
        )}
        {radioValue === "product" && <MyPageProductSearch />}

        <MyPageCutomerCounselingWriteUserInfoList />
        <MyPageCustomerCounselingWriteContentList />
      </ul>

      <div className="text-center">
        <Button
          content="등록하기"
          classNames="tracking-[5px] py-[10px] px-[40px] mt-[50px] sm:text-[14px] md:text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px] tr"
        />
      </div>
    </form>
  )
}

export default MyPageInquiryCustomerCounselingWriteForm
