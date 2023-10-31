"use client"

import { ChangeEvent } from "react"
import MyPageWriteTable from "./MyPageWriteTable"
import MyPageRadioInput from "./MyPageRadioInput"

interface IMyPageETCRelationRadioList {
  radioValue: string
  onChangeRadioValue: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const MyPageETCRelationRadioList = ({
  onChangeRadioValue,
  radioValue,
  className,
}: IMyPageETCRelationRadioList) => {
  const etcRelationList = [
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
      currentRadioValue={radioValue}
      label={etcRelationEl.label}
      onChangeRadioValue={onChangeRadioValue}
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
