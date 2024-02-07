import { ReactNode } from "react"

interface ICouponAndMileContents {
  isShowDetail: boolean
  children: ReactNode
}

const OpecityContainer = ({
  children,
  isShowDetail,
}: ICouponAndMileContents) => {
  return (
    <div
      className={`opacity-${isShowDetail ? "100" : "0"} ${
        isShowDetail ? "visible max-h-[300px]" : "invisible max-h-0"
      } transition-max-h transition-3`}
    >
      {children}
    </div>
  )
}

export default OpecityContainer
