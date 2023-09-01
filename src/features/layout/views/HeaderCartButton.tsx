"use client"

import { useProductListInCartQuery } from "@/features/cart/hooks/useProductListInCartQuery"
import { showCartModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { MouseEventHandler, useEffect, useState } from "react"
import { BsFillCartXFill, BsFillCartFill } from "react-icons/bs"

const HeaderCartButton = () => {
  const dispatch = useAppDispatch()
  const [isCartHightlighted, setIsCartHightlighted] = useState(false)

  const { productListInCart } = useProductListInCartQuery()

  const onShowCartModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    dispatch(showCartModal())
  }

  useEffect(() => {
    setIsCartHightlighted(true)
    const timer = setTimeout(() => {
      setIsCartHightlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [productListInCart])

  return (
    <button
      onClick={onShowCartModal}
      className={`group mx-[10px] border border-border rounded-lg px-2 py-[4px] flex ${
        isCartHightlighted && "bg-black dark:bg-white bump"
      } hover:bg-black hover:text-lightRed dark:hover:bg-white dark:hover:text-lightRed transition-3 flexCenter peer`}
    >
      <span className={`${isCartHightlighted && "text-lightRed"} mr-[5px]`}>
        {productListInCart.length < 10 ? (
          <BsFillCartFill />
        ) : (
          <BsFillCartXFill />
        )}
      </span>
      <span className={`${isCartHightlighted && "text-lightRed"} text-[10px]`}>
        SHOPPING CART
      </span>

      <span
        className={`${
          isCartHightlighted && "text-lightRed bg-black"
        } border border-border rounded-lg text-[8px] ml-[8px] py-[1px] px-[3px] font-bold bg-white text-black group-hover:text-lightRed`}
      >
        {productListInCart.length}
      </span>
    </button>
  )
}

export default HeaderCartButton
