import { BiCommentDetail } from "react-icons/bi"
import { MdOutlineSell } from "react-icons/md"
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs"
import { Product } from "../types/product"

import { checkingTheExistOfProduct } from "../utils/product"
import { useProductListInCartQuery } from "@/features/cart/hooks/useProductListInCartQuery"
import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"
import useRemoveFromCartMutation from "@/features/cart/hooks/useRemoveFromCartMutation"
import { discountedProductPrice, numberToLocaleString } from "../utils/price"
import Image from "next/image"
import { useAuthenticate } from "@/features/auth/signIn/hooks/useAuthenticate"
import Button from "./Button"
import Loading from "./Loading"
import Link from "next/link"

interface IProductCard {
  productInfo: Product
}

const ProductCard = ({ productInfo }: IProductCard) => {
  const { authentication } = useAuthenticate()

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

  const { productListInCart } = useProductListInCartQuery()

  const addMutaion = useAddToCartMutaion(productInfo)

  const removeMutaion = useRemoveFromCartMutation()

  const isExistedProductInCart = checkingTheExistOfProduct(
    productListInCart,
    id
  )

  const handleAddProductInCartClick = async () => {
    authentication()

    if (productListInCart.length >= 10) return

    addMutaion.mutate()
  }

  const handleRemoveProductFromCartClick = () => {
    removeMutaion.mutate(id)
  }

  const renderComponent = () => {
    if (removeMutaion.isLoading || addMutaion.isLoading) {
      return (
        <div className="absolute right-[8px] text-border">
          <Loading
            spinnerSize={{ width: "w-[15px]", height: "h-[15px]" }}
            isFrame={false}
          />
        </div>
      )
    }

    if (isExistedProductInCart) {
      return (
        <Button
          onClick={handleRemoveProductFromCartClick}
          classNames="text-[18px] sm:text-[16px] absolute right-[8px]"
          content={<BsFillCartDashFill />}
        />
      )
    }

    return (
      <Button
        onClick={handleAddProductInCartClick}
        classNames="text-[18px] sm:text-[16px] absolute right-[8px]"
        content={<BsFillCartPlusFill />}
      />
    )
  }

  return (
    <div className="bg-white">
      <div className="overflow-hidden text-[12px] text-center aspect-w-1 aspect-h-1">
        <Link
          href={`/productInfo/${productInfo.id}`}
          className={`cursor-pointer`}
        >
          <Image
            src={image}
            alt={`상품사진이 준비되지 않았습니다. - ${name}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
          />
        </Link>
      </div>

      <div className="py-[15px]">
        <p className="text-[14px] sm:text-[12px] mb-[15px] text-gray dark:text-white font-semibold">
          {productBrandInfo}
        </p>

        <Link
          href={`/productInfo/${productInfo.id}`}
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

        <div className="relative flex items-center text-[14px] sm:text-[12px]">
          <MdOutlineSell />
          <span className="ml-[3px] mr-[8px] text-[10px]">{sellCount}</span>
          <BiCommentDetail />
          <span className="ml-[3px] text-[10px]">{reviewCount}</span>

          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default ProductCard