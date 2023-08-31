"use client"

import { useProductListInCartQuery } from "@/features/cart/hooks/useProductListInCartQuery"
import { getProductListInCart } from "@/firebase/firestore/cart"
import { useAppDispatch } from "@/redux/hooks"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { BsFillCartXFill, BsFillCartFill } from "react-icons/bs"

const HeaderCartButton = () => {
  // const dispatch = useAppDispatch()

  // const [test, setTest] = useState()

  // const product = async () => {
  //   const t123 = await getProductListInCart("test@test.com")
  //   console.log(t123)
  // }

  // useEffect(() => {
  //   product()
  // }, [])

  // const { data } = useSession()
  // console.log(data?.user.email)

  // const test = useProductListInCartQuery(data?.user.email ?? "")
  // console.log(test)
  return (
    <button className="group mx-[10px] border border-border rounded-lg px-2 py-[4px] flex hover:bg-black hover:text-lightRed dark:hover:bg-white dark:hover:text-lightRed transition-3 flexCenter peer">
      <span>
        {/* {productListInCartLength < 10 ? (
          <BsFillCartFill className="cart-el cart-icon" />
        ) : (
          <BsFillCartXFill className="cart-el cart-icon cart-icon__fullFilled" />
        )} */}
        <BsFillCartXFill className="mr-[5px]" />
      </span>
      <span className="text-[10px]">SHOPPING CART</span>
      {/* {isAuthenticated && (
        <span className="cart-amount cart-el">{productListInCartLength}</span>
      )} */}
      <span className="border border-border rounded-lg text-[8px] ml-[8px] p-[1px] w-25 h-18 font-bold bg-white text-black group-hover:text-lightRed">
        10
      </span>
    </button>
  )
}

export default HeaderCartButton
