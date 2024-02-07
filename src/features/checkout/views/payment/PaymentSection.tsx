"use client"

import { resetSelectPayment } from "@/redux/features/checkoutSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import PaymentBenefit from "./PaymentBenefit"
import PaymentList from "../../../layout/views/PaymentList"
import CheckoutSection from "../CheckoutSection"
import PaymentHeader from "./PaymentHeader"
import OpecityContainer from "../OpecityContainer"
import CreditSelectLayout from "./CreditSelectLayout"
import ArrowToggleButton from "../ArrowToggleButton"
import { useToggle } from "../../hooks/useToggle"

const PaymentSection = () => {
  const { isShowDetail, toggleShowDetail } = useToggle()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetSelectPayment())
  }, [])

  return (
    <CheckoutSection>
      <PaymentHeader>
        <ArrowToggleButton
          isShowDetail={isShowDetail}
          toggleShowDetail={toggleShowDetail}
        />
      </PaymentHeader>

      <OpecityContainer isShowDetail={isShowDetail} maxHeight={500}>
        <PaymentList />
        <CreditSelectLayout />
        <PaymentBenefit />
      </OpecityContainer>
    </CheckoutSection>
  )
}

export default PaymentSection
