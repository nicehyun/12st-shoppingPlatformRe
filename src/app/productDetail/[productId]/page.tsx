import ProductDetail from "@/features/productDetail/ProductDetail"

interface IProductDetailPageParams {
  params: {
    productId: string
  }
}

const ProductDetailPage = ({ params }: IProductDetailPageParams) => {
  return <ProductDetail productId={params.productId} />
}

export default ProductDetailPage
