import { numberToLocaleString } from "@/common/utils/price"
import Image from "next/image"
import { ProductInCart } from "../cart/types/cart"

interface ICheckoutOrderListEl {
  prductInfo: ProductInCart
}

const CheckoutOrderListEl = ({ prductInfo }: ICheckoutOrderListEl) => {
  const {
    mallName,
    brand,
    maker,
    name,
    discount,
    amount,
    image,
    discountedPrice,
  } = prductInfo

  const productBrandInfo = brand || maker || mallName
  return (
    <li className="py-[18px] flex justify-between border-t-[1px] border-border">
      <div className="grow">
        <span className="text-lightBlack text-[14px]">{productBrandInfo}</span>
        <p className="font-bold mb-[40px] h-[67.2px] w-[400px] md:w-[300px] sm:w-[200px] overflow-hidden">
          {name}
        </p>

        <p className="text-lightRed font-bold md:text-[14px]">
          <span>[{discount}%]</span>{" "}
          <span>{numberToLocaleString(discountedPrice)}원</span> /{" "}
          <span>수량 {amount}개</span>
        </p>
      </div>

      <div className="relative border-[1px] boder-black w-[200px] h-[200px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] ml-[20px]">
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

export default CheckoutOrderListEl
