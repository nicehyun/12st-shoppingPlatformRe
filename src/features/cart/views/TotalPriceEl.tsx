import { ReactNode } from "react"

interface ITotalPriceEl {
  individualTitle: string
  icon?: ReactNode
  isFinalPrice?: boolean
  price: number
}

const TotalPriceEl = ({
  icon,
  isFinalPrice,
  price,
  individualTitle,
}: ITotalPriceEl) => {
  return (
    <div className="flex justify-between mb-[10px] items-center">
      <span className="text-[14px]">{individualTitle}</span>
      <span
        className={`${
          isFinalPrice
            ? "text-lightRed font-bold text-[22px]"
            : "flex items-center"
        } tracking-[1.5px]`}
      >
        {icon && <span className="text-[14px] mr-[5px]">{icon}</span>}
        {price}
        <span className="text-[12px] ml-[3px]">원</span>
      </span>
    </div>
  )
}

export default TotalPriceEl
