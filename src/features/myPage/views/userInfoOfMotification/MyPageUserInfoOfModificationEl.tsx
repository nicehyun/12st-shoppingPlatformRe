import { ReactNode } from "react"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"

interface IMyPageUserInfoOfModificationEl {
  title: string
  className?: string
  modificationContent: ReactNode
}

const MyPageUserInfoOfModificationEl = ({
  title,
  className,
  modificationContent,
}: IMyPageUserInfoOfModificationEl) => {
  return (
    <li className={`${className} py-[40px] `}>
      <div className="w-[400px] md:w-full sm:w-full">
        <MyPageSectionSubTitle subtitle={title}>
          {modificationContent}
        </MyPageSectionSubTitle>
      </div>
    </li>
  )
}

export default MyPageUserInfoOfModificationEl
