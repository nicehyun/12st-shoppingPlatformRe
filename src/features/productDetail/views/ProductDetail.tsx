import ProductMainInfo from "./ProductMainInfo"
import ProductDetailInfo from "./ProductDetailInfo"

interface IProductDetailLayout {
  productId: string
}

const ProductDetail = ({ productId }: IProductDetailLayout) => {
  return (
    <div>
      <h2 className="font-bold text-[18px] mb-[50px] pb-[20px] border-b-[1px] border-border text-lightBlack dark:text-white">
        상품번호 :{" "}
        <span className="text-black dark:text-white">{productId}</span>
      </h2>

      <ProductMainInfo productId={productId} />

      <ProductDetailInfo />
    </div>
  )
}

export default ProductDetail
