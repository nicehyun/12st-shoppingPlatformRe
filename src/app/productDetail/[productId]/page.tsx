import { Product } from "@/features/common/types/product"
import ProductDetail from "@/features/productDetail/ProductDetail"
import { productDeatilAPI } from "@/features/productDetail/model/productDetailAPI"
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import { Metadata, ResolvingMetadata } from "next"

interface IProductDetailPageParams {
  params: {
    productId: string
  }
}

export async function generateMetadata(
  { params }: IProductDetailPageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = params.productId

  const product: Product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`
  ).then((res) => res.json())

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${product.name} - 12ST`,
    description: product.name,
    openGraph: {
      images: [product.image, ...previousImages],
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
