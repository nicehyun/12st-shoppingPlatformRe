import { AiOutlineExclamationCircle } from "react-icons/ai"

interface IFeedback {
  isValid?: boolean
  content: string
}

const Feedback = ({ content, isValid = false }: IFeedback) => {
  return (
    <p
      className={`flex items-center mt-[10px] max-w-[400px] text-[12px] ${
        isValid ? "text-success" : "text-error"
      }`}
    >
      <span className="mr-[5px]">
        <AiOutlineExclamationCircle />
      </span>{" "}
      {content}
    </p>
  )
}

export default Feedback
