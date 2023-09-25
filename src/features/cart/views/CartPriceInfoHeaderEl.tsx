interface ICartPriceInfoHeaderEl {
  headerContent: string
}

const CartPriceInfoHeaderEl = ({ headerContent }: ICartPriceInfoHeaderEl) => {
  return (
    <span className="block h-[60px] w-1/3 sm:w-full sm:h-1/3 md:w-full md:h-1/3 flexCenter text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-bold">
      {headerContent}
    </span>
  )
}

export default CartPriceInfoHeaderEl
