import { ReactNode } from "react"

interface ICartPriceOperation {
  icon: ReactNode
  classNames?: string
}

const CartPriceOperation = ({ icon, classNames }: ICartPriceOperation) => {
  return (
    <span
      className={`absolute text-[38px] md:text-[24px] sm:text-[20px] transform  ${classNames}`}
    >
      {icon}
    </span>
  )
}

export default CartPriceOperation
