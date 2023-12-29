import ProductDetail from "@/features/productDetail/ProductDetail"
import { Metadata } from "next"

interface IProductDetailPageParams {
  params: {
    productId: string
  }
}

export const metadata: Metadata = {
  title: "상품 상세 - 쇼핑 플랫폼 12ST",
}

const ProductDetailPage = ({ params }: IProductDetailPageParams) => {
  return <ProductDetail productId={params.productId} />
}

export default ProductDetailPage
