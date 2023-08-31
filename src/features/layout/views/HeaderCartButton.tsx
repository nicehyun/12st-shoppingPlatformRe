"use client"

import { useProductListInCartQuery } from "@/features/cart/hooks/useProductListInCartQuery"
import { BsFillCartXFill, BsFillCartFill } from "react-icons/bs"

const HeaderCartButton = () => {
  const { productListInCart } = useProductListInCartQuery()

  return (
    <button className="group mx-[10px] border border-border rounded-lg px-2 py-[4px] flex hover:bg-black hover:text-lightRed dark:hover:bg-white dark:hover:text-lightRed transition-3 flexCenter peer">
      <span className="mr-[5px]">
        {productListInCart.length < 10 ? (
          <BsFillCartFill className="cart-el cart-icon" />
        ) : (
          <BsFillCartXFill className="cart-el cart-icon cart-icon__fullFilled" />
        )}
      </span>
      <span className="text-[10px]">SHOPPING CART</span>

      <span className="border border-border rounded-lg text-[8px] ml-[8px] py-[1px] px-[3px] font-bold bg-white text-black group-hover:text-lightRed">
        {productListInCart.length}
      </span>
    </button>
  )
}

export default HeaderCartButton
