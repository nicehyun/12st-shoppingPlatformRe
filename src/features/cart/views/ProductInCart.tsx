import { numberToLocaleString } from "@/common/utils/text"
import Image from "next/image"
import { ProductInCart } from "../types/cart"
import ProductInCartController from "./ProductInCartController"

interface IProductInCart {
  productInfo: ProductInCart
  isChecked: boolean
  onClickCheck: () => void
  resetChecked: () => void
}

const ProductInCart = ({
  productInfo,
  isChecked,
  onClickCheck,
  resetChecked,
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

      <div className="relative flex grow border-[1px] border-border rounded-[5px] overflow-hidden">
        <div className="relative w-[200px] h-[200px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] mr-[20px] border-r-[1px] border-border overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill={true}
            sizes="(max-width: 767px) 100vw, (max-width: 479px) 100vw, 100vw"
          />
          {/* TODO : 유틸리티 함수로 날짜 수정하기 */}
          <span className="absolute left-[2px] top-[2px] p-[4px] text-[10px] md:text-[8px] sm:text-[8px] bg-black text-white rounded-[8px]">
            12/27 예약배송
          </span>
        </div>

        <ProductInCartController
          productInfo={productInfo}
          resetChecked={resetChecked}
        >
          <p className="absolute top-[10px] left-0 text-lightGray text-[14px] md:text-[12px] sm:text-[10px] mb-[12px]">
            [ {mallName} ]
          </p>
          <p className="absolute md:text-[14px] sm:text-[12px] top-[40px] md:top-[35px] sm:top-[30px] left-0 flex w-5/7 h-[50.4px] md:h-[42px] sm:h-[36px] pr-[20px] mb-[12px] font-bold flex-wrap overflow-hidden">
            {name}
          </p>
          <p className="absolute right-[10px] text-[14px] md:text-[10px] sm:text-[10px] text-border line-through bottom-[40px] sm:bottom-[25px] md:bottom-[25px]">
            {price}
          </p>
          <p className="absolute right-[10px] text-[14px] md:text-[12px] sm:text-[12px] font-bold bottom-[20px] sm:bottom-[10px] md:bottom-[10px]">
            <span className="text-lightRed mr-[5px]">[{discount}%]</span>
            {numberToLocaleString(discountedPrice)}
          </p>
        </ProductInCartController>
      </div>
    </li>
  )
}

export default ProductInCart
