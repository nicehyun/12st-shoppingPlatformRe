import {
  resetPlannedUseMile,
  selectCheckoutPlannedUseMileState,
  setPlannedUseMile,
} from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEventHandler, useEffect } from "react"
import { useUserMileQuery } from "./useGetUserMileQuery"
import useCheckoutPrice from "./useCheckoutPrice"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"

export const useMilePlanInput = () => {
  const dispatch = useAppDispatch()
  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )

  const { userMile, availableMiles } = useUserMileQuery()

  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const handleUseAllMileButtonClick = () => {
    dispatch(setPlannedUseMile(availableMiles))
  }

  const handleUseMileBlur = () => {
    if (!(totalPriceOfCheckedProduct > checkoutPlannedUseMileState)) {
      dispatch(resetPlannedUseMile())
      return
    }

    dispatch(
      setPlannedUseMile(junkOfNoMoreThanOneDigit(checkoutPlannedUseMileState))
    )
  }

  const handleUseMileValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!userMile) return

    if (
      totalPriceOfCheckedProduct < +event.target.value ||
      availableMiles < +event.target.value
    ) {
      dispatch(resetPlannedUseMile())
      return
    }

    dispatch(setPlannedUseMile(+event.target.value))
  }

  useEffect(() => {
    dispatch(resetPlannedUseMile())
  }, [])

  return {
    useMileValue: checkoutPlannedUseMileState,
    handleUseAllMileButtonClick,
    handleUseMileValueChange,
    handleUseMileBlur,
  }
}
