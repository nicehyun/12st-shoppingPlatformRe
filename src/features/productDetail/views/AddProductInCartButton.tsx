"use client"

import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"
import { Product } from "@/features/common/types/product"
import LoadingButton from "@/features/common/views/LoadingButton"

interface IAddProductInCartButton {
  productDetail: Product
}

const AddProductInCartButton = ({ productDetail }: IAddProductInCartButton) => {
  const { addMutate, isLoading } = useAddToCartMutaion(productDetail)

  return (
    <LoadingButton
      isLoading={isLoading}
      onClick={addMutate}
      content="장바구니 담기"
      className="border-border border-[1px]"
    />
  )
}

export default AddProductInCartButton
