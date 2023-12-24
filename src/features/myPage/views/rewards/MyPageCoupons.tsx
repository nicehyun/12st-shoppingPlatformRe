"use client"

import useCouponQuery from "@/features/checkout/hooks/useCouponQuery"
import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageCouponEl from "./MyPageCouponEl"
import MyPageListLoading from "../MyPageListLoading"

const MyPageCoupons = () => {
  const { coupons, isLoading } = useCouponQuery()

  console.log(coupons)

  if (isLoading) {
    return <MyPageListLoading />
  }

  return (
    <section>
      <MyPageSectionTitle title="사용 가능한 쿠폰" />

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
