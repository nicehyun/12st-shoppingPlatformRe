"use client"

import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { ChangeEvent, useState } from "react"
import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const { sessionQuery } = useSessionQuery()

  const [radioValue, setRadioValue] = useState("")
  const handleWriteFromRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value)
  }

  return (
    <form className="mt-[50px] border-t-black boder-b-border border-b-[1px] border-t-[1px]">
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
        </ul>
      </fieldset>
    </form>
  )
}

export default MyPageInquiryCustomerCounselingWriteForm
