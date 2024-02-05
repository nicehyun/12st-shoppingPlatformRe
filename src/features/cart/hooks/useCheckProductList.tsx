import {
  allcheckedProductList,
  checkedProduct,
  selectCheckedProductList,
  selectIsAllChecked,
  unAllcheckedProductList,
  uncheckedProduct,
} from "@/redux/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetProductListInCartQuery } from "./useGetProductListInCartQuery"
import { ProductInCart } from "../types/cart"
import { showAlertModal } from "@/redux/features/modalSlice"
import { useEffect } from "react"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"

export const useCheckProductList = () => {
  const dispatch = useAppDispatch()
  const isAllChecked = useAppSelector(selectIsAllChecked)
  const checkedProductList = useAppSelector(selectCheckedProductList)
  const { productListInCart } = useGetProductListInCartQuery()

  const handleAllProductListCheck = () => {
    if (!isAllChecked) {
      dispatch(allcheckedProductList(productListInCart))
    } else {
      dispatch(unAllcheckedProductList())
    }
  }

  const handleProductCheck = (product: ProductInCart) => {
    const isProductChecked = checkedProductList.includes(product)

    if (isProductChecked) {
      dispatch(uncheckedProduct(product.id))

      return
    }

    dispatch(checkedProduct(product))
  }

  const handleCheckedProductListRemove = () => {
    dispatch(
      showAlertModal({
        modalContent: "선택한 상품을 장바구니에서 삭제하시겠습니까?",
        modalId: "cart-checked-remove",
      })
    )
  }

  useEffect(() => {
    if (!productListInCart.length) return

    if (productListInCart.length) {
      const productsId: string[] = []
      productListInCart.map((product) => productsId.push(product.id))

      dispatch(allcheckedProductList(productListInCart))

      return
    }
  }, [productListInCart])

  useEffect(() => {
    if (!productListInCart.length) return

    if (productListInCart.length === checkedProductList.length) {
      dispatch(allcheckedProductList(productListInCart))
    }
  }, [productListInCart, checkedProductList])

  useEffect(() => {
    dispatch(addCheckoutPendingProductList(checkedProductList))
  }, [checkedProductList])

  return {
    isAllChecked,
    checkedProductList,
    onCheckProduct: handleProductCheck,
    onCheckAllProductList: handleAllProductListCheck,
    onRemoveCheckedProductList: handleCheckedProductListRemove,
  }
}
