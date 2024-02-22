"use client"

import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useRemoveCheckedProductMutation } from "../hooks/useRemoveCheckedProductMutation"
import CartRemoveAlertModal from "./CartRemoveAlertModal"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  emptyCheckedProductList,
  selectCheckedProductList,
} from "@/redux/features/cartSlice"
import { validCheckedProductRemove } from "../models/validateCheck"

import { useFetchValidGard } from "@/features/common/hooks/useFetchValidGard"

const RemoveCheckedProductAlertModal = () => {
  const dispatch = useAppDispatch()
  const { session } = useSessionQuery()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const checkedProductList = useAppSelector(selectCheckedProductList)
  const { handleShowFetchGardFeedbackModal } = useFetchValidGard()

  const { mutateAsync, isLoading } = useRemoveCheckedProductMutation()

  const handleCheckedProductRemove = async () => {
    if (isLoading) return

    handleShowFetchGardFeedbackModal(
      validCheckedProductRemove(checkedProductList)
    )

    if (shouldProceedWithRouting(!!session)) {
      const response = await mutateAsync(checkedProductList)

      if (response.status === 200) {
        dispatch(emptyCheckedProductList())
        return
      }
    }
  }

  return (
    <CartRemoveAlertModal
      classification="cart-checked-remove"
      isLoading={isLoading}
      removeMutateAsync={handleCheckedProductRemove}
    />
  )
}

export default RemoveCheckedProductAlertModal
