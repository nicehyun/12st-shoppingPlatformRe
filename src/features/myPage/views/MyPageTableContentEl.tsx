import { ReactNode } from "react"

interface IMyPageTableContentEl {
  content: ReactNode
  className?: string
  NoCenter?: boolean
}

const MyPageTableContentEl = ({
  content,
  className,
  NoCenter = false,
}: IMyPageTableContentEl) => {
  return (
    <span
      className={`${className} block ${NoCenter ? "my-auto" : "flexCenter"}`}
    >
      {content}
    </span>
  )
}

export default MyPageTableContentEl
