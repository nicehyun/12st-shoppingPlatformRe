"use client"

import MyPageCheckoutRelationRadioList from "./MyPageCheckoutRelationRadioList"
import MyPageGeneralRelationRadioList from "./MyPageGeneralRelationRadioList"
import MyPageETCRelationRadioList from "./MyPageETCRelationRadioList"
import MyPageCutomerCounselingWriteUserInfoList from "./MyPageCutomerCounselingWriteUserInfoList"
import MyPageCustomerCounselingWriteContentList from "./MyPageCustomerCounselingWriteContentList"
import Button from "@/common/views/Button"
import MyPageProductSearch from "./MyPageProductSearch"
import MyPageCheckoutSearch from "./MyPageCheckoutSearch"
import { useAppSelector } from "@/redux/hooks"
import { selectSelectedCsType } from "@/redux/features/myPageSlice"

const MyPageInquiryCustomerCounselingWriteForm = () => {
  const selectedCsType = useAppSelector(selectSelectedCsType)

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
        <MyPageCheckoutRelationRadioList />
        <MyPageGeneralRelationRadioList className="border-border border-t-[1px]" />
        <MyPageETCRelationRadioList className="border-border border-t-[1px]" />

        {checkoutRelationRadioValueList.includes(selectedCsType as string) && (
          <MyPageCheckoutSearch />
        )}
        {selectedCsType === "product" && <MyPageProductSearch />}

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
