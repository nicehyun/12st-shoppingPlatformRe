"use client"
interface IButton {
  onClick: () => void
  type?: "button" | "submit"
  content: string
  classNames?: string
}

const Button = ({ content, onClick, type = "button", classNames }: IButton) => {
  return (
    <button onClick={onClick} type={type} className={`${classNames}`}>
      {content}
    </button>
  )
}

export default Button
