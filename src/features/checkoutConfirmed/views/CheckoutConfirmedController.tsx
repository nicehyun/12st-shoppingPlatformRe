"use client"

import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"

const CheckoutConfirmedController = () => {
  const { routeTo } = useNavigations()
  return (
    <section className="mt-[120px] flexCenter">
      <button
        onClick={() => routeTo(ROUTE.MYPAGE, true)}
        className="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white mr-[12px] text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed"
      >
        MY PAGE
      </button>
      <button
        onClick={() => routeTo(ROUTE.HOME, true)}
        className="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white text-white dark:text-black bg-black dark:bg-white text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed dark:hover:text-lightRed disabled:cursor-not-allowed disabled:bg-border dark:disabled:bg-border disabled:text-white dark:disabled:text-black"
      >
        CONTINUE SHOPPING
      </button>
    </section>
  )
}

export default CheckoutConfirmedController
