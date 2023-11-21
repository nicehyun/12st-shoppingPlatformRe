"use client"

import { CSSProperties, MouseEventHandler, ReactNode } from "react"

interface IButton {
<<<<<<< HEAD
  onClick?: () => void
=======
  onClick?: MouseEventHandler<HTMLButtonElement>
>>>>>>> 120e7d35f4b4673d70b178580e9b977497e227e3
  type?: "button" | "submit"
  content: string | ReactNode
  classNames?: string
  style?: CSSProperties
  isDisabled?: boolean
  value?: string
}

const Button = ({
  content,
  onClick,
  type = "button",
  classNames,
  isDisabled = false,
  value,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classNames} disabled:cursor-not-allowed disabled:bg-border disabled:text-white disabled:border-border dark:disabled:bg-border`}
      disabled={isDisabled}
      value={value}
    >
      {content}
    </button>
  )
}

export default Button
