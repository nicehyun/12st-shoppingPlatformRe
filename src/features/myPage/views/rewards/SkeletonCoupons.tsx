import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import React from "react"

const SkeletonCoupons = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <SpanSkeletonUI
          key={`skeleton-coupon__${index}`}
          className="h-[140px] w-full max-w-[600px] mt-[20px]"
        />
      ))}
    </>
  )
}

export default SkeletonCoupons
