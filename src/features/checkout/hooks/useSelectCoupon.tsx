import {
  resetCoupon,
  selectCoupon,
  selectSelectedCoupon,
} from "@/redux/features/couponSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { SelectChangeEvent } from "@mui/material"
import { useCouponQuery } from "./useCouponQuery"
import { useEffect, useState } from "react"
import useCheckoutPrice from "./useCheckoutPrice"

export const useSelectCoupon = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const dispatch = useAppDispatch()
  const selectedCoupon = useAppSelector(selectSelectedCoupon)
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const { coupons, isLoading } = useCouponQuery()

  const resetSelectedCoupon = () => {
    dispatch(resetCoupon())
  }

  const handleSelectClose = () => {
    setIsSelectOpen(false)
  }

  const handleSelectOpen = () => {
    setIsSelectOpen(true)
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
