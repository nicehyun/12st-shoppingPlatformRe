interface IMyPageCouponEl {
  couponName: string
}

const MyPageCouponEl = ({ couponName }: IMyPageCouponEl) => {
  return (
    <div className=" flex h-[140px] mt-[20px] rounded-[8px] bg-white shadow max-w-[600px]">
      <div className="bg-lightRed h-full rounded-s-[8px]">
        <span className="block h-full font-bold transform -rotate-90 flexCenter px-[16px] text-white text-[20px]">
          COUPON
        </span>
      </div>

      <div className="px-[16px] flexCenter flex-grow flex-col text-black">
        <span className="text-[24px] font-extrabold">{couponName}</span>

        <p className="text-[14px] mt-[20px] underline text-lightBlack">
          * 주문 금액이 배송비를 제외한 15,000원 이상일 경우 사용 가능합니다.
        </p>
      </div>
    </div>
  )
}

export default MyPageCouponEl
