"use client"

import CheckoutSection from "../CheckoutSection"
import TotalPriceHeader from "./TotalPriceHeader"
import ArrowToggleButton from "../ArrowToggleButton"
import TotalPriceList from "./TotalPriceList"
import { useToggle } from "../../hooks/useToggle"
import OpecityContainer from "../OpecityContainer"

const TotalPriceSection = () => {
  const { isShowDetail, toggleShowDetail } = useToggle()

  return (
    <CheckoutSection>
      <TotalPriceHeader>
        <ArrowToggleButton
          isShowDetail={isShowDetail}
          toggleShowDetail={toggleShowDetail}
        />
      </TotalPriceHeader>

      <OpecityContainer isShowDetail={isShowDetail} maxHeight={500}>
        <TotalPriceList />
      </OpecityContainer>
    </CheckoutSection>
  )
}

export default TotalPriceSection
