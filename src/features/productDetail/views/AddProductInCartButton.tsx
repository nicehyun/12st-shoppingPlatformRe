"use client"

import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"
import { Product } from "@/features/common/types/product"
import Button from "@/features/common/views/Button"
import Loading from "@/features/common/views/Loading"

interface IAddProductInCartButton {
  productDetail: Product
}

const AddProductInCartButton = ({ productDetail }: IAddProductInCartButton) => {
  const { addMutate, isLoading } = useAddToCartMutaion(productDetail)

  return (
    <Button
      onClick={addMutate}
      isDisabled={isLoading}
      content={
        isLoading ? (
          <Loading
            spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
            isFrame={false}
          />
        ) : (
          `장바구니 담기`
        )
      }
      classNames="border-border border-[1px]"
    />
  )
}

export default AddProductInCartButton
