import { Product } from "@/features/common/types/product"
import ProductDetail from "@/features/productDetail/views/ProductDetail"
import { productDeatilAPI } from "@/features/productDetail/model/productDetailAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Metadata } from "next"
import { redirect } from "next/navigation"

interface IProductDetailPageParams {
  params: {
    productId: string
  }
}

export async function generateMetadata({
  params,
}: IProductDetailPageParams): Promise<Metadata> {
  const productId = params.productId

  const product: Product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`
  ).then((res) => res.json())

  return {
    title: `${product.name} - 12ST`,
    description: `${product.name}-${product.id} 상세 보기`,
    openGraph: {
      images: [product.image],
    },
  }
}

const ProductDetailPage = async ({ params }: IProductDetailPageParams) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["productDetail", params.productId], () =>
    productDeatilAPI.getProductInfo(params.productId)
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ProductDetail productId={params.productId} />
    </Hydrate>
  )
}

export default ProductDetailPage
