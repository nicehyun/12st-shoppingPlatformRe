import { ReactNode } from "react"
import { ProductInCart } from "../types/cart"
import IncreaseButton from "./IncreaseButton"
import DecreaseButton from "./DecreaseButton"
import RemoveButton from "./RemoveButton"

interface IProductInCartController {
  children: ReactNode
  productInfo: ProductInCart
}

const ProductInCartController = ({
  children,
  productInfo,
}: IProductInCartController) => {
  return (
    <div className="relative py-[10px] pr-[10px] flex flex-col grow text-black">
      <RemoveButton productInfo={productInfo} />

      {children}

      <div className="absolute p-[1px] bottom-[20px] sm:bottom-[10px] md:bottom-[10px] w-[80px] h-[28px] md:w-[60px] sm:w-[50px] md:h-[24px] sm:h-[20px] items-center bg-lightBorder rounded-[5px] flexCenter">
        <DecreaseButton productInfo={productInfo} />

        <input
          type="text"
          name="cart-amount"
          readOnly
          value={productInfo.amount}
          className="w-1/2 h-full text-[14px] md:text-[12px] sm:text-[10px] border-none bg-white text-black text-end cursor-default px-[10px] md:px-[5px] sm:px-[5px] mx-[1px]"
        />

        <IncreaseButton productInfo={productInfo} />
      </div>
    </div>
  )
}

export default ProductInCartController
