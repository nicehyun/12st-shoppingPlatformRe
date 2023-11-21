import { ReactNode } from "react"

interface IMyPageListHeaderLayout {
  children: ReactNode
  className?: string
}

const MyPageListHeaderLayout = ({
  children,
  className,
}: IMyPageListHeaderLayout) => {
  return (
    <div
      className={`${className} flex font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]`}
    >
      {children}
    </div>
  )
}

export default MyPageListHeaderLayout
