import Button from "@/features/common/views/Button"
import { ReactNode } from "react"

interface IHeaderControllerEl {
  classNames?: string
  title?: string
  icon: ReactNode
  isShowPromotion: boolean
  onClick: () => void
}

const HeaderControllerEl = ({
  classNames,
  title,
  icon,
  isShowPromotion,
  onClick,
}: IHeaderControllerEl) => {
  return (
    <li
      className={`relative ${classNames} cursor-pointer  w-[100px] sm:w-[60px] md:w-[80px] h-[30px]`}
    >
      <Button
        onClick={onClick}
        classNames={`absolute ${
          !isShowPromotion
            ? "visible opacity-100"
            : "invisible opacity-0 -translate-x-6"
        } flexCenter inset-0 hover:text-lightRed transition-5 sm:text-[14px] md:text-[14px]`}
        content={icon}
      />
      <Button
        onClick={onClick}
        classNames={`absolute ${
          isShowPromotion
            ? "visible opacity-100"
            : "invisible opacity-0 translate-x-6"
        } flexCenter inset-0 text-[12px] hover:text-lightRed transition-5`}
        content={title}
      />
    </li>
  )
}

export default HeaderControllerEl
