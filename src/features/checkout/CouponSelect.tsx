import {
  resetCoupon,
  selectCoupon,
  selectSeletedCoupon,
} from "@/redux/features/couponSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"
import useCouponQuery from "../cart/hooks/useCouponQuery"

const CouponSelect = () => {
  const dispatch = useAppDispatch()

  const { coupons } = useCouponQuery()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCoupon, setSelectedCoupon] = useState("")

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelectChange = (
    event: SelectChangeEvent<typeof selectedCoupon>
  ) => {
    const findedCoupon = coupons?.find(
      (coupon) => coupon.name === event.target.value
    )

    if (!findedCoupon) {
      setSelectedCoupon("")
      dispatch(resetCoupon())
    }

    if (findedCoupon) {
      setSelectedCoupon(findedCoupon.name ?? "")
      dispatch(selectCoupon(findedCoupon))
    }

    handleClose()
  }

  return (
    <Select
      id="coupon-select"
      name="coupon-select"
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      displayEmpty
      value={selectedCoupon}
      onChange={handleSelectChange}
      input={<OutlinedInput />}
      renderValue={(selected: string) => {
        if (selected.length === 0) {
          return `사용 가능 쿠폰 ${coupons?.length} 장`
        }

        return selected
      }}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 4.5 + 8,
            width: "200px",
          },
        },
      }}
      sx={{
        width: "500px",
        height: "50px",
        fontSize: "16px",
        border: "1px solid rgb(180, 180, 180)",

        "& .MuiOutlinedInput-notchedOutline": {
          border: "rgb(180, 180, 180)",
        },
      }}
      className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] dark:text-white w-full`}
    >
      <MenuItem
        value=""
        className="sm:text-[12px] md:text-[14px] text-lightBlack"
      >
        선택안함
      </MenuItem>
      {coupons?.map((coupon, index) => (
        <MenuItem
          key={`coupon-${index}`}
          value={coupon.name}
          className="sm:text-[12px] md:text-[14px]"
        >
          {coupon.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CouponSelect
