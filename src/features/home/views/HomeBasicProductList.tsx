import { InfinityProductResponse } from "@/features/common/types/product"
import FourGridProductList from "@/features/common/views/FourGridProductList"
import ProductCard from "@/features/common/views/ProductCard"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"
import { InfiniteData } from "@tanstack/react-query"

interface IHomeBasicProductList {
  isLoading: boolean
  productList: InfiniteData<InfinityProductResponse> | undefined
  sectionClassification: string
}

const HomeBasicProductList = ({
  isLoading,
  productList,
  sectionClassification,
}: IHomeBasicProductList) => {
  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }
  return (
    <FourGridProductList>
      {productList?.pages.flatMap((group) =>
        group.productList.map((product) => {
          return (
            <ProductCard
              key={`${sectionClassification}-product-${product.id}`}
              productInfo={product}
            />
          )
        })
      )}
    </FourGridProductList>
  )
}

export default HomeBasicProductList
