import Button from "@/common/views/Button"
import Input from "@/common/views/Input"

//TODO : onClick 타입 수정

interface IMyPageSearchInputAndButton {
  id: string
  placeholder?: string
  buttonContent: string
  onClickSearchButton?: () => void
}

const MyPageSearchInputAndButton = ({
  buttonContent,
  id,
  onClickSearchButton,
  placeholder,
}: IMyPageSearchInputAndButton) => {
  return (
    <div className="flex w-full">
      <Input
        id={id}
        name={id}
        classNames="w-full mr-[20px] flex-grow"
        maxLength={100}
        isReadOnly
        placeholder={placeholder}
      />
      <Button
        onClick={onClickSearchButton}
        content={buttonContent}
        classNames="h-[38px] px-[20px] text-[14px] border-[1px] border-lightRed dark:bg-lightRed dark:text-white text-lightRed rounded-[5px]"
      />
    </div>
  )
}

export default MyPageSearchInputAndButton
