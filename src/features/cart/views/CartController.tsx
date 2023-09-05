import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"

const CartController = () => {
  const { routeTo } = useNavigations()
  return (
    <div className="mt-[40px] lg:mt-[60px] xl:mt-[60px] flexCenter">
      <button
        onClick={() => routeTo(ROUTE.HOME)}
        className="w-[320px] h-[60px] border-[1px] border-black dark:border-white mr-[12px] text-[12px] font-bold hover:text-lightRed"
      >
        CONTINUE SHOPPING
      </button>
      <button
        onClick={() => routeTo(ROUTE.CHECKOUT)}
        className="w-[320px] h-[60px] border-[1px] border-black dark:border-white text-white dark:text-black bg-black dark:bg-white text-[12px] font-bold hover:text-lightRed dark:hover:text-lightRed"
      >
        CHECK OUT
      </button>
    </div>
  )
}

export default CartController
