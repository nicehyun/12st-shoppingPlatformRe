import { ReactNode } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"
import { BsFillTrashFill } from "react-icons/bs"
import useIncreaseAmountMutation from "../hooks/useIncreaseAmountMutation"
import useDecreaseAmountMutation from "../hooks/useDecreaseAmountMutation"
import useRemoveFromCartMutation from "../hooks/useRemoveFromCartMutation"
import { ProductInCart } from "../types/cart"

interface IProductInCartController {
  children: ReactNode
  productInfo: ProductInCart
}

const ProductInCartController = ({
  children,
  productInfo,
}: IProductInCartController) => {
  const increaseMutaion = useIncreaseAmountMutation(productInfo)
  const decreaseMutaion = useDecreaseAmountMutation(productInfo)

  const removeMutaion = useRemoveFromCartMutation()

  const onClickRemoveProductFromCart = async () => {
    await removeMutaion.mutateAsync(productInfo.id)
  }

  const handleAmoutIncrease = () => {
    increaseMutaion.mutate()
  }

  const handleAmoutDecrease = () => {
    if (productInfo.amount === 1) return

    decreaseMutaion.mutate()
  }

  return (
    <div className="relative py-[10px] pr-[10px] flex flex-col grow text-black">
      <button
        onClick={onClickRemoveProductFromCart}
        className="absolute text-border right-[10px] top-[10px] text-[22px] md:text-[18px] sm:text-[16px] transition-3 hover:text-lightRed"
      >
        <BsFillTrashFill />
      </button>

      {children}

      <div className="absolute p-[1px] bottom-[20px] sm:bottom-[10px] md:bottom-[10px] w-[80px] h-[28px] md:w-[60px] sm:w-[50px] md:h-[24px] sm:h-[20px] items-center bg-lightBorder rounded-[5px] flexCenter">
        <button onClick={handleAmoutDecrease}>
          <HiMinus className="text-[14px] md:text-[12px] sm:text-[10px] text-lightGray" />
        </button>
        <input
          type="text"
          readOnly
          value={productInfo.amount}
          className="w-1/2 h-full text-[14px] md:text-[12px] sm:text-[10px] border-none bg-white text-black text-end cursor-default px-[10px] mx-[1px]"
        />
        <button onClick={handleAmoutIncrease}>
          <HiPlus className="text-[14px] md:text-[12px] sm:text-[10px]" />
        </button>
      </div>
    </div>
  )
}

export default ProductInCartController
