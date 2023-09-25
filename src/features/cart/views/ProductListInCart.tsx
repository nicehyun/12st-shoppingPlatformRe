"use client"

import { ROUTE } from "@/common/hooks/useNavigations"
import Empty from "@/common/views/Empty"
import {
  allcheckedProduct,
  checkedProduct,
  emptyCheckedProductList,
  selectCheckedProductList,
  uncheckedProduct,
} from "@/redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import { useRemoveCheckedProduct } from "../hooks/useRemoveCheckedProduct"
import { ProductInCart as IProductInCart, ProductsInCart } from "../types/cart"

import ProductInCart from "./ProductInCart"

const ProductListInCart = () => {
  const dispatch = useAppDispatch()
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const { productListInCart } = useProductListInCartQuery()

  const [isAllChecked, setIsAllChecked] = useState(false)

  const checkedProductRemoveMutaion = useRemoveCheckedProduct()

  const handleCheckedProductListEmpty = () => {
    if (!productListInCart.length) return

    dispatch(emptyCheckedProductList())
    setIsAllChecked(false)
  }

  const handleProductAllCheck = () => {
    if (!isAllChecked) {
      dispatch(allcheckedProduct(productListInCart))
      setIsAllChecked(true)
    } else {
      dispatch(emptyCheckedProductList())
      setIsAllChecked(false)
    }
  }

  const handleProductCheck = (product: IProductInCart) => {
    const isProductChecked = checkedProductList.includes(product)

    if (isProductChecked) {
      dispatch(uncheckedProduct(product.id))
      setIsAllChecked(false)
      return
    }

    dispatch(checkedProduct(product))
  }

  const handleCheckedProductRemove = async (
    checkedProductList: ProductsInCart
  ) => {
    if (checkedProductList.length === 0) return

    await checkedProductRemoveMutaion.mutateAsync(checkedProductList)
    handleCheckedProductListEmpty()
  }

  useEffect(() => {
    if (!productListInCart.length) return

    if (productListInCart.length) {
      const productsId: string[] = []
      productListInCart.map((product) => productsId.push(product.id))

      dispatch(allcheckedProduct(productListInCart))
      setIsAllChecked(true)
      return
    }
  }, [productListInCart])

  useEffect(() => {
    if (!productListInCart.length) return

    if (productListInCart.length === checkedProductList.length) {
      setIsAllChecked(true)
    }
  }, [productListInCart, checkedProductList])

  return (
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] shadow rounded-[5px]">
      <div className="relative mb-[30px] pb-[30px] border-b-[1px] border-lightBlack flex items-center">
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={handleProductAllCheck}
          className="mr-[10px] w-[18px] h-[18px] md:w-[16px] md:h-[16px] sm:w-[14px] sm:h-[14px] cursor-pointer"
        />
        <span className="text-[14px] md:text-[12px] sm:text-[10px] text-black">
          선택 {checkedProductList.length}개
        </span>
        <button
          onClick={() => handleCheckedProductRemove(checkedProductList)}
          className="absolute right-0 text-border transition-3 hover:text-lightRed text-[14px] md:text-[12px] sm:text-[10px]"
        >
          선택 삭제
        </button>
      </div>

      {productListInCart.length ? (
        <ul>
          {productListInCart.map((product) => (
            <ProductInCart
              key={product.name}
              productInfo={product}
              isChecked={checkedProductList.includes(product) || isAllChecked}
              onClickCheck={() => handleProductCheck(product)}
              onEmptyCheckedProductList={handleCheckedProductListEmpty}
            />
          ))}
        </ul>
      ) : (
        <Empty
          content="장바구니에 담은 상품이 없습니다"
          routeArray={[
            { routeContent: "CONTINUE SHOPPING", route: ROUTE.HOME },
          ]}
        />
      )}
    </section>
  )
}

export default ProductListInCart
