"use client"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { resetCoupon } from "@/redux/features/couponSlice"

import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useEffect } from "react"
import useSelectCoupon from "../hooks/useSelectCoupon"

const CouponBar = () => {
  const { handleSelectedCoupon, seletedCoupon, availableCoupons } =
    useSelectCoupon()

  const dispatch = useAppDispatch()

  const { productListInCart } = useProductListInCartQuery()

  const checkedProductList = useAppSelector(selectCheckedProductList)

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
        <FormControl variant="standard" className="w-full">
          <InputLabel
            sx={{
              fontSize: "12px",
              color: "#ccc",
              "&.Mui-focused": {
                color: "#ff4e0a",
              },
            }}
          >
            Coupon
          </InputLabel>
          <Select
            sx={{
              "&::after": {
                borderBottomColor: "#ff4e0a",
              },
            }}
            labelId="bonus-coupons"
            id="bonus-coupons"
            value={seletedCoupon?.name ?? ""}
            label="Coupon"
            onChange={handleSelectedCoupon}
            disabled={
              totalPriceOfCheckedProduct
                ? totalPriceOfCheckedProduct < 15000
                : false
            }
            className="text-[14px]"
          >
            <MenuItem
              value="선택안함"
              sx={{ fontSize: "14px", padding: "5px" }}
            >
              선택안함
            </MenuItem>
            {availableCoupons?.map((coupon, index) => (
              <MenuItem
                sx={{ fontSize: "14px", padding: "5px" }}
                key={`coupon_${coupon.type}_${index}`}
                value={coupon.name}
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
          <span>{discountedPriceWithCoupon}</span> <span>원</span>
        </div>
      </div>
    </div>
  )
}

export default CouponBar
