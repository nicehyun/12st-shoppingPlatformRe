import { useSelectCoupon } from "../../hooks/useSelectCoupon"
import CutstomSelect from "@/features/common/views/CutstomSelect"
import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"
import { validCheckSelectCoupon } from "../../models/validCheck"
import useCheckoutPrice from "../../hooks/useCheckoutPrice"

const CouponSelect = () => {
  const {
    availableCoupons,
    selectedCoupon,
    handleSelectChange,
    handleSelectClose,
    handleSelectOpen,
    isSelectOpen,
    isLoading,
  } = useSelectCoupon()

  const [coupon1, coupon2] = availableCoupons
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()
  const { valid } = validCheckSelectCoupon(totalPriceOfCheckedProduct)

  const couponSelectProps = {
    id: "coupon",
    isSelectOpen,
    onCloseSelect: handleSelectClose,
    onOpenSelect: handleSelectOpen,
    selectedValue: selectedCoupon ? selectedCoupon.name : "",
    onChangeSelect: handleSelectChange,
    noSelectedRenderValue: `사용 가능 쿠폰 ${availableCoupons?.length} 장`,
    isDisabled: !valid,
    selectArray: [
      { ...coupon1, renderValue: coupon1 ? coupon1.name : "" },
      { ...coupon2, renderValue: coupon2 ? coupon2.name : "" },
    ],
  }

  if (isLoading) {
    return <SpanSkeletonUI className="w-full h-[44px]" />
  }

  return <CutstomSelect {...couponSelectProps} />
}

export default CouponSelect
