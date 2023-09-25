import { numberToLocaleString } from "@/common/utils/price"

interface ICartPriceInfoEl {
  price: number
}

const CartPriceInfoEl = ({ price }: ICartPriceInfoEl) => {
  return (
    <span className="block border-0 h-[60px] md:h-[50px] sm:h-[46px] w-1/3 flexCenter text-[32px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold">
      {numberToLocaleString(price)}
      <span className="text-[18px] ml-[3px]">원</span>
    </span>
  )
}

export default CartPriceInfoEl
