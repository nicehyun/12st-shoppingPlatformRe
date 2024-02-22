import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"

export const validCheckProductInfo = (product: Product) => {
  const requiredProperties: (keyof Product)[] = [
    "brand",
    "category1",
    "category2",
    "category3",
    "category4",
    "deliveryFree",
    "discount",
    "discountedPrice",
    "id",
    "image",
    "maker",
    "mallName",
    "name",
    "price",
    "reviewCount",
    "sellCount",
  ]

  const isValidProductInfo = requiredProperties.every(
    (property) => product[property] !== undefined
  )
  if (!isValidProductInfo) {
    return {
      valid: false,
      message: "유효한 상품 정보가 아닙니다.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckAddProductToCart = (
  product: Product,
  prevProductListInCart: ProductsInCart
) => {
  if (
    prevProductListInCart.find((prevProduct) => prevProduct.id === product.id)
  ) {
    return {
      valid: false,
      message: "이미 장바구니에 담긴 상품입니다.",
    }
  }

  if (10 <= prevProductListInCart?.length) {
    return {
      valid: false,
      message: "장바구니에 상품이 가득 찼습니다.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckIncreaseProductAmountToCart = (
  product: ProductInCart
) => {
  if (product.amount >= 50) {
    return {
      valid: false,
      message: "최대 구매 가능 수량에 도달했습니다.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckDecreaseProductAmountToCart = (
  product: ProductInCart
) => {
  if (product.amount <= 1) {
    return {
      valid: false,
      message: "최소 구매 가능 수량에 도달했습니다.",
    }
  }

  return {
    valid: true,
  }
}

export const validCheckedProductRemove = (
  checkedProductList: ProductsInCart
) => {
  if (checkedProductList.length === 0) {
    return {
      valid: false,
      message: "선택된 상품이 없습니다. 삭제를 원하시는 상품을 선택해주세요.",
    }
  }

  return {
    valid: true,
  }
}
