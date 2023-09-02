import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"

const CouponBar = () => {
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
            // value={seletedCoupon.title}
            // label="Coupon"
            // onChange={onSelectCoupon}
            // disabled={isCouponDisabled}
          >
            <MenuItem value="선택안함" className="text-[14px]">
              선택안함
            </MenuItem>
            {/* {coupons.map((coupon, idx) => (
              <MenuItem key={idx} value={coupon.title} className="coupon-item">
                {coupon.title}
              </MenuItem>
            ))} */}
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
