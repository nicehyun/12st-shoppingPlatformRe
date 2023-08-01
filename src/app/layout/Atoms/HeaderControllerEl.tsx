import { ReactNode } from "react"

interface IHeaderControllerEl {
  classNames?: string
  title?: string
  icon: ReactNode
  isShowPromotion: boolean
}

const HeaderControllerEl = ({
  classNames,
  title,
  icon,
  isShowPromotion,
}: IHeaderControllerEl) => {
  return (
    <li className={`relative ${classNames} cursor-pointer  w-[100px]`}>
      <button
        className={`absolute ${
          isShowPromotion
            ? "visible opacity-100"
            : "invisible opacity-0 -translate-x-6"
        } flexCenter inset-0 hover:text-lightRed transition-5`}
      >
        {icon}
      </button>
      <button
        className={`absolute ${
          !isShowPromotion
            ? "visible opacity-100"
            : "invisible opacity-0 translate-x-6"
        } flexCenter inset-0 text-[13px] hover:text-lightRed transition-5`}
      >
        {title}
      </button>
    </li>
  )
}

export default HeaderControllerEl
