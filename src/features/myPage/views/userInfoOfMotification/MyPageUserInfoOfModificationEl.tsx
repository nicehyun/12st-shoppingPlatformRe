import { ReactNode } from "react"

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
    <li className={`${className} py-[20px] sm:py-[40px] md:py-[40px]`}>
      <div className="w-[400px] md:w-full sm:w-full">
        <h4 className="font-bold mb-[20px] text-[18px]">{title}</h4>
        {modificationContent}
      </div>
    </li>
  )
}

export default MyPageUserInfoOfModificationEl
