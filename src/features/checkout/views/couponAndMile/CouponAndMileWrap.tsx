import { ReactNode } from "react"

interface ICouponAndMileWrap {
  classification: string
  children: ReactNode
}

const CouponAndMileWrap = ({
  children,
  classification,
}: ICouponAndMileWrap) => {
  return (
    <div className="py-[18px]">
      <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] mb-[10px]">
        {classification}
      </p>
      {children}
    </div>
  )
}

export default CouponAndMileWrap
