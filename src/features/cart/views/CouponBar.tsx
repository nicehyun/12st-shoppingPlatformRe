"use client"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import useCouponQuery from "../hooks/useCouponQuery"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  resetCoupon,
  selectCoupon,
  selectSeletedCoupon,
} from "@/redux/features/couponSlice"
import { SelectChangeEvent } from "@mui/material"
import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useEffect } from "react"

const CouponBar = () => {
  const { coupons } = useCouponQuery()

  const dispatch = useAppDispatch()

  const { productListInCart } = useProductListInCartQuery()
  const seletedCoupon = useAppSelector(selectSeletedCoupon)
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const handleCouponSelect = (event: SelectChangeEvent<unknown>) => {
    if (coupons) {
      const findedCoupon = coupons.find(
        (coupon) => coupon.name === event.target.value
      )

      findedCoupon && dispatch(selectCoupon(findedCoupon))
    }
  }

  const totalPriceOfCheckedProduct =
    productListInCart &&
    accumulationOfProductsPrice(
      productListInCart?.filter((product) =>
        checkedProductList.includes(product.id)
      )
    )

  const discountedPriceWithCoupon =
    seletedCoupon && totalPriceOfCheckedProduct
      ? priceToUseCoupon(seletedCoupon, totalPriceOfCheckedProduct)
      : 0

  useEffect(() => {
    dispatch(resetCoupon())
  }, [checkedProductList])

  return (
    <div className="sticky lg:top-[150px] md:top-[0px] xl:top-[150px] w-[190px] sm:w-[140px] md:w-[160px] h-[350px] sm:h-[270px] md:h-[300px] py-[20px] p-[10px] border-[1px] border-black rounded-[5px] shadow bg-white">
      <div className="mb-[30px] sm:mb-[20px]">
        <p className="text-[14px] text-lightBlack mb-[10px] sm:mb-[4px]">
          쿠폰
        </p>
        <FormControl
          variant="standard"
          className="min-w-[170px] sm:min-w-[120px] md:min-w-[140px]"
        >
          <InputLabel className="text-[12px] sm:text-[10px]">Coupon</InputLabel>
          <Select
            labelId="bonus-coupons"
            id="bonus-coupons"
            value={seletedCoupon?.name ?? ""}
            label="Coupon"
            onChange={handleCouponSelect}
            disabled={
              totalPriceOfCheckedProduct
                ? totalPriceOfCheckedProduct < 15000
                : false
            }
            className="text-[14px]"
          >
            <MenuItem
              value="선택안함"
              className="text-[14px] md:text-[12px] sm:text-[10px] px-[10px] py-[3px] sm:py-[0px]"
            >
              선택안함
            </MenuItem>
            {coupons?.map((coupon) => (
              <MenuItem
                key={`coupon_${coupon.type}`}
                value={coupon.name}
                className="text-[14px] sm:text-[10px] px-[10px] py-[3px]"
              >
                {coupon.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="absolute bottom-[10px] m-auto flex flex-col">
        <span className="text-[14px] text-black">쿠폰 사용금액</span>

        <div className="text-[16px] sm:text-[14px] md:text-[14px] font-bold text-lightRed mr-[3px]">
          {/* <span>{priceToUseCoupon}</span> <span>원</span> */}
          <span>{discountedPriceWithCoupon}</span> <span>원</span>
        </div>
      </div>
    </div>
  )
}

export default CouponBar
