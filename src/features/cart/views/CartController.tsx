import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useAppSelector } from "@/redux/hooks"

const CartController = () => {
  const { routeTo } = useNavigations()
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const handleCheckout = () => {
    if (!checkedProductList.length) return

    routeTo(ROUTE.CHECKOUT)
  }
  return (
    <div className="mt-[40px] lg:mt-[60px] xl:mt-[60px] flexCenter">
      <button
        onClick={() => routeTo(ROUTE.HOME)}
        className="w-[320px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white mr-[12px] text-[20px] font-bold hover:text-lightRed"
      >
        CONTINUE SHOPPING
      </button>
      <button
        onClick={handleCheckout}
        disabled={!checkedProductList.length}
        className="w-[320px] h-[80px] sm:h-[60px] md:h-[70px] border-[1px] border-black dark:border-white text-white dark:text-black bg-black dark:bg-white text-[20px] font-bold hover:text-lightRed dark:hover:text-lightRed disabled:cursor-not-allowed disabled:bg-border disabled:text-white dark:disabled:text-black"
      >
        CHECK OUT
      </button>
    </div>
  )
}

export default CartController
