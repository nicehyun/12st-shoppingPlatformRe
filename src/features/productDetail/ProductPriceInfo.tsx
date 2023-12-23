import {
  accumulateDiscountPrice,
  accumulateMile,
} from "@/features/common/models/product"
import { numberToLocaleString } from "@/features/common/utils/price"
import React from "react"
import ProductMainInfoEl from "./ProductMainInfoEl"

interface IProductPriceInfo {
  price: number
  discount: number
}

const ProductPriceInfo = ({ discount, price }: IProductPriceInfo) => {
  return (
    <>
      <ProductMainInfoEl>
        <p className="text-[20px] font-bold mb-[5px]">
          {numberToLocaleString(price)}
          <span className="text-[16px]">원</span>
        </p>
        <p className="text-[14px] font-medium text-lightBlack">
          {accumulateMile(price, discount)}p (1%) 적립
        </p>
      </ProductMainInfoEl>
      <ProductMainInfoEl className="flex items-center justify-between font-bold text-[12px]">
        <span>구매 가능 가격</span>

        <p className="text-[16px]">
          <span className="text-lightRed">{discount}%</span>
          <span className="ml-[5px]">
            {numberToLocaleString(accumulateDiscountPrice(price, discount))}원
          </span>
        </p>
      </ProductMainInfoEl>
    </>
  )
}

export default ProductPriceInfo
