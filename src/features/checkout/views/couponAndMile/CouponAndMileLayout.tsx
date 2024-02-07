"use client"

import { useState } from "react"
import CouponSelect from "./CouponSelect"
import CouponAndMileWrap from "./CouponAndMileWrap"
import CheckoutSection from "../CheckoutSection"
import SelectedCouponAndMileInfo from "./SelectedCouponAndMileInfo"
import CouponAndMileHeader from "./CouponAndMileHeader"
import OpecityContainer from "../OpecityContainer"
import MileInput from "./MileInput"
import AvailableMileInfo from "./AvailableMileInfo"

const CouponAndMileLayout = () => {
  const [isShowDetail, setIsShowDetail] = useState(true)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <CheckoutSection>
      <CouponAndMileHeader>
        <SelectedCouponAndMileInfo
          isShowDetail={isShowDetail}
          toggleShowDetail={toggleShowDetail}
        />
      </CouponAndMileHeader>

      <OpecityContainer isShowDetail={isShowDetail}>
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

export default CouponAndMileLayout
