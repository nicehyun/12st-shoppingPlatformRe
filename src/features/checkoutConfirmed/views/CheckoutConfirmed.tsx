import Loading from "@/common/views/Loading"
import { Suspense } from "react"
import CheckoutConfirmedController from "./CheckoutConfirmedController"
import CheckoutConfirmedInfo from "./CheckoutConfirmedInfo"

const CheckoutConfirmed = () => {
  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-center font-bold text-[24px] md:text-[22px] sm:text-[20px] mb-[14px] tracking-widest">
        주문완료
      </h1>
      <p className="text-center text-gray md:text-[14px] sm:text-[14px] mb-[5px]">
        주문이 완료되었습니다
      </p>
      <p className="text-center text-gray md:text-[14px] sm:text-[14px] mb-[40px]">
        아래의 주문 정보를 확인해주세요
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
