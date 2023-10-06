import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import useSelectCoupon from "@/features/checkout/hooks/useSelectCoupon"
import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useEffect, useState } from "react"

const CouponSelect = () => {
  const {
    handleSelectedCoupon,
    availableCoupons,
    resetSelectedCoupon,
    selectedCoupon,
  } = useSelectCoupon()

  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    handleSelectedCoupon(event)

    handleClose()
  }

  useEffect(() => {
    resetSelectedCoupon()
  }, [])

  return (
    <Select
      id="coupon-select"
      name="coupon-select"
      open={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      displayEmpty
      value={selectedCoupon ? selectedCoupon.name : ""}
      onChange={handleSelectChange}
      input={<OutlinedInput />}
      renderValue={(selected: string) => {
        if (selected.length === 0) {
          return `사용 가능 쿠폰 ${availableCoupons?.length} 장`
        }

        return selected
      }}
      disabled={totalPriceOfCheckedProduct < 15000}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 4.5 + 8,
            width: "200px",
          },
        },
      }}
      sx={{
        fontSize: "14px",
        border: "1px solid rgb(180, 180, 180)",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "rgb(180, 180, 180)",
        },
      }}
      className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] w-full bg-white dark:bg-border `}
    >
      <MenuItem
        value=""
        className="text-lightBlack sm:text-[12px] md:text-[14px]"
      >
        선택안함
      </MenuItem>
      {availableCoupons?.map((coupon, index) => (
        <MenuItem key={`coupon-${index}`} value={coupon.name}>
          {coupon.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CouponSelect
