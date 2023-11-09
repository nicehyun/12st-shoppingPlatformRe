import { ChangeEvent, KeyboardEvent } from "react"

interface IRadioInput {
  label: string
  id: string
  name: string
  defaultValue: string
  classNames?: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
  peer: string
  peerChecked: { bg: string; borderColor: string }
}

const RadioInput = ({
  label,
  checked,
  defaultValue,
  id,
  name,
  onChange,
  classNames,
  onKeyPress,
  peer,
  peerChecked,
}: IRadioInput) => {
  return (
    <>
      <input
        type="radio"
        checked={checked}
        defaultValue={defaultValue}
        id={id}
        name={name}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={`absolute left-[-9999px] ${peer}`}
      />
      <label
        htmlFor={id}
        className={`${classNames} inline-block mr-[20px] text-[14px] cursor-pointer  before:content-[''] before:mr-[5px] before:inline-block before:w-[10px] before:h-[10px] before:xr-[4px] before:border-border before:border-[1px] before:rounded-full ${peerChecked.bg} ${peerChecked.borderColor}`}
      >
        {label}
      </label>
    </>
  )
}

export default RadioInput
