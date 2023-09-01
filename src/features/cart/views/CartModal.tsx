"use client"

import { ROUTE } from "@/common/hooks/useNavigations"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import {
  hideCartModal,
  selectCartModalState,
} from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { MouseEventHandler, useEffect } from "react"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import CartModalRouteButton from "./CartModalRouteButton"
import ProductInCartModalCard from "./ProductInCartModalCard"

const CartModal = () => {
  const dispatch = useAppDispatch()
  const selectCartModal = useAppSelector(selectCartModalState)
  const { productListInCart } = useProductListInCartQuery()
  const { sessionQuery } = useSessionQuery()

  const onhideCartModal = () => {
    dispatch(hideCartModal())
  }

  const onClickCartModal: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    window.addEventListener("click", onhideCartModal)

    return () => {
      window.removeEventListener("click", onhideCartModal)
    }
  }, [])
  return (
    <>
      {selectCartModal.isShow && (
        <div
          onClick={onClickCartModal}
          className="absolute top-[90px] right-[80px] z-10 w-[320px] py-[15px] px-[10px] bg-white dark:bg-black border-[1px] border-black dark:border-white rounded-[5px] cursor-default shadow dark:shadow-whiteShadow"
        >
          {sessionQuery && (
            <>
              {productListInCart.length === 10 && (
                <p className="bg-black text-white text-center border-[1px] border-border rounded-[5px] text-[12px] p-[8px] mb-[10px]">
                  장바구니가 가득 찼습니다.
                </p>
              )}

              {productListInCart.length === 0 && (
                <p className="border-[1px] border-black dark:border-white text-center text-[12px] p-[8px] mb-[10px] rounded-[5px]">
                  장바구니가 비어있습니다.
                </p>
              )}
              <ul className="max-h-[500px] overflow-y-scroll">
                {productListInCart.map((product) => (
                  <ProductInCartModalCard
                    productInfo={product}
                    key={product.id}
                  />
                ))}
              </ul>
            </>
          )}

          <div className="flex flex-col">
            {sessionQuery ? (
              productListInCart.length !== 0 && (
                <CartModalRouteButton
                  content="장바구니로 이동"
                  route={ROUTE.CART}
                />
              )
            ) : (
              <CartModalRouteButton content="로그인" route={ROUTE.SIGNIN} />
            )}

            <button
              onClick={onhideCartModal}
              className="p-[8px] border-1px border-border bg-lightGray btn-text-center text-[14px] md:text-[12px] sm:text-[12px] rounded-[5px]"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CartModal
