import { ReactNode } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"
import { BsFillTrashFill } from "react-icons/bs"
import useIncreaseAmountMutation from "../hooks/useIncreaseAmountMutation"
import useDecreaseAmountMutation from "../hooks/useDecreaseAmountMutation"

interface IProductInCartController {
  children: ReactNode
  productId: string
  productAmount: number
  amount: number
}

const ProductInCartController = ({
  children,
  productAmount,
  productId,
  amount,
}: IProductInCartController) => {
  const increaseMutaion = useIncreaseAmountMutation(productId)
  const decreaseMutaion = useDecreaseAmountMutation(productId)

  const handleAmoutIncrease = () => {
    increaseMutaion.mutate()
  }

  const handleAmoutDecrease = () => {
    if (amount === 1) return

    decreaseMutaion.mutate()
  }

  return (
    <div className="relative py-[10px] pr-[10px] flex flex-col grow text-black">
      <button className="absolute text-border right-[10px] top-[10px] text-[22px] md:text-[18px] sm:text-[16px] transition-3 hover:text-lightRed">
        <BsFillTrashFill />
      </button>

      {children}

      <div className="absolute bottom-[20px] w-[80px] h-[28px] md:h-[24px] sm:h-[20px] items-center bg-lightBorder rounded-[5px] flexCenter">
        <button onClick={handleAmoutDecrease}>
          <HiMinus className="text-[16px] md:text-[14px] sm:text-[12px]  text-lightGray" />
        </button>
        <input
          type="text"
          readOnly
          value={productAmount}
          className="w-1/2 h-full md:text-[14px] sm:text-[12px] border-none bg-white text-black text-end cursor-default px-[10px] mx-[1px]"
        />
        <button onClick={handleAmoutIncrease}>
          <HiPlus className="text-[16px] md:text-[14px] sm:text-[12px]" />
        </button>
      </div>
    </div>
  )
}

export default ProductInCartController
