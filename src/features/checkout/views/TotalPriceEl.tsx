import { numberToLocaleString } from "@/features/common/utils/price"
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
      <span className="sm:text-[12px] md:text-[14px]">{individualTitle}</span>
      <span
        className={`${
          isFinalPrice
            ? "text-lightRed font-bold text-[22px]"
            : "flex items-center"
        } tracking-[1.5px] sm:text-[12px] md:text-[14px]`}
      >
        {icon && (
          <span className="text-[14px] sm:text-[12px] md:text-[14px] mr-[5px]">
            {icon}
          </span>
        )}

        {numberToLocaleString(price)}
        <span className="text-[12px] sm:text-[10px] md:text-[10px] ml-[3px]">
          원
        </span>
      </span>
    </div>
  )
}

export default TotalPriceEl
