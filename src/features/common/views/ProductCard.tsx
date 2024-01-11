"use client"

import { BiCommentDetail } from "react-icons/bi"
import { MdOutlineSell } from "react-icons/md"
import { Product } from "../types/product"
import { discountedProductPrice, numberToLocaleString } from "../utils/price"
import Image from "next/image"
import Link from "next/link"

interface IProductCard {
  productInfo: Product
  isPriority?: boolean
  label?: string | number
}

const ProductCard = ({
  productInfo,
  isPriority = false,
  label,
}: IProductCard) => {
  const {
    brand,
    maker,
    mallName,
    name,
    image,
    price,
    discount,
    reviewCount,
    sellCount,
    id,
  } = productInfo

  const productBrandInfo = brand || maker || mallName

  // TODO : conditioal skeleton UI 적용해서 쉬프트 없애기
  return (
    <div>
      <div className="relative overflow-hidden text-[12px] text-center aspect-w-1 aspect-h-1">
        <Link
          href={`/productDetail/${productInfo.id}`}
          className={`cursor-pointer `}
        >
          <Image
            fill
            priority={isPriority}
            src={image}
            alt={`상품사진이 준비되지 않았습니다. - ${name}`}
            sizes="(max-width: 767px) 50vw, 25vw"
          />

          {label && (
            <span className="absolute top-0 left-0 bg-black dark:bg-white w-[50px] h-[50px] flexCenter text-white dark:text-black text-[20px] font-bold">
              {label}
            </span>
          )}
        </Link>
      </div>

      <div className="py-[15px] dark:text-white">
        <p className="text-[14px] sm:text-[12px] mb-[15px] text-gray dark:text-border font-semibold">
          {productBrandInfo}
        </p>

        <Link
          href={`/productDetail/${productInfo.id}`}
          className="text-[14px] sm:text-[12px] h-[42px] sm:h-[33.6px] truncate-2 mb-[10px] font-medium"
        >
          {name}
        </Link>
        <p className="pt-[10px] border-t-[1px] border-lightBorder text-border text-[13px] sm:text-[12px] line-through">
          {numberToLocaleString(price)}
        </p>
        <p className="font-bold mb-[20px] sm:text-[15px]">
          <span className="text-lightRed mr-[10px] text-[14px] sm:text-[13px]">
            {discount}%
          </span>

          {numberToLocaleString(discountedProductPrice(price, discount))}
        </p>

        <div className="flex items-center text-[14px] sm:text-[12px]">
          <MdOutlineSell />
          <span className="ml-[3px] mr-[8px] text-[10px]">{sellCount}</span>
          <BiCommentDetail />
          <span className="ml-[3px] text-[10px]">{reviewCount}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
