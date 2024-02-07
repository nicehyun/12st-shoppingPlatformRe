"use client"

import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"
import { Product } from "@/features/common/types/product"
import LoadingButton from "@/features/common/views/LoadingButton"

interface IAddProductInCartButton {
  productDetail: Product
  isLoading: boolean
}

const AddProductInCartButton = ({
  productDetail,
  isLoading,
}: IAddProductInCartButton) => {
  const { addMutate, isLoading: isAddToCartLoading } =
    useAddToCartMutaion(productDetail)

  return (
    <LoadingButton
      isDisabled={isLoading}
      isLoading={isAddToCartLoading}
      onClick={addMutate}
      content="장바구니 담기"
      className="border-border border-[1px]"
    />
  )
}

export default AddProductInCartButton
