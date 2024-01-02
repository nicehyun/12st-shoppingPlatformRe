import { MdError } from "react-icons/md"

interface IError {
  className?: string
  errorMessage: string
}

const Error = ({ errorMessage, className }: IError) => {
  return (
    <div
      className={`${className} flexCenter bg-white text-error h-[500px] text-[20px] md:text-[16px] sm:text-[16px]`}
    >
      <span className="mr-[10px]">
        <MdError />
      </span>
      {errorMessage}
    </div>
  )
}

export default Error
