"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import useCouponQuery from "@/features/checkout/hooks/useCouponQuery"
import { useUserMileQuery } from "@/features/checkout/hooks/useGetUserMileQuery"

const MyPageTerminationContent = () => {
  const { sessionQuery } = useSessionQuery()
  const { userMile } = useUserMileQuery()
  const { coupons } = useCouponQuery()
  return (
    <div className="">
      <h3 className="text-[24px] inline-block text-center">
        <span className="font-bold mr-[5px]">{sessionQuery?.user.name}</span>
        회원님,
        <br />
        사용할 수 있는 혜택을 포기하실 건가요😢
      </h3>

      <div className="text-[18px] mt-[30px] flexCenter flex-col">
        <div className="mb-[20px]">
          <span className="mr-[10px] text-lightBlack">보유 쿠폰</span>
          <span className="text-lightRed font-bold">{coupons?.length}장</span>
        </div>

        <div>
          <span className="mr-[10px] text-lightBlack">보유 마일리지</span>
          <span className="text-lightRed font-bold">
            {numberToLocaleString(userMile ?? 0)}Mile
          </span>
        </div>
      </div>
    </div>
  )
}

export default MyPageTerminationContent
