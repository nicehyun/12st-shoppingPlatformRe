import Input, { InputType } from "@/features/common/views/Input"
import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

interface IDeliveryInfoInput {
  id: string
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
  placeholder?: string
  isLoading?: boolean
}

const DeliveryInfoInput = ({
  id,
  inputType,
  classNames,
  inputState,
  inputMaxLength,
  placeholder,
  isLoading = false,
}: IDeliveryInfoInput) => {
  if (isLoading) {
    return (
      <SpanSkeletonUI className="w-full max-w-[500px] h-[50px] sm:h-[40px] md:h-[44px]" />
    )
  }

  return (
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
      placeholder={placeholder}
    />
  )
}

export default DeliveryInfoInput
