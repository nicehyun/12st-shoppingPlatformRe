import { ReactNode } from "react"

interface IMyPageListContentLayout {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const MyPageListContentLayout = ({
  children,
  className,
  onClick,
}: IMyPageListContentLayout) => {
  return (
    <li
      onClick={onClick}
      className={`${className} flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border`}
    >
      {children}
    </li>
  )
}

export default MyPageListContentLayout
