"use client"

import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { ChangeEvent, useState } from "react"
import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"
import MyPageCutomerCounselingWriteUserInfoList from "./MyPageCutomerCounselingWriteUserInfoList"
import MyPageCustomerCounselingWriteContentList from "./MyPageCustomerCounselingWriteContentList"
import Button from "@/common/views/Button"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const { sessionQuery } = useSessionQuery()

  const [radioValue, setRadioValue] = useState("")
  const handleWriteFromRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value)
  }

  return (
    <form className="mt-[50px] border-t-[1px]">
      <fieldset>
        <legend className="absolute left-[-9999px]">1:1 문의작성</legend>

        <ul>
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

          <MyPageCutomerCounselingWriteUserInfoList />
          <MyPageCustomerCounselingWriteContentList />
        </ul>
      </fieldset>

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
