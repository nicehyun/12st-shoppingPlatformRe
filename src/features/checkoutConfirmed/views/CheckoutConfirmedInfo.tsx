"use client"

import { numberToLocaleString } from "@/common/utils/price"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import { useCurrentCheckoutConfirmedPrice } from "../hooks/useCheckoutConfirmedPrice"
import { getPaymentContent, Payment } from "../utils/payment"
import CheckoutConfirmedInfoEl from "./CheckoutConfirmedInfoEl"

const CheckoutConfirmedInfo = () => {
  const { currentCheckoutList } = useGetCheckoutListQuery()
  const { totalPrice } = useCurrentCheckoutConfirmedPrice()

  const selectPayment =
    currentCheckoutList?.payment.creditName ??
    getPaymentContent(currentCheckoutList?.payment.selectedPayment as Payment)
  return (
    <section className="border-[1px] border-border bg-white text-black rounded-[5px] shadow">
      <CheckoutConfirmedInfoEl title="결제정보">
        <span className="font-semibold mb-[3px]">{selectPayment}</span>

        <span className="font-medium mb-[10px]">
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
        {currentCheckoutList?.productList.map((product, index) => (
          <span
            key={product.id}
            className={`w-full truncate ${
              index === currentCheckoutList?.productList.length - 1
                ? ""
                : "mb-[10px]"
            } font-medium`}
          >
            {product.name}
          </span>
        ))}
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송지">
        <span className="mb-[10px] font-medium">
          {currentCheckoutList?.recipient}
        </span>
        <span className="text-lightBlack mb-[10px]">
          {currentCheckoutList?.phone1}
        </span>

        <span className="font-medium mb-[3px]">
          {currentCheckoutList?.address}
        </span>
        <span className="font-medium mb-[3px]">
          {currentCheckoutList?.additionalAddress}
        </span>
        <span className="text-lightBlack text-[14px]">
          ({currentCheckoutList?.zipcode})
        </span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송방법">
        <span className="text-gray font-medium">택배</span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="요청사항" isEndEl>
        <span className="text-gray font-medium">
          {currentCheckoutList?.deliveryMemo}
        </span>
      </CheckoutConfirmedInfoEl>
    </section>
  )
}

export default CheckoutConfirmedInfo
