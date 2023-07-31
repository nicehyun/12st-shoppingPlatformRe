import { ReactNode } from "react"

interface IHeaderControllerEl {
  classNames?: string
  title: string
  icon: ReactNode
  titleRef: (refEl: HTMLButtonElement) => void
  iconRef: (refEl: HTMLButtonElement) => void
}

const HeaderControllerEl = ({
  classNames,
  title,
  icon,
  iconRef,
  titleRef,
}: IHeaderControllerEl) => {
  return (
    <li
      className={`relative ${classNames} flex items-center cursor-pointer`}
      style={{
        transition: "0.5s",
      }}
    >
      <button className="inset-0" ref={iconRef}>
        {icon}
      </button>
      <button ref={titleRef} className="text-[13px]">
        {title}
      </button>
    </li>
  )
}

export default HeaderControllerEl
