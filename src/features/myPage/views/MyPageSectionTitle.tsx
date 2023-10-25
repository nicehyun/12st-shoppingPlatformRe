import { ReactNode } from "react"

interface IMyPageSectionTitle {
  title: string

  children?: ReactNode
}

const MyPageSectionTitle = ({ title, children }: IMyPageSectionTitle) => {
  return (
    <header className="flex justify-between border-b-black border-b-[4px] dark:border-b-white pb-[20px]">
      <h3 className="text-[24px] sm:text-[18px] md:text-[18px] font-bold">
        {title}
      </h3>

      {children}
    </header>
  )
}

export default MyPageSectionTitle
