import { numberToLocaleString } from "@/common/utils/text"
import Image from "next/image"
import { ProductInCart } from "../types/cart"
import ProductInCartController from "./ProductInCartController"

interface IProductInCart {
  productInfo: ProductInCart
  isChecked: boolean
  onClickCheck: () => void
}

const ProductInCart = ({
  productInfo,
  isChecked,
  onClickCheck,
}: IProductInCart) => {
  const { image, name, discountedPrice, mallName, price, discount } =
    productInfo
  return (
    <li className="flex mb-[30px]">
      <input
        type="checkbox"
        className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
        checked={isChecked}
        onChange={onClickCheck}
      />

      <div className="relative flex grow border-[1px] border-border rounded-[5px]">
        <div className="w-[200px] h-[200px] md:w-[180px] md:h-[180px] sm:w-[120px] sm:h-[180px] mr-[20px] rounded-l-[5px] border-r-[1px] border-border overflow-hidden">
          <Image
            className="w-full h-full"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>

        <ProductInCartController productInfo={productInfo}>
          {/* TODO : 유틸리티 함수로 날짜 수정하기 */}
          <span className="absolute left-0 top-[40px] md:top-[30px] sm:top-[28px] p-[5px] text-[12px] md:text-[10px] sm:text-[10px] bg-black text-white rounded-[8px]">
            12/27 예약배송
          </span>
          <p className="absolute top-[10px] left-0 text-lightGray text-[14px] md:text-[12px] sm:text-[10px] mb-[12px]">
            [ {mallName} ]
          </p>
          <p className="absolute md:text-[14px] sm:text-[12px] top-[70px] md:top-[60px] sm:top-[55px] left-0 flex w-5/7 h-[50.4px] md:h-[42px] sm:h-[36px] pr-[20px] mb-[12px] font-bold flex-wrap overflow-hidden">
            {name}
          </p>
          <p className="absolute right-[20px] text-[13px] md:text-[12px] sm:text-[11px] text-border line-through bottom-[40px]">
            {price}
          </p>
          <p className="absolute right-[20px] text-[16px] md:text-[14px] sm:text-[12px] font-bold bottom-[20px]">
            <span className="text-lightRed mr-[5px]">[{discount}%]</span>
            {numberToLocaleString(discountedPrice)}
          </p>
        </ProductInCartController>
      </div>
    </li>
  )
}

export default ProductInCart
