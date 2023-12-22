"use client"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const CartController = () => {
  const { routeTo } = useNavigations()
  const dispatch = useAppDispatch()
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const handleCheckout = () => {
    if (!checkedProductList.length) return
    dispatch(addCheckoutPendingProductList(checkedProductList))

    routeTo(ROUTE.CHECKOUT)
  }
  return (
    <section className="mt-[120px] flexCenter">
      <Button
        onClick={() => routeTo(ROUTE.HOME)}
        classNames="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white mr-[12px] text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed"
        content="CONTINUE SHOPPING"
      />

      <Button
        onClick={handleCheckout}
        isDisabled={!checkedProductList.length}
        classNames="w-[400px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white text-white dark:text-black bg-black dark:bg-white text-[28px] md:text-[24px] sm:text-[20px] font-bold hover:text-lightRed dark:hover:text-lightRed disabled:border-border disabled:cursor-not-allowed disabled:bg-border dark:disabled:bg-border disabled:text-white dark:disabled:text-black"
        content="CHECK OUT"
      />
    </section>
  )
}

export default CartController
