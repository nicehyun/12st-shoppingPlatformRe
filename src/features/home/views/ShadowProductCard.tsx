import { Product } from "@/features/common/types/product"
import {
  discountedProductPrice,
  numberToLocaleString,
} from "@/features/common/utils/price"
import Image from "next/image"

interface IArrivalProductCard {
  productInfo: Product
}

const ShadowProductCard = ({ productInfo }: IArrivalProductCard) => {
  const { brand, maker, mallName, name, image, price, discount } = productInfo

  const productBrandInfo = brand || maker || mallName

  return (
    <div className="m-w-[500px]">
      <div className="rounded-[8px] mb-[20px] w-full h-[500px] lg:h-[350px] md:h-[300px] sm:h-[200px] bg-black text-[12px] cardShadow">
        <Image
          src={image}
          alt={`상품사진이 준비되지 않았습니다. - ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col text-[14px] md:text-[12px] lg:w-1/2 xl:w-1/2">
        <span className="font-bold mb-[5px]">{productBrandInfo}</span>
        <span className="truncate-2 mb-[5px] font-medium">{name}</span>
        <span className="text-lightRed font-bold mb-[5px]">
          <span className="mr-[5px]">{discount}%</span>
          <span>
            {numberToLocaleString(discountedProductPrice(price, discount))}원
          </span>
        </span>
      </div>
    </div>
  )
}

export default ShadowProductCard
