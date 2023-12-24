import Image from "next/image"
import ProductDetailController from "./ProductDetailController"
import ProductDeliveryInfo from "./ProductDeliveryInfo"
import ProductPriceInfo from "./ProductPriceInfo"
import ProductNameAndHeart from "./ProductNameAndHeart"
import { Product } from "../common/types/product"

interface IProductMainInfo {
  productDetail: Product
}

const ProductMainInfo = ({ productDetail }: IProductMainInfo) => {
  return (
    <section className="flex md:flex-col sm:flex-col mb-[50px]">
      <div className="overflow-hidden text-[12px] text-center mr-[20px] w-1/2 md:w-full sm:w-full">
        <Image
          src={productDetail.image}
          alt={`상품사진이 준비되지 않았습니다. - ${productDetail.name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <div className="w-1/2 md:w-full sm:w-full border-t-[2px] dark:border-white sm:mt-[20px] md:mt-[20px] flex-grow">
        <ProductNameAndHeart productDetail={productDetail} />
        <ProductPriceInfo
          discount={productDetail.discount}
          price={productDetail.price}
        />

        <ProductDeliveryInfo deliveryFree={productDetail.deliveryFree} />

        <ProductDetailController productDetail={productDetail} />
      </div>
    </section>
  )
}

export default ProductMainInfo
