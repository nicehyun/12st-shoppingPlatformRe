import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import { useProductListInCartQuery } from "../cart/hooks/useProductListInCartQuery"
import CheckoutOrderListEl from "./CheckoutOrderListEl"

const CheckoutOrderListInfo = () => {
  const { productListInCart } = useProductListInCartQuery()
  const [isShowDetail, setIsShowDetail] = useState(false)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  const renderProductList = () => {
    if (isShowDetail) {
      return productListInCart.map((product) => (
        <CheckoutOrderListEl key={`order-${product.id}`} prductInfo={product} />
      ))
    } else {
      if (productListInCart.length > 0) {
        const product = productListInCart[0]
        return (
          <CheckoutOrderListEl
            key={`order-${product.id}`}
            prductInfo={product}
          />
        )
      } else {
        return null
      }
    }

    return
  }

  return (
    <div className="border-t-[2px] border-black">
      <h3 className="py-[18px] font-bold">주문상품 정보</h3>
      <ul>{renderProductList()}</ul>

      <button
        className="font-bold text-[16px] flexCenter w-full h-[50px] my-[30px]"
        onClick={toggleShowDetail}
      >
        총{" "}
        <span className="text-lightRed mx-[5px]">
          {productListInCart.length}건
        </span>{" "}
        전체
        {isShowDetail ? " 보기 닫기" : " 보기"}{" "}
        <span className="ml-[5px]">
          {isShowDetail ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </span>
      </button>
    </div>
  )
}

export default CheckoutOrderListInfo
