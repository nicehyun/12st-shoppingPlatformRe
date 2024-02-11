import Input from "@/features/common/views/Input"
import LoadingButton from "@/features/common/views/LoadingButton"
import { ChangeEvent, ReactNode } from "react"

interface ISearchInputAndButton {
  id: string
  placeholder?: string
  buttonContent: ReactNode
  onClickSearchButton: () => void
  searchInputValue: string
  onChangeSearchInputValue?: (event: ChangeEvent<HTMLInputElement>) => void
  isReadOnly?: boolean
  isLoading: boolean
}

const SearchInputAndButton = ({
  buttonContent,
  id,
  onClickSearchButton,
  placeholder,
  searchInputValue,
  isReadOnly = true,
  onChangeSearchInputValue,
  isLoading,
}: ISearchInputAndButton) => {
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

      <LoadingButton
        onClick={onClickSearchButton}
        content={buttonContent}
        isLoading={isLoading}
        className="h-[38px] w-[140px] text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px]"
      />
    </div>
  )
}

export default SearchInputAndButton
