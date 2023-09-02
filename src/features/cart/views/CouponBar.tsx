"use client"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import useCouponQuery from "../hooks/useCouponQuery"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { selectCoupon, selectSeletedCoupon } from "@/redux/features/couponSlice"
import { SelectChangeEvent } from "@mui/material"

// TODO : 선택 상품 총 가격 15000원 이상일 경우 쿠폰 사용가능, 15000원 이하 쿠폰 disabled 처리

const CouponBar = () => {
  const { coupons } = useCouponQuery()
  console.log(coupons)

  const dispatch = useAppDispatch()

  const seletedCoupon = useAppSelector(selectSeletedCoupon)
  console.log(seletedCoupon)

  const handleCouponSelect = (event: SelectChangeEvent<unknown>) => {
    if (coupons) {
      const findedCoupon = coupons.find(
        (coupon) => coupon.name === event.target.value
      )

      findedCoupon && dispatch(selectCoupon(findedCoupon))
    }
  }

  return (
    <div className="sticky top-[150px] w-18percent h-[400px] py-[20px] p-[10px] border-[1px] border-black rounded-[5px] shadow">
      <h4 className="mb-[32px]">쿠폰</h4>

      <div className="mb-[30px]">
        <p className="text-[14px] text-lightBlack mb-[10px]">보너스 쿠폰</p>
        <FormControl
          variant="standard"
          sx={{ m: 0, minWidth: 170, maxWidth: 170 }}
        >
          <InputLabel className="text-[12px]">Coupon</InputLabel>
          <Select
            labelId="bonus-coupons"
            id="bonus-coupons"
            value={seletedCoupon?.name ?? ""}
            label="Coupon"
            onChange={handleCouponSelect}
            // disabled={isCouponDisabled}
            className="text-[14px]"
          >
            <MenuItem value="선택안함" className="text-[14px]">
              선택안함
            </MenuItem>
            {coupons?.map((coupon) => (
              <MenuItem
                key={`coupon_${coupon.type}`}
                value={coupon.name}
                className="text-[14px]"
              >
                {coupon.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="mb-[30px]">
        <p className="text-[14px] text-lightBlack mb-[10px]">브랜드 쿠폰</p>
        <FormControl variant="standard" sx={{ m: 0, minWidth: 170 }}>
          <InputLabel className="text-[12px]">Coupon</InputLabel>
          <Select label="Coupon" value="" disabled>
            <MenuItem value="">선택안함</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="absolute w-90percent bottom-[10px] m-auto flex justify-between items-center">
        <span className="text-[14px]">쿠폰 사용금액</span>

        <div className="text-[16px] font-bold text-lightRed mr-[3px]">
          {/* <span>{priceToUseCoupon}</span> <span>원</span> */}
        </div>
      </div>
    </div>
  )
}

export default CouponBar
