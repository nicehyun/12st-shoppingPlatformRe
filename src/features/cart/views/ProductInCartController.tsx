import { ReactNode } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"

import { ProductInCart } from "../types/cart"
import Button from "@/features/common/views/Button"
import { AiOutlineClose } from "react-icons/ai"
import { useRemoveFromCartMutation } from "../hooks/useRemoveFromCartMutation"
import { useIncreaseAmountMutation } from "../hooks/useIncreaseAmountMutation"
import { useDecreaseAmountMutation } from "../hooks/useDecreaseAmountMutation"

interface IProductInCartController {
  children: ReactNode
  productInfo: ProductInCart
  onEmptyCheckedProductList: () => void
}

const ProductInCartController = ({
  children,
  productInfo,
  onEmptyCheckedProductList,
}: IProductInCartController) => {
  const { increaseMutate, isLoading: isIncreaseMutateLoading } =
    useIncreaseAmountMutation(productInfo)
  const { decreaseMutate, isLoading: isDecreaseMutateLoading } =
    useDecreaseAmountMutation(productInfo)
  const { removeMutate, isLoading: isRemoveMutateLoading } =
    useRemoveFromCartMutation(productInfo)

  const onClickRemoveProductFromCart = async () => {
    // if (removeMutaion.isLoading) return

    // TODO : 비동기로 받던 해해결하기
    await removeMutaion.mutateAsync()
    onEmptyCheckedProductList()
  }

  return (
    <div className="relative py-[10px] pr-[10px] flex flex-col grow text-black">
      <Button
        onClick={onClickRemoveProductFromCart}
        classNames="absolute text-border right-[10px] top-[10px] text-[22px] md:text-[18px] sm:text-[16px] transition-3 hover:text-lightRed"
        content={<AiOutlineClose />}
      />

      {children}

      <div className="absolute p-[1px] bottom-[20px] sm:bottom-[10px] md:bottom-[10px] w-[80px] h-[28px] md:w-[60px] sm:w-[50px] md:h-[24px] sm:h-[20px] items-center bg-lightBorder rounded-[5px] flexCenter">
        <Button
          onClick={decreaseMutate}
          isDisabled={isDecreaseMutateLoading}
          classNames="text-[14px] md:text-[12px] sm:text-[10px] text-lightGray"
          content={<HiMinus />}
        />

        <input
          type="text"
          name="cart-amount"
          readOnly
          value={productInfo.amount}
          className="w-1/2 h-full text-[14px] md:text-[12px] sm:text-[10px] border-none bg-white text-black text-end cursor-default px-[10px] md:px-[5px] sm:px-[5px] mx-[1px]"
        />
        <Button
          onClick={increaseMutate}
          isDisabled={isIncreaseMutateLoading}
          classNames="text-[14px] md:text-[12px] sm:text-[10px]"
          content={<HiPlus />}
        />
      </div>
    </div>
  )
}

export default ProductInCartController
