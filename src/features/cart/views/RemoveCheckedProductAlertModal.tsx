"use client"

import { useRemoveCheckedProductMutation } from "../hooks/useRemoveCheckedProductMutation"
import CartRemoveAlertModal from "./CartRemoveAlertModal"

const RemoveCheckedProductAlertModal = () => {
  const { removeCheckedProductMutateAsync, isLoading } =
    useRemoveCheckedProductMutation()

  return (
    <CartRemoveAlertModal
      classification="cart-checked-remove"
      isLoading={isLoading}
      removeMutateAsync={removeCheckedProductMutateAsync}
    />
  )
}

export default RemoveCheckedProductAlertModal
