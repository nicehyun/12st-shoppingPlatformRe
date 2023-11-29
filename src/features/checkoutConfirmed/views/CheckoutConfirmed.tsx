import Loading from "@/features/common/views/Loading"

import { Suspense } from "react"
import CheckoutConfirmedController from "./CheckoutConfirmedController"
import CheckoutConfirmedInfo from "./CheckoutConfirmedInfo"

const CheckoutConfirmed = () => {
  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-center font-bold text-[24px] md:text-[22px] sm:text-[20px] mb-[14px] tracking-widest">
        주문완료
      </h1>
      <p className="text-center md:text-[14px] sm:text-[14px] border-b-[4px] border-black dark:border-white pb-[40px] mb-[40px]">
        주문이 정상적으로 완료되었습니다
      </p>

      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <CheckoutConfirmedInfo />
      </Suspense>

      <CheckoutConfirmedController />
    </div>
  )
}

export default CheckoutConfirmed
