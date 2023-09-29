"use client"

import { numberToLocaleString } from "@/common/utils/price"
import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import React from "react"
import { getPaymentContent, Payment } from "../utils/payment"
import CheckoutConfirmedInfoEl from "./CheckoutConfirmedInfoEl"

const CheckoutConfirmedInfo = () => {
  const { currentCheckoutList } = useGetCheckoutListQuery()
  const {
    totalDeliveryFee,
    discountedPriceWithCoupon,
    totalPriceOfCheckedProduct,
  } = useCheckoutPrice()

  const totalPrice =
    totalPriceOfCheckedProduct -
    discountedPriceWithCoupon +
    totalDeliveryFee -
    currentCheckoutList.useMile

  const selectPayment =
    currentCheckoutList?.payment.creditName ??
    getPaymentContent(currentCheckoutList?.payment.selectedPayment as Payment)
  return (
    <section className="border-[1px] border-border bg-white text-black rounded-[5px]">
      <CheckoutConfirmedInfoEl title="결제정보">
        <span className="font-semibold mb-[3px]">{selectPayment}</span>

        <span className="font-semibold mb-[10px]">
          {currentCheckoutList?.payment.period}
        </span>
        <span>
          <span className="text-lightRed font-bold">
            {numberToLocaleString(totalPrice)}
          </span>
          원
        </span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="주문정보">
        {currentCheckoutList?.prductList.map((product, index) => (
          <span
            key={product.id}
            className={`w-full truncate ${
              index === currentCheckoutList?.prductList.length - 1
                ? ""
                : "mb-[10px]"
            } font-semibold`}
          >
            {product.name}
          </span>
        ))}
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송지">
        <span className="mb-[10px] font-semibold">
          {currentCheckoutList?.recipient}
        </span>
        <span className="text-gray mb-[10px]">
          {currentCheckoutList?.phone1}
        </span>

        <span className="font-semibold mb-[3px]">
          {currentCheckoutList?.address}
        </span>
        <span className="font-semibold mb-[3px]">
          {currentCheckoutList?.additionalAddress}
        </span>
        <span className="text-gray text-[14px]">
          ({currentCheckoutList?.zipcode})
        </span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송 방법">
        <span className="text-gray font-semibold">택배</span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송 방법" isEndEl>
        <span className="text-gray font-semibold">
          {currentCheckoutList?.deliveryMemo}
        </span>
      </CheckoutConfirmedInfoEl>
    </section>
  )
}

export default CheckoutConfirmedInfo
