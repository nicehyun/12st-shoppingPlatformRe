import {
  resetCoupon,
  selectCoupon,
  selectSelectedCoupon,
} from "@/redux/features/couponSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { SelectChangeEvent } from "@mui/material"
import useCouponQuery from "./useCouponQuery"

const useSelectCoupon = () => {
  const dispatch = useAppDispatch()
  const selectedCoupon = useAppSelector(selectSelectedCoupon)

  const { coupons } = useCouponQuery()

  const handleSelectedCoupon = (event: SelectChangeEvent<unknown>) => {
    const findedCoupon = coupons?.find(
      (coupon) => coupon.name === event.target.value
    )

    findedCoupon
      ? dispatch(selectCoupon(findedCoupon))
      : dispatch(resetCoupon())
  }

  const resetSelectedCoupon = () => {
    dispatch(resetCoupon())
  }

  return {
    availableCoupons: coupons,
    selectedCoupon,
    handleSelectedCoupon,
    resetSelectedCoupon,
  }
}

export default useSelectCoupon
