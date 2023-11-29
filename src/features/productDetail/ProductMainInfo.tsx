import Image from "next/image"
import ProductDetailController from "./ProductDetailController"
import ProductDeliveryInfo from "./ProductDeliveryInfo"
import ProductPriceInfo from "./ProductPriceInfo"
import ProductNameAndHeart from "./ProductNameAndHeart"

const dummyproductData = {
  id: "10027645998",
  discountedPrice: 23655,
  price: 28500,
  maker: "",
  name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
  deliveryFree: 2500,
  sellCount: 57,
  discount: 17,
  mallName: "화이트워터보이즈",
  image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
  category3: "바지",
  category2: "남성의류",
  reviewCount: 0,
  brand: "화이트워터보이즈",
  category1: "패션의류",
  category4: "",
}

const ProductMainInfo = () => {
  return (
    <section className="flex md:flex-col sm:flex-col mb-[50px]">
      <div className="overflow-hidden text-[12px] text-center mr-[20px] w-1/2 md:w-full sm:w-full">
        <Image
          src={dummyproductData.image}
          alt={`상품사진이 준비되지 않았습니다. - ${dummyproductData.name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <div className="w-1/2 md:w-full sm:w-full border-t-[2px] dark:border-white sm:mt-[20px] md:mt-[20px] flex-grow">
        <ProductNameAndHeart name={dummyproductData.name} />
        <ProductPriceInfo
          discount={dummyproductData.discount}
          price={dummyproductData.price}
        />

        <ProductDeliveryInfo deliveryFree={dummyproductData.deliveryFree} />

        <ProductDetailController />
      </div>
    </section>
  )
}

export default ProductMainInfo
