import Button from "@/features/common/views/Button"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

interface IArrowToggleButton {
  isShowDetail: boolean
  toggleShowDetail: () => void
}

const ArrowToggleButton = ({
  isShowDetail,
  toggleShowDetail,
}: IArrowToggleButton) => {
  return (
    <Button
      onClick={toggleShowDetail}
      classNames={`${
        isShowDetail ? "text-border" : "text-black dark:text-white"
      } text-[20px] ml-[10px]`}
      content={isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
    />
  )
}

export default ArrowToggleButton
