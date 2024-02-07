import {
  resetCoupon,
  selectCoupon,
  selectSelectedCoupon,
} from "@/redux/features/couponSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { SelectChangeEvent } from "@mui/material"
import { useCouponQuery } from "./useCouponQuery"
import { useEffect } from "react"
import useCheckoutPrice from "./useCheckoutPrice"
import { useSelect } from "@/features/common/hooks/useSelect"

export const useSelectCoupon = () => {
  const dispatch = useAppDispatch()
  const selectedCoupon = useAppSelector(selectSelectedCoupon)
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const { handleSelectClose, handleSelectOpen, isSelectOpen } = useSelect()

  const { coupons, isLoading } = useCouponQuery()

  const resetSelectedCoupon = () => {
    dispatch(resetCoupon())
  }

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const findedCoupon = coupons?.find(
      (coupon) => coupon.name === event.target.value
    )

    findedCoupon
      ? dispatch(selectCoupon(findedCoupon))
      : dispatch(resetCoupon())

    handleSelectClose()
  }

  const isAvaliableSelectCoupon = totalPriceOfCheckedProduct > 15000

  useEffect(() => {
    resetSelectedCoupon()
  }, [])

  return {
    availableCoupons: coupons,
    selectedCoupon,
    isSelectOpen,
    handleSelectClose,
    handleSelectOpen,
    handleSelectChange,
    isLoading,
    isAvaliableSelectCoupon,
  }
}
