"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useRemoveFromCartMutation } from "../hooks/useRemoveFromCartMutation"
import {
  emptyCheckedProductList,
  selectPendingRemovalProduct,
} from "@/redux/features/cartSlice"
import CartRemoveAlertModal from "./CartRemoveAlertModal"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

const RemoveProductAlertModal = () => {
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const pendingRemovalProduct = useAppSelector(selectPendingRemovalProduct)
  const { session } = useSessionQuery()

  const { mutateAsync, isLoading } = useRemoveFromCartMutation(
    pendingRemovalProduct
  )

  const handleRemoveProduct = async () => {
    if (isLoading) return

    if (shouldProceedWithRouting(!!session)) {
      const resposne = await mutateAsync()

      if (resposne.status === 200) {
        dispatch(emptyCheckedProductList())
      }
    }
  }

  return (
    <CartRemoveAlertModal
      classification="cart-remove"
      isLoading={isLoading}
      removeMutateAsync={handleRemoveProduct}
    />
  )
}

export default RemoveProductAlertModal
