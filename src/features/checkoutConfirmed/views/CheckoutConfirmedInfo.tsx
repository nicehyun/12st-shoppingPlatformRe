"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import CheckoutConfirmedInfoEl from "./CheckoutConfirmedInfoEl"
import Loading from "@/features/common/views/Loading"
import { useEffect } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { emptyCheckoutPendingProductList } from "@/redux/features/checkoutSlice"
import { Payment } from "@/features/checkout/views/payment/PaymentButton"
import { useRecentCheckoutInfo } from "../hooks/useRecentCheckoutInfo"
import Empty from "@/features/common/views/Empty"
import { ROUTE } from "@/features/common/hooks/useNavigations"

const CheckoutConfirmedInfo = () => {
  const dispatch = useAppDispatch()

  const { totalPrice, recentCheckoutInfo, isLoading } = useRecentCheckoutInfo()

  const paymentMethods = {
    tosspay: "토스페이",
    naverpay: "네이버페이",
    kakaopay: "카카오페이",
    samsungpay: "삼성페이",
    payco: "페이코",
    SSGpay: "SSG 페이",
    deposit: "무통장입금",
  } as const

  const getPaymentContent = (payment: Payment) => {
    return paymentMethods[payment as keyof typeof paymentMethods]
  }

  useEffect(() => {
    dispatch(emptyCheckoutPendingProductList())
  }, [])

  if (isLoading) {
    return (
      <Loading
        spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
        height="h-[400px]"
        isFrame={false}
      />
    )
  }

  if (!recentCheckoutInfo) {
    return (
      <Empty
        content="주문 내역이 없습니다."
        routeArray={[{ routeContent: "CONTINUE SHOPPING", route: ROUTE.HOME }]}
      />
    )
  }

  const selectPayment =
    recentCheckoutInfo?.payment.creditName ??
    getPaymentContent(recentCheckoutInfo?.payment.selectedPayment as Payment)
  return (
    <section className="border-[1px] border-border bg-white text-black rounded-[5px] shadow">
      <CheckoutConfirmedInfoEl title="결제정보">
        <span className="font-semibold mb-[3px]">{selectPayment}</span>

        <span className="font-medium mb-[10px]">
          {recentCheckoutInfo?.payment.period}
        </span>
        <span>
          <span className="text-lightRed font-bold">
            {numberToLocaleString(totalPrice)}
          </span>
          원
        </span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="주문정보">
        {recentCheckoutInfo?.productList.map((product, index) => (
          <span
            key={product.id}
            className={`w-full truncate ${
              index === recentCheckoutInfo?.productList.length - 1
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
          {recentCheckoutInfo?.recipient}
        </span>
        <span className="text-lightBlack mb-[10px]">
          {recentCheckoutInfo?.phone1}
        </span>

        <span className="font-medium mb-[3px]">
          {recentCheckoutInfo?.address}
        </span>
        <span className="font-medium mb-[3px]">
          {recentCheckoutInfo?.additionalAddress}
        </span>
        <span className="text-lightBlack text-[14px]">
          ({recentCheckoutInfo?.zipcode})
        </span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="배송방법">
        <span className="text-gray font-medium">택배</span>
      </CheckoutConfirmedInfoEl>

      <CheckoutConfirmedInfoEl title="요청사항" isEndEl>
        <span className="text-gray font-medium">
          {recentCheckoutInfo?.deliveryMemo}
        </span>
      </CheckoutConfirmedInfoEl>
    </section>
  )
}

export default CheckoutConfirmedInfo
