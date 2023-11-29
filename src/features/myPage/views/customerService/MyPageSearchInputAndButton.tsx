import Button from "@/features/common/views/Button"
import Input from "@/features/common/views/Input"
import { ChangeEvent, ReactNode } from "react"

interface IMyPageSearchInputAndButton {
  id: string
  placeholder?: string
  buttonContent: ReactNode
  onClickSearchButton: () => void
  searchInputValue: string
  onChangeSearchInputValue?: (event: ChangeEvent<HTMLInputElement>) => void
  isReadOnly?: boolean
  isDisabled?: boolean
}

const MyPageSearchInputAndButton = ({
  buttonContent,
  id,
  onClickSearchButton,
  placeholder,
  searchInputValue,
  isReadOnly = true,
  onChangeSearchInputValue,
  isDisabled,
}: IMyPageSearchInputAndButton) => {
  return (
    <div className="flex w-full">
      <Input
        id={id}
        name={id}
        classNames="w-full mr-[20px] flex-grow"
        maxLength={100}
        isReadOnly={isReadOnly}
        placeholder={placeholder}
        value={searchInputValue}
        onChange={onChangeSearchInputValue}
      />
      <Button
        onClick={onClickSearchButton}
        content={buttonContent}
        isDisabled={isDisabled}
        classNames="h-[38px] w-[140px] text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px]"
      />
    </div>
  )
}

export default MyPageSearchInputAndButton
