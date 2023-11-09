import { ChangeEvent, ReactNode } from "react"

export type InputType = "checkbox" | "text" | "password" | "number" | "tel"

interface IInput {
  type?: InputType
  name: string
  id: string
  classNames?: string
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  isReadOnly?: boolean
  maxLength?: number
  minLength?: number
  children?: ReactNode
  isShowFeedback?: boolean
}

const Input = ({
  type = "text",
  classNames,
  id,
  name,
  placeholder,
  onChange,
  value,
  isReadOnly = false,
  maxLength,
  minLength,
  children,
  onBlur,
  isShowFeedback,
}: IInput) => {
  return (
    <div className={`${classNames} relative h-[38px]`}>
      <input
        type={type}
        name={name}
        id={id}
        className={`bg-white dark:bg-lightBorder text-black px-[10px] h-full w-full rounded-[5px] sm:text-[14px] md:text-[14px] placeholder:text-[14px] sm:placeholder:text-[12px] md:placeholder:text-[12px] blur-lightRed  ${
          isReadOnly && "cursor-default"
        } ${isShowFeedback && "border-error"} ${
          isReadOnly ? "truncate pr-[20px]" : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
        maxLength={maxLength}
        minLength={minLength}
        onBlur={onBlur}
        autoComplete="off"
      />
      {children}
    </div>
  )
}

export default Input
