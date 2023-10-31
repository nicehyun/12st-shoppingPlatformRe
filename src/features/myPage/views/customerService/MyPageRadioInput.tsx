import { handleKeyPress } from "@/common/utils/event"
import RadioInput from "@/common/views/RadioInput"
import { ChangeEvent } from "react"

interface IMyPageRadioInput {
  currentRadioValue: string
  onChangeRadioValue: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  label: string
  peer: string
  peerChecked: {
    bg: string
    borderColor: string
  }
  className?: string
}

const MyPageRadioInput = ({
  label,
  peer,
  peerChecked,
  value,
  currentRadioValue,
  onChangeRadioValue,
  className,
}: IMyPageRadioInput) => {
  return (
    <RadioInput
      defaultValue={value}
      label={label}
      id={`inquiryCustomerCounselingWrite-radio__${value}`}
      name={`inquiryCustomerCounselingWrite-radio__${value}`}
      checked={currentRadioValue === value}
      onChange={onChangeRadioValue}
      onKeyPress={handleKeyPress}
      peer={peer}
      peerChecked={peerChecked}
      classNames={`${className} w-[129px]`}
    />
  )
}

export default MyPageRadioInput
