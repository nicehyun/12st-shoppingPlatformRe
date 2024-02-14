import { Products } from "@/features/common/types/product"
import FourGridProductList from "@/features/common/views/FourGridProductList"
import ProductCard from "@/features/common/views/ProductCard"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"

interface IHomeBasicProductList {
  isLoading: boolean
  productList: Products
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
      {productList.map((product) => (
        <ProductCard
          key={`${sectionClassification}-product-${product.id}`}
          productInfo={product}
          isPriority
        />
      ))}
    </FourGridProductList>
  )
}

export default HomeBasicProductList
