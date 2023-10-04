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

  const onClickAddProductInCart = async () => {
    authentication()

    if (productListInCart.length >= 10) return

    addMutaion.mutate()
  }

  const onClickRemoveProductFromCart = () => {
    removeMutaion.mutate(id)
  }

  return (
    <div className="relative w-[200px] lg:w-[180px]  md:w-[130px] sm:w-[120px] mr-[20px]">
      <div className="relative w-[200px] h-[200px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] overflow-hidden text-[12px] text-center border-[1px] border-border">
        <Image
          src={image}
          alt={`상품사진이 준비되지 않았습니다. - ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <p className="text-[12px] sm:text-[10px] my-[15px] text-gray">
        {productBrandInfo}
      </p>
      <p className="text-[14px] sm:text-[12px] h-[42px] sm:h-[33.6px] truncate-2 mb-[10px] font-medium">
        {name}
      </p>
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

      {isExistedProductInCart ? (
        <button
          onClick={onClickRemoveProductFromCart}
          className="text-[18px] sm:text-[16px] absolute right-[8px] bottom-[2px]"
        >
          <BsFillCartDashFill />
        </button>
      ) : (
        <button
          onClick={onClickAddProductInCart}
          className="text-[18px] sm:text-[16px] absolute right-[8px] bottom-[2px]"
        >
          <BsFillCartPlusFill />
        </button>
      )}
    </div>
  )
}

export default ProductCard
