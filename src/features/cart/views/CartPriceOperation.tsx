import { ReactNode } from "react"

interface ICartPriceOperation {
  icon: ReactNode
  classNames?: string
}

const CartPriceOperation = ({ icon, classNames }: ICartPriceOperation) => {
  return (
    <span
      className={`absolute text-[38px] md:text-[24px] sm:text-[20px] top-1/2 transform -translate-y-1/2 ${classNames}`}
    >
      {icon}
    </span>
  )
}

export default CartPriceOperation
