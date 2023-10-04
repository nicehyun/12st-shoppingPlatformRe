"use client"

import { CSSProperties, ReactNode } from "react"

interface IButton {
  onClick?: () => void
  type?: "button" | "submit"
  content: string | ReactNode
  classNames?: string
  style?: CSSProperties
}

const Button = ({ content, onClick, type = "button", classNames }: IButton) => {
  return (
    <button onClick={onClick} type={type} className={`${classNames}`}>
      {content}
    </button>
  )
}

export default Button
