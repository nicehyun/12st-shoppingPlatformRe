"use client"

import { useEffect, useState } from "react"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import { useRemoveCheckedProduct } from "../hooks/useRemoveCheckedProduct"

import { ProductInCart as IProductInCart } from "../types/cart"
import ProductInCart from "./ProductInCart"

const ProductListInCart = () => {
  const { productListInCart } = useProductListInCartQuery()
  const [checkedProductList, setCheckedProductList] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(false)

  const checkedProductRemoveMutaion = useRemoveCheckedProduct()

  const handleAllCheckClick = () => {
    if (!isAllChecked) {
      const checkedProductList: string[] = []

      productListInCart.map((product: IProductInCart) =>
        checkedProductList.push(product.id)
      )

      setCheckedProductList(checkedProductList)
      setIsAllChecked(true)
    } else {
      setCheckedProductList([])
      setIsAllChecked(false)
    }
  }

  const handleCheckClick = (productId: string) => {
    const isProductChecked = checkedProductList.includes(productId)

    if (isProductChecked) {
      const updatedList = checkedProductList.filter((id) => id !== productId)
      setCheckedProductList(updatedList)
      setIsAllChecked(false)
      return
    }

    const updatedList = [...checkedProductList, productId]
    setCheckedProductList(updatedList)
  }

  const handleCheckedProductRemove = (checkedProductList: string[] | []) => {
    if (checkedProductList.length === 0) return

    checkedProductRemoveMutaion.mutate(checkedProductList)
  }

  useEffect(() => {
    if (checkedProductList.length === productListInCart.length) {
      setIsAllChecked(true)
    }
  }, [checkedProductList, productListInCart])

  return (
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] xl:w-4/5 lg:w-4/5 xl:mr-2percent lg:mr-2percent shadow rounded-[5px]">
      <div className="relative mb-[30px] pb-[30px] border-b-[1px] border-lightBlack flex items-center">
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={handleAllCheckClick}
          className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
        />
        <span className="text-[16px] md:text-[14px] sm:text-[12px] text-black">
          선택 {checkedProductList.length}개
        </span>
        <button
          onClick={() => handleCheckedProductRemove(checkedProductList)}
          className="absolute right-0 text-border transition-3 hover:text-lightRed"
        >
          선택 삭제
        </button>
      </div>

      <ul>
        {productListInCart.map((product) => (
          <ProductInCart
            key={product.name}
            productInfo={product}
            isChecked={checkedProductList.includes(product.id) || isAllChecked}
            onClickCheck={() => handleCheckClick(product.id)}
          />
        ))}
      </ul>
    </section>
  )
}

export default ProductListInCart
