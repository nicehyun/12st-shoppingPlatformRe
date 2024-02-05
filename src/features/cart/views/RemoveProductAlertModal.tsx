"use client"

import { useAppSelector } from "@/redux/hooks"
import { useRemoveFromCartMutation } from "../hooks/useRemoveFromCartMutation"
import { selectPendingRemovalProduct } from "@/redux/features/cartSlice"
import CartRemoveAlertModal from "./CartRemoveAlertModal"

const RemoveProductAlertModal = () => {
  const pendingRemovalProduct = useAppSelector(selectPendingRemovalProduct)

  const { removeMutateAsync, isLoading } = useRemoveFromCartMutation(
    pendingRemovalProduct
  )

  return (
    <CartRemoveAlertModal
      classification="cart-remove"
      isLoading={isLoading}
      removeMutateAsync={removeMutateAsync}
    />
  )
}

export default RemoveProductAlertModal
