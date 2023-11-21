"use client"

import MyPageWriteTable from "./MyPageWriteTable"
import MyPageRadioInput from "./MyPageRadioInput"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  selectCsType,
  selectSelectedCsType,
} from "@/redux/features/myPageSlice"
import { CsRelationEl } from "../../types/myPage"

interface IMyPageETCRelationRadioList {
  className?: string
}

const MyPageETCRelationRadioList = ({
  className,
}: IMyPageETCRelationRadioList) => {
  const dispatch = useAppDispatch()
  const selectedCsType = useAppSelector(selectSelectedCsType)

  const etcRelationList: CsRelationEl[] = [
    {
      value: "system",
      label: "시스템문의",
      peer: "peer/system",
      peerChecked: {
        bg: `peer-checked/system:before:bg-lightRed`,
        borderColor: `peer-checked/system:before:border-lightRed`,
      },
    },
    {
      value: "etc",
      label: "기타문의",
      peer: "peer/etc",
      peerChecked: {
        bg: `peer-checked/etc:before:bg-lightRed`,
        borderColor: `peer-checked/etc:before:border-lightRed`,
      },
    },
  ]

  const tableContent = etcRelationList.map((etcRelationEl, index) => (
    <MyPageRadioInput
      key={`inquiryCustomerCounselingWhite-radio__${etcRelationEl.value}`}
      currentRadioValue={selectedCsType}
      label={etcRelationEl.label}
      onChangeRadioValue={() => dispatch(selectCsType(etcRelationEl.value))}
      peer={etcRelationEl.peer}
      peerChecked={etcRelationEl.peerChecked}
      value={etcRelationEl.value}
    />
  ))

  return (
    <MyPageWriteTable
      tableTitle="기타문의"
      tableContent={tableContent}
      className={className}
    />
  )
}

export default MyPageETCRelationRadioList
