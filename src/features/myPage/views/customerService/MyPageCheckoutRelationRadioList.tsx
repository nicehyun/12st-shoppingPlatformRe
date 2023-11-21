"use client"

import MyPageWriteTable from "./MyPageWriteTable"
import MyPageRadioInput from "./MyPageRadioInput"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCsType,
  selectSelectedCsType,
} from "@/redux/features/myPageSlice"
import { CsRelationEl } from "../../types/myPage"

const MyPageCheckoutRelationRadioList = () => {
  const dispatch = useAppDispatch()
  const selectedCsType = useAppSelector(selectSelectedCsType)

  const checkoutRelationList: CsRelationEl[] = [
    {
      value: "delivery",
      label: "배송문의",
      peer: "peer/delivery",
      peerChecked: {
        bg: `peer-checked/delivery:before:bg-lightRed`,
        borderColor: `peer-checked/delivery:before:border-lightRed`,
      },
    },
    {
      value: "checkout",
      label: "주문문의",
      peer: "peer/checkout",
      peerChecked: {
        bg: `peer-checked/checkout:before:bg-lightRed`,
        borderColor: `peer-checked/checkout:before:border-lightRed`,
      },
    },
    {
      value: "cancel",
      label: "취소문의",
      peer: "peer/cancel",
      peerChecked: {
        bg: `peer-checked/cancel:before:bg-lightRed`,
        borderColor: `peer-checked/cancel:before:border-lightRed`,
      },
    },
    {
      value: "return",
      label: "반품문의",
      peer: "peer/return",
      peerChecked: {
        bg: `peer-checked/return:before:bg-lightRed`,
        borderColor: `peer-checked/return:before:border-lightRed`,
      },
    },
    {
      value: "change",
      label: "교환문의",
      peer: "peer/change",
      peerChecked: {
        bg: `peer-checked/change:before:bg-lightRed`,
        borderColor: `peer-checked/change:before:border-lightRed`,
      },
    },
    {
      value: "refund",
      label: "환불문의",
      peer: "peer/refund",
      peerChecked: {
        bg: `peer-checked/refund:before:bg-lightRed`,
        borderColor: `peer-checked/refund:before:border-lightRed`,
      },
    },
    {
      value: "deposit",
      label: "입금문의",
      peer: "peer/deposit",
      peerChecked: {
        bg: `peer-checked/deposit:before:bg-lightRed`,
        borderColor: `peer-checked/deposit:before:border-lightRed`,
      },
    },
  ]

  const tableContent = checkoutRelationList.map((checkoutRelationEl) => (
    <MyPageRadioInput
      key={`inquiryCustomerCounselingWhite-radio__${checkoutRelationEl.value}`}
      currentRadioValue={selectedCsType}
      label={checkoutRelationEl.label}
      onChangeRadioValue={() =>
        dispatch(selectCsType(checkoutRelationEl.value))
      }
      peer={checkoutRelationEl.peer}
      peerChecked={checkoutRelationEl.peerChecked}
      value={checkoutRelationEl.value}
    />
  ))

  return (
    <MyPageWriteTable
      tableTitle="구매관련문의"
      tableContent={tableContent}
      isNoneLiTag
    />
  )
}

export default MyPageCheckoutRelationRadioList
