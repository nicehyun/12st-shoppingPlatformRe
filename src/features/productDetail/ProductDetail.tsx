import ProductMainInfo from "./ProductMainInfo"
import ProductDetailInfo from "./ProductDetailInfo"

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

interface IProductDetailLayout {
  productId: string
}

const ProductDetail = ({ productId }: IProductDetailLayout) => {
  return (
    <div>
      <h2 className="font-bold text-[18px] mb-[50px] pb-[20px] border-b-[1px] border-border text-lightBlack dark:text-white">
        상품번호 :{" "}
        <span className="text-black dark:text-white">
          {dummyproductData.id}
        </span>
      </h2>

      <ProductMainInfo />

      <ProductDetailInfo />
    </div>
  )
}

export default ProductDetail
