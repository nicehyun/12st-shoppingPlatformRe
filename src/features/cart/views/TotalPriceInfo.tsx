import { BiMinus, BiPlus } from "react-icons/bi"
import TotalPriceEl from "./TotalPriceEl"

const TotalPriceInfo = () => {
  return (
    <div className="grow max-h-[300px] bg-white sm:mr-[5px] md:mr-[5px] rounded-[5px] shadow border-[1px] border-border py-[30px] px-[20px] text-black">
      <h3 className="mb-[20px] pb-[20px] border-b-[2px] border-black">
        결제 예정금액 / 총<span className="totalAmount">10</span>개
      </h3>

      <TotalPriceEl individualTitle="총 상품금액" price={10000} />
      <TotalPriceEl
        individualTitle="쿠폰 사용"
        price={10000}
        icon={<BiMinus />}
      />
      <TotalPriceEl
        individualTitle="마일리지 사용"
        price={10000}
        icon={<BiMinus />}
      />
      <TotalPriceEl individualTitle="배송비" price={10000} icon={<BiPlus />} />
      <TotalPriceEl
        individualTitle="총 결제금액"
        price={10000}
        isFinalPrice={true}
      />
    </div>
  )
}

export default TotalPriceInfo
