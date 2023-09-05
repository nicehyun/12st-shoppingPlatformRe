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

import { ProductInCart as IProductInCart } from "../types/cart"
import ProductInCart from "./ProductInCart"

const ProductListInCart = () => {
  const dispatch = useAppDispatch()
  const checkedProductList = useAppSelector(selectCheckedProductList)
  console.log(checkedProductList)
  const { productListInCart } = useProductListInCartQuery()
  // const [checkedProductList, setCheckedProductList] = useState<string[]>([])
  const [isAllChecked, setIsAllChecked] = useState(false)

  const checkedProductRemoveMutaion = useRemoveCheckedProduct()

  const handleCheckedProductListEmpty = () => {
    if (!productListInCart.length) return

    // setCheckedProductList([])
    dispatch(emptyCheckedProductList())
    setIsAllChecked(false)
  }

  const handleProductAllCheck = () => {
    if (!isAllChecked) {
      // const checkedProductList: string[] = []

      // productListInCart.map((product: IProductInCart) =>
      //   checkedProductList.push(product.id)
      // )

      // setCheckedProductList(checkedProductList)
      dispatch(allcheckedProduct(checkedProductList))
      setIsAllChecked(true)
    } else {
      // setCheckedProductList([])
      // TODO : dispatch로 수정
      dispatch(emptyCheckedProductList())
      setIsAllChecked(false)
    }
  }

  const handleProductCheck = (productId: string) => {
    const isProductChecked = checkedProductList.includes(productId)

    if (isProductChecked) {
      // const updatedList = checkedProductList.filter((id) => id !== productId)
      // setCheckedProductList(updatedList)

      dispatch(uncheckedProduct(productId))
      setIsAllChecked(false)
      return
    }

    // const updatedList = [...checkedProductList, productId]
    // setCheckedProductList(updatedList)
    dispatch(checkedProduct(productId))
  }

  const handleCheckedProductRemove = async (
    checkedProductList: string[] | []
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

      // setCheckedProductList(productsId)
      dispatch(allcheckedProduct(productsId))
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
    <section className="border-[1px] border-border bg-white py-[30px] px-[20px] xl:w-4/5 lg:w-4/5 xl:mr-2percent lg:mr-2percent shadow rounded-[5px]">
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
              isChecked={
                checkedProductList.includes(product.id) || isAllChecked
              }
              onClickCheck={() => handleProductCheck(product.id)}
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
