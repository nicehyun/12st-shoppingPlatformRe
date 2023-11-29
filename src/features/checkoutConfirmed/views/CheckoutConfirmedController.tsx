"use client"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"

const CheckoutConfirmedController = () => {
  const { routeTo } = useNavigations()

  const handleRouteButtonClick = (route: ROUTE) => {
    routeTo(route, true)
  }

  return (
    <section className="mt-[120px] flexCenter">
      <Button
        onClick={() => handleRouteButtonClick(ROUTE.MYPAGE)}
        classNames="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white mr-[12px] text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed"
        content="MY PAGE"
      />

      <Button
        onClick={() => handleRouteButtonClick(ROUTE.HOME)}
        classNames="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white text-white dark:text-black bg-black dark:bg-white text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed dark:hover:text-lightRed disabled:cursor-not-allowed disabled:bg-border dark:disabled:bg-border disabled:text-white dark:disabled:text-black"
        content="CONTINUE SHOPPING"
      />
    </section>
  )
}

export default CheckoutConfirmedController
