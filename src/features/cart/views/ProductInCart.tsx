import {
  discountedProductPrice,
  numberToLocaleString,
} from "@/features/common/utils/price"
import Image from "next/image"
import { ProductInCart } from "../types/cart"
import ProductInCartController from "./ProductInCartController"

interface IProductInCart {
  productInfo: ProductInCart
  isChecked: boolean
  onClickCheck: () => void
  onEmptyCheckedProductList: () => void
}

const ProductInCart = ({
  productInfo,
  isChecked,
  onClickCheck,
  onEmptyCheckedProductList,
}: IProductInCart) => {
  const { image, name, mallName, price, discount, id } = productInfo

  return (
    <li className="flex mb-[30px]">
      <input
        type="checkbox"
        id={`cartCheckbox-product-${id}`}
        className="mr-[10px] w-[18px] h-[18px] md:w-[16px] md:h-[16px] sm:w-[14px] sm:h-[14px] cursor-pointer"
        checked={isChecked}
        onChange={onClickCheck}
      />

      <div className="relative flex grow border-[1px] border-border rounded-[5px] overflow-hidden">
        <div className="relative w-[200px] h-[200px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] mr-[20px] border-r-[1px] border-border overflow-hidden">
          <Image
            src={image}
            alt={`상품사진이 준비되지 않았습니다. - ${name}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
          />
        </div>

        <ProductInCartController
          productInfo={productInfo}
          onEmptyCheckedProductList={onEmptyCheckedProductList}
        >
          <p className="absolute top-[10px] left-0 text-lightGray text-[14px] md:text-[12px] sm:text-[10px] mb-[12px]">
            [ {mallName} ]
          </p>
          <p className="absolute truncate-2 md:text-[14px] sm:text-[12px] top-[40px] md:top-[35px] sm:top-[30px] left-0 flex w-5/7 h-[50.4px] md:h-[42px] sm:h-[36px] pr-[20px] mb-[12px] font-bold flex-wrap">
            {name}
          </p>
          <p className="absolute right-[10px] text-[14px] md:text-[10px] sm:text-[10px] text-border line-through bottom-[40px] sm:bottom-[25px] md:bottom-[25px]">
            {numberToLocaleString(price)}
          </p>
          <p className="absolute right-[10px] text-[14px] md:text-[12px] sm:text-[12px] font-bold bottom-[20px] sm:bottom-[10px] md:bottom-[10px]">
            <span className="text-lightRed mr-[5px]">[{discount}%]</span>
            {numberToLocaleString(discountedProductPrice(price, discount))}
          </p>
        </ProductInCartController>
      </div>
    </li>
  )
}

export default ProductInCart
