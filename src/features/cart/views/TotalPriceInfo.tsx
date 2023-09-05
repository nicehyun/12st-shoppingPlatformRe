"use client"
import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { selectSeletedCoupon } from "@/redux/features/couponSlice"
import { useAppSelector } from "@/redux/hooks"
import { BiMinus, BiPlus } from "react-icons/bi"
import { useProductListInCartQuery } from "../hooks/useProductListInCartQuery"
import TotalPriceEl from "./TotalPriceEl"

const TotalPriceInfo = () => {
  const checkedProductList = useAppSelector(selectCheckedProductList)
  const seletedCoupon = useAppSelector(selectSeletedCoupon)

  const { productListInCart } = useProductListInCartQuery()

  const totalPriceOfCheckedProduct =
    productListInCart !== undefined
      ? accumulationOfProductsPrice(
          productListInCart?.filter((product) =>
            checkedProductList.includes(product.id)
          )
        )
      : 0

  const discountedPriceWithCoupon =
    seletedCoupon && totalPriceOfCheckedProduct
      ? priceToUseCoupon(seletedCoupon, totalPriceOfCheckedProduct)
      : 0

  const deliveryPrice = checkedProductList.length ? 2500 : 0
  return (
    <div className="grow max-h-[300px] bg-white sm:mr-[5px] md:mr-[5px] rounded-[5px] shadow border-[1px] border-border py-[30px] px-[20px] text-black">
      <h3 className="mb-[20px] pb-[20px] border-b-[2px] border-black sm:text-[12px] md:text-[14px]">
        결제 예정금액 / 총
        <span className="totalAmount">{checkedProductList.length}</span>개
      </h3>

      <TotalPriceEl
        individualTitle="총 상품금액"
        price={totalPriceOfCheckedProduct}
      />
      <TotalPriceEl
        individualTitle="쿠폰 사용"
        price={discountedPriceWithCoupon}
        icon={<BiMinus />}
      />
      <TotalPriceEl
        individualTitle="마일리지 사용"
        price={0}
        icon={<BiMinus />}
      />
      <TotalPriceEl
        individualTitle="배송비"
        price={deliveryPrice}
        icon={<BiPlus />}
      />
      <TotalPriceEl
        individualTitle="총 결제금액"
        price={
          totalPriceOfCheckedProduct - discountedPriceWithCoupon + deliveryPrice
        }
        isFinalPrice={true}
      />
    </div>
  )
}

export default TotalPriceInfo
