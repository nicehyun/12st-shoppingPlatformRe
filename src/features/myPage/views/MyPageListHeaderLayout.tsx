import { ReactNode } from "react"

interface IMyPageListHeaderLayout {
  children: ReactNode
  isTopBorder?: boolean
}

const MyPageListHeaderLayout = ({
  children,
  isTopBorder = true,
}: IMyPageListHeaderLayout) => {
  return (
    <div
      className={`flex ${
        isTopBorder ? "border-t-[1px]" : ""
      } font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]`}
    >
      {children}
    </div>
  )
}

export default MyPageListHeaderLayout
