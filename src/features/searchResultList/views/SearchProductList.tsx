import ProductCard from "@/features/common/views/ProductCard"
import { layoutAPI } from "@/features/layout/models/layoutAPI"
import { use } from "react"
import NoneSearchResult from "./NoneSearchResult"

interface ISearchProductList {
  searchPath: string[]
}

const SearchProductList = ({ searchPath }: ISearchProductList) => {
  const [classification, searchPrams] = searchPath

  const decodedsearchPrams = decodeURIComponent(searchPrams)

  const { filteredProductsMatchingName, filteredProductsMatchingBrand } = use(
    layoutAPI.getSearchResult(decodedsearchPrams)
  )

  if (classification === "brand") {
    return filteredProductsMatchingBrand.length === 0 ? (
      <NoneSearchResult searchContent={decodedsearchPrams} />
    ) : (
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {filteredProductsMatchingBrand.map((product) => (
          <ProductCard
            key={`sale-product-${product.id}`}
            productInfo={product}
          />
        ))}
      </div>
    )
  }

  if (classification === "product") {
    return filteredProductsMatchingName.length === 0 ? (
      <NoneSearchResult searchContent={decodedsearchPrams} />
    ) : (
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {filteredProductsMatchingName.map((product) => (
          <ProductCard
            key={`sale-product-${product.id}`}
            productInfo={product}
          />
        ))}
      </div>
    )
  }
}

export default SearchProductList
