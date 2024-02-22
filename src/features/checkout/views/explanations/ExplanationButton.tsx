import Button from "@/features/common/views/Button"
import { BsQuestionCircle } from "react-icons/bs"

interface IExplanationButton {
  onClickExplanationButton: () => void
}

const ExplanationButton = ({
  onClickExplanationButton,
}: IExplanationButton) => {
  return (
    <Button
      onClick={onClickExplanationButton}
      classNames="ml-[5px] text-border"
      content={<BsQuestionCircle />}
    />
  )
}

export default ExplanationButton
