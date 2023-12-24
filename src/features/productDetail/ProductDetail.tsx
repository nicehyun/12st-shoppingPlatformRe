import ProductMainInfo from "./ProductMainInfo"
import ProductDetailInfo from "./ProductDetailInfo"
import { use } from "react"
import { productDeatilAPI } from "./model/productDetailAPI"

interface IProductDetailLayout {
  productId: string
}

const ProductDetail = ({ productId }: IProductDetailLayout) => {
  const productDetail = use(productDeatilAPI.getProductInfo(productId))

  return (
    <div>
      <h2 className="font-bold text-[18px] mb-[50px] pb-[20px] border-b-[1px] border-border text-lightBlack dark:text-white">
        상품번호 :{" "}
        <span className="text-black dark:text-white">{productDetail?.id}</span>
      </h2>

      {productDetail && <ProductMainInfo productDetail={productDetail} />}

      <ProductDetailInfo />
    </div>
  )
}

export default ProductDetail
