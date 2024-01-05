"use client"

import useCouponQuery from "@/features/checkout/hooks/useCouponQuery"
import SectionTitle from "../SectionTitle"
import MyPageCouponEl from "./MyPageCouponEl"
import MyPageListLoading from "../MyPageListLoading"

const MyPageCoupons = () => {
  const { coupons, isLoading } = useCouponQuery()

  if (isLoading) {
    return <MyPageListLoading />
  }

  return (
    <section>
      <SectionTitle title="사용 가능한 쿠폰" />

      {coupons?.map((coupon) => (
        <MyPageCouponEl
          key={`coupon-${coupon.type}__${coupon.name}`}
          couponName={coupon.name}
        />
      ))}
    </section>
  )
}

export default MyPageCoupons
