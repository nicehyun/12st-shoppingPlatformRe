import Image from "next/image"

const CheckoutOrderListInfo = () => {
  return (
    <div className="border-t-[2px] border-black">
      <h3 className="py-[18px] font-bold border-b-[1px] border-border">
        주문상품 정보
      </h3>

      <div className="py-[18px] flex justify-between">
        <div className="grow">
          <span className="text-lightBlack text-[14px]">슈퍼서브</span>
          <p className="font-bold mb-[40px]">상품이름상품이름상품이름</p>

          <p className="text-lightRed">
            <span>[29%]</span> <span>76,900원</span> / <span>수량 1개</span>
          </p>
        </div>

        {/* TODO :  <Image />  적용하기*/}
        <div className="border-[1px] boder-black w-[120px] h-[120px] ml-[20px]">
          이미지
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrderListInfo
