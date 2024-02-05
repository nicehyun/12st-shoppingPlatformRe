"use client"

import { ROUTE } from "@/features/common/hooks/useNavigations"
import Empty from "@/features/common/views/Empty"
import { useGetProductListInCartQuery } from "../hooks/useGetProductListInCartQuery"
import ProductInCart from "./ProductInCart"
import { useCheckProductList } from "../hooks/useCheckProductList"
import SkeletonProductListInCart from "./SkeletonProductListInCart"

const ProductListInCart = () => {
  const { isAllChecked, checkedProductList, onCheckProduct } =
    useCheckProductList()

  const { productListInCart, isLoading } = useGetProductListInCartQuery()

  if (isLoading) {
    return <SkeletonProductListInCart />
  }

  if (productListInCart.length === 0) {
    return (
      <Empty
        content="장바구니에 담은 상품이 없습니다"
        routeArray={[{ routeContent: "CONTINUE SHOPPING", route: ROUTE.HOME }]}
      />
    )
  }

  return (
    <ul>
      {productListInCart.map((product) => (
        <ProductInCart
          key={product.name}
          productInfo={product}
          isChecked={checkedProductList.includes(product) || isAllChecked}
          onClickCheck={() => onCheckProduct(product)}
        />
      ))}
    </ul>
  )
}

export default ProductListInCart
