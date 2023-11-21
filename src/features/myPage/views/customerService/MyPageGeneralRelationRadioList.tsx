"use client"

import MyPageWriteTable from "./MyPageWriteTable"
import MyPageRadioInput from "./MyPageRadioInput"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCsType,
  selectSelectedCsType,
} from "@/redux/features/myPageSlice"
import { CsRelationEl } from "../../types/myPage"

interface IMyPageGeneralRelationRadioList {
  className?: string
}

const MyPageGeneralRelationRadioList = ({
  className,
}: IMyPageGeneralRelationRadioList) => {
  const dispatch = useAppDispatch()
  const selectedCsType = useAppSelector(selectSelectedCsType)

  const generalRelationList: CsRelationEl[] = [
    {
      value: "userInfo",
      label: "회원정보문의",
      peer: "peer/userInfo",
      peerChecked: {
        bg: `peer-checked/userInfo:before:bg-lightRed`,
        borderColor: `peer-checked/userInfo:before:border-lightRed`,
      },
    },
    {
      value: "payment",
      label: "결제방법문의",
      peer: "peer/payment",
      peerChecked: {
        bg: `peer-checked/payment:before:bg-lightRed`,
        borderColor: `peer-checked/payment:before:border-lightRed`,
      },
    },
    {
      value: "product",
      label: "상품문의",
      peer: "peer/product",
      peerChecked: {
        bg: `peer-checked/product:before:bg-lightRed`,
        borderColor: `peer-checked/product:before:border-lightRed`,
      },
    },
    {
      value: "couponAndMile",
      label: "쿠폰/마일리지문의",
      peer: "peer/couponAndMile",
      peerChecked: {
        bg: `peer-checked/couponAndMile:before:bg-lightRed`,
        borderColor: `peer-checked/couponAndMile:before:border-lightRed`,
      },
    },
  ]

  const tableContent = generalRelationList.map((generalRelationEl) => (
    <MyPageRadioInput
      key={`inquiryCustomerCounselingWhite-radio__${generalRelationEl.value}`}
      currentRadioValue={selectedCsType}
      label={generalRelationEl.label}
      onChangeRadioValue={() => dispatch(selectCsType(generalRelationEl.value))}
      peer={generalRelationEl.peer}
      peerChecked={generalRelationEl.peerChecked}
      value={generalRelationEl.value}
    />
  ))

  return (
    <MyPageWriteTable
      tableTitle="일반상담문의"
      tableContent={tableContent}
      className={className}
    />
  )
}

export default MyPageGeneralRelationRadioList
