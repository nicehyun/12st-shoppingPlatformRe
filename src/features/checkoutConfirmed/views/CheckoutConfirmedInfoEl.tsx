import { ReactNode } from "react"

interface ICheckoutConfirmedInfoEl {
  title: string
  children: ReactNode
  isEndEl?: boolean
}
const CheckoutConfirmedInfoEl = ({
  children,
  title,
  isEndEl = false,
}: ICheckoutConfirmedInfoEl) => {
  return (
    <div
      className={`flex p-[20px] ${
        !isEndEl ? "border-b-[1px] border-border" : ""
      }`}
    >
      <h2 className="w-1/4 text-gray md:text-[14px] sm:text-[14px]">{title}</h2>

      <div className="w-3/4 flex flex-col md:text-[14px] sm:text-[14px]">
        {children}
      </div>
    </div>
  )
}

export default CheckoutConfirmedInfoEl
