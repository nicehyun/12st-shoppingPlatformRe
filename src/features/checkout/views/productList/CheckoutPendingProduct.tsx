import { numberToLocaleString } from "@/features/common/utils/price"
import { ProductInCart } from "@/features/cart/types/cart"
import Image from "next/image"
import { accumulateDiscountPrice } from "@/features/common/models/product"
import { useSelectCoupon } from "../../hooks/useSelectCoupon"

interface ICheckoutPendingProduct {
  productInfo: ProductInCart
  discountPerProduct: number
}

const CheckoutPendingProduct = ({
  productInfo,
  discountPerProduct,
}: ICheckoutPendingProduct) => {
  const { selectedCoupon } = useSelectCoupon()

  const { mallName, brand, maker, name, discount, amount, image, price } =
    productInfo

  const productBrandInfo = brand || maker || mallName

  const productPrice = accumulateDiscountPrice(price, discount)

  return (
    <li className="py-[18px] flex justify-between border-t-[1px] border-border">
      <div className="grow">
        <span className="text-lightBlack text-[14px] sm:text-[12px] md:text-[12px]">
          {productBrandInfo}
        </span>
        <p className="font-bold mb-[10px] mt-[10px] h-[67.2px] w-[400px] md:w-[300px] sm:w-[200px] overflow-hidden">
          {name}
        </p>

        <p className="text-lightRed md:text-[14px] sm:text-[12px]">
          <span>[{discount}%]</span>{" "}
          <span>{numberToLocaleString(productPrice)}원</span> /{" "}
          <span>수량 {amount}개</span>
        </p>

        <span className="text-lightRed h-[28px] w-full md:text-[14px] sm:text-[12px] mt-[10px] block">
          {selectedCoupon &&
            `쿠폰적용가 : ${numberToLocaleString(
              productPrice - discountPerProduct
            )}원`}
        </span>
      </div>

      <div className="relative w-[200px] h-[200px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] ml-[20px]">
        <Image
          alt={name}
          src={image}
          fill={true}
          sizes="(max-width: 767px) 100vw, (max-width: 479px) 100vw, 100vw"
          priority={true}
        />
      </div>
    </li>
  )
}

export default CheckoutPendingProduct
