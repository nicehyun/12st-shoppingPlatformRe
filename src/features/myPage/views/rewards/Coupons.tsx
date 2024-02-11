"use client"

import SectionTitle from "../SectionTitle"
import Coupon from "./Coupon"

import { useCouponQuery } from "@/features/checkout/hooks/useCouponQuery"
import SkeletonCoupons from "./SkeletonCoupons"

const Coupons = () => {
  const { coupons, isLoading } = useCouponQuery()

  return (
    <section>
      <SectionTitle title="사용 가능한 쿠폰" />

      {isLoading ? (
        <SkeletonCoupons />
      ) : (
        coupons?.map((coupon) => (
          <Coupon
            key={`coupon-${coupon.type}__${coupon.name}`}
            couponName={coupon.name}
          />
        ))
      )}
    </section>
  )
}

export default Coupons
