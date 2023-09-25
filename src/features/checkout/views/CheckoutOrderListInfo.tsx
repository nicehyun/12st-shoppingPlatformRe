import useCheckoutPrice from "@/features/cart/hooks/useCheckoutPrice"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"

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

      <button
        type="button"
        className="font-bold text-[16px] flexCenter w-full h-[50px] my-[30px]"
        onClick={toggleShowDetail}
      >
        총{" "}
        <span className="text-lightRed mx-[5px]">
          {checkedProductList.length}건
        </span>{" "}
        전체
        {isShowDetail ? " 보기 닫기" : " 보기"}{" "}
        <span className="ml-[5px]">
          {isShowDetail ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </span>
      </button>
    </section>
  )
}

export default CheckoutOrderListInfo
