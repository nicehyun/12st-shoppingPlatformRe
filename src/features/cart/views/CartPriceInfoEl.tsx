import { numberToLocaleString } from "@/features/common/utils/price"

interface ICartPriceInfoEl {
  price: number
}

const CartPriceInfoEl = ({ price }: ICartPriceInfoEl) => {
  const fomattedPrice = price === 0 ? price : numberToLocaleString(price)

  return (
    <span className="block border-0 h-[60px] sm:h-1/3 md:h-1/3 w-1/3 sm:w-full md:w-full flexCenter text-[32px] lg:text-[30px] md:text-[30px] sm:text-[28px] font-bold">
      {fomattedPrice}
      <span className="text-[18px] ml-[3px] font-normal">원</span>
    </span>
  )
}

export default CartPriceInfoEl
