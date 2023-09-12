import Input from "@/common/views/Input"
import { ReactNode } from "react"
import CheckoutFeedback from "../auth/signUp/views/SignUpFeedback"

interface ICheckoutInput {
  isRequired?: boolean
  label: string
  id: string
  children?: ReactNode
  errorFeedbackMsg?: string
  inputState?: {
    value?: string
    handleValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleInputBlur?: () => void
    hasError?: boolean
    isValid?: boolean
  }
  classNames?: string
}

const CheckoutInputLayout = ({
  isRequired = false,
  label,
  id,
  inputState,
  errorFeedbackMsg,
  children,
  classNames,
}: ICheckoutInput) => {
  return (
    <>
      <div
        className={`flex items-center mb-[${
          inputState?.hasError ? "0px" : "20px"
        }]`}
      >
        <label
          htmlFor={id}
          className="min-w-[100px] sm:text-[12px] md:text-[14px]"
        >
          {label} {isRequired && <span className="text-lightRed">*</span>}
        </label>

        {children ? (
          children
        ) : (
          <Input
            id={id}
            name={id}
            type="text"
            classNames={`${classNames} w-full max-w-[500px] h-[50px] sm:h-[40px] md:h-[44px]`}
            value={inputState?.value}
            onChange={inputState?.handleValueChange}
            onBlur={inputState?.handleInputBlur}
            isShowFeedback={!!errorFeedbackMsg}
          />
        )}
      </div>
      {inputState?.hasError && errorFeedbackMsg && (
        <CheckoutFeedback
          content={errorFeedbackMsg}
          classNames="ml-[100px] mb-[10px] mt-[5px]"
        />
      )}
    </>
  )
}

export default CheckoutInputLayout
