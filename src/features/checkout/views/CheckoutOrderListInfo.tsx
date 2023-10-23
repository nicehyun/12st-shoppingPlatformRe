import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import CheckoutOrderListDetailButton from "./CheckoutOrderListDetailButton"

import CheckoutOrderListEl from "./CheckoutOrderListEl"

const CheckoutOrderListInfo = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const { calculatedDiscountPerProductArr } = useCheckoutPrice()

  const renderProductList = () => {
    if (isShowDetail) {
      return checkedProductList.map((product, index) => (
        <CheckoutOrderListEl
          key={`order-${product.id}`}
          prductInfo={product}
          discountPerProduct={calculatedDiscountPerProductArr[index]}
        />
      ))
    } else {
      if (checkedProductList.length > 0) {
        const product = checkedProductList[0]
        return (
          <CheckoutOrderListEl
            key={`order-${product.id}`}
            prductInfo={product}
            discountPerProduct={calculatedDiscountPerProductArr[0]}
          />
        )
      } else {
        return null
      }
    }
  }

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <section className="border-t-[2px] border-black">
      <h3 className="py-[18px] font-bold">주문상품 정보</h3>
      <ul>{renderProductList()}</ul>

      <CheckoutOrderListDetailButton
        isShowDetail={isShowDetail}
        onClickDetail={toggleShowDetail}
        orderListAmount={checkedProductList.length}
      />

      {/* <Button
        classNames="font-bold text-[16px] flexCenter w-full h-[50px] my-[30px]"
        onClick={toggleShowDetail}
        content={
          <span>
            총
            {
              <span className="text-lightRed mx-[5px]">
                {checkoutOrderListAmount}건
              </span>
            }{" "}
            전체 {isShowDetail ? " 보기 닫기" : " 보기"}
            {
              <span className="ml-[5px]">
                {isShowDetail ? <BsCaretUpFill /> : <BsCaretDownFill />}
              </span>
            }
          </span>
        }
      /> */}
    </section>
  )
}

export default CheckoutOrderListInfo
