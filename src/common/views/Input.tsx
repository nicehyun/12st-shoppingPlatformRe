import { ReactNode } from "react"

export type InputType = "checkbox" | "text" | "password" | "number" | "tel"

// TODO : value, onChange 타입 수정 (?)
interface IInput {
  type: InputType
  name: string
  id: string
  classNames?: string
  placeholder?: string
  value?: string
  onChange?: () => {}
  isReadOnly?: boolean
  maxLength?: number
  minLength?: number
  children?: ReactNode
}

const Input = ({
  type,
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
}: IInput) => {
  return (
    <div
      className={`${classNames} relative h-[38px] max-w-[400px] md:max-w-[400px] sm:-[250px]`}
    >
      <input
        type={type}
        name={name}
        id={id}
        className={`px-[10px] h-full w-full rounded-[5px] ${
          isReadOnly && "cursor-default"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
        maxLength={maxLength}
        minLength={minLength}
      />
      {children}
    </div>
  )
}

export default Input
