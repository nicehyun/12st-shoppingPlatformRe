import Button from "@/features/common/views/Button"
import { CancelType } from "../../types/myPage"

interface IMyPageCancelTypeButton {
  cancelTypeState: CancelType
  onChangeCancelType: (cancelType: CancelType) => void
  value: CancelType
  content: string
  isEnd?: boolean
}

const MyPageCancelTypeButton = ({
  onChangeCancelType,
  content,
  value,
  cancelTypeState,
  isEnd = false,
}: IMyPageCancelTypeButton) => {
  return (
    <Button
      onClick={() => onChangeCancelType(value)}
      content={content}
      classNames={`${
        cancelTypeState === value
          ? "bg-black dark:bg-white dark:text-black text-white"
          : "border-[1px]"
      } ${isEnd ? "" : "mr-[10px]"} rounded-full py-[5px] px-[10px]`}
    />
  )
}

export default MyPageCancelTypeButton
