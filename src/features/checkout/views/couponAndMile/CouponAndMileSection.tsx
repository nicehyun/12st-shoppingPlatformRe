"use client"

import CouponSelect from "./CouponSelect"
import CouponAndMileWrap from "./CouponAndMileWrap"
import CheckoutSection from "../CheckoutSection"
import SelectedCouponAndMileInfo from "./SelectedCouponAndMileInfo"
import CouponAndMileHeader from "./CouponAndMileHeader"
import OpecityContainer from "../OpecityContainer"
import MileInput from "./MileInput"
import AvailableMileInfo from "./AvailableMileInfo"
import ArrowToggleButton from "../ArrowToggleButton"
import { useToggle } from "../../hooks/useToggle"

const CouponAndMileSection = () => {
  const { isShowDetail, toggleShowDetail } = useToggle()

  return (
    <CheckoutSection>
      <CouponAndMileHeader>
        <SelectedCouponAndMileInfo>
          <ArrowToggleButton
            isShowDetail={isShowDetail}
            toggleShowDetail={toggleShowDetail}
          />
        </SelectedCouponAndMileInfo>
      </CouponAndMileHeader>

      <OpecityContainer isShowDetail={isShowDetail} maxHeight={300}>
        <CouponAndMileWrap classification="쿠폰">
          <CouponSelect />
        </CouponAndMileWrap>

        <CouponAndMileWrap classification="마일리지">
          <MileInput />
          <AvailableMileInfo />
        </CouponAndMileWrap>
      </OpecityContainer>
    </CheckoutSection>
  )
}

export default CouponAndMileSection
