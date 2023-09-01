"use client"

import { useState } from "react"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import { ProductInCart as IProductInCart } from "../types/cart"
import ProductInCart from "./ProductInCart"

const ProductListInCart = () => {
  const { productListInCart } = useProductListInCartQuery()
  const [checkedProductList, setCheckedProductList] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(false)

  console.log(isAllChecked)
  console.log(checkedProductList)

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

  return (
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] xl:w-4/5 lg:w-4/5 xl:mr-2percent lg:mr-2percent shadow rounded-[5px]">
      <div className="relative mb-[30px] pb-[30px] border-b-[1px] border-lightBlack flex items-center">
        <input
          type="checkbox"
          checked={isAllChecked}
          // onChange={onClickAllCheck}
          onClick={handleAllCheckClick}
          className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
        />
        <span className="text-[16px] md:text-[14px] sm:text-[12px] text-black">
          선택 {checkedProductList.length}개
        </span>
        <button
          // onClick={onClickCheckedProductRemove}
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
          />
        ))}
      </ul>
    </section>
  )
}

export default ProductListInCart
