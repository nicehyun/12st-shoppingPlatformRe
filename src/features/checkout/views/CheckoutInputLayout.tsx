import Input, { InputType } from "@/features/common/views/Input"
import Feedback from "@/features/common/views/Feedback"
import { ReactNode } from "react"

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
  inputType?: InputType
  inputMaxLength?: number
}

const CheckoutInputLayout = ({
  isRequired = false,
  label,
  id,
  inputState,
  errorFeedbackMsg,
  children,
  classNames,
  inputType = "text",
  inputMaxLength,
}: ICheckoutInput) => {
  return (
    <>
      <div
        className={`flex items-start mb-[${
          inputState?.hasError ? "0px" : "20px"
        }] mr-0`}
      >
        <label
          htmlFor={id}
          className="min-w-[100px] sm:text-[12px] md:text-[14px] sm:pt-[6px] md:pt-[8px] pt-[11px]"
        >
          {label} {isRequired && <span className="text-lightRed">*</span>}
        </label>

        {children ? (
          children
        ) : (
          <Input
            id={id}
            name={id}
            type={inputType}
            classNames={`${classNames} w-full max-w-[500px] h-[50px] sm:h-[40px] md:h-[44px] text-black`}
            value={inputState?.value}
            onChange={inputState?.handleValueChange}
            onBlur={inputState?.handleInputBlur}
            isShowFeedback={inputState?.hasError}
            maxLength={inputMaxLength}
          />
        )}
      </div>
      {inputState?.hasError && errorFeedbackMsg && (
        <Feedback
          content={errorFeedbackMsg}
          classNames="ml-[100px] mb-[10px] mt-[5px]"
        />
      )}
    </>
  )
}

export default CheckoutInputLayout
