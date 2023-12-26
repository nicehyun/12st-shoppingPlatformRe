import { layoutAPI } from "@/features/layout/models/layoutAPI"
import Link from "next/link"
import { use } from "react"

interface ISearchResultInfo {
  searchPath: string[]
}

const SearchResultInfo = ({ searchPath }: ISearchResultInfo) => {
  const [classification, searchPrams] = searchPath

  const decodedsearchPrams = decodeURIComponent(searchPrams)

  const { filteredProductsMatchingName, filteredProductsMatchingBrand } = use(
    layoutAPI.getSearchResult(decodedsearchPrams)
  )

  return (
    <div className="border-b-[4px] h-[100px] mt-[50px] flexCenter">
      <Link
        href={`/searchProductList/product/${decodedsearchPrams}`}
        className={`block w-1/2 flexCenter text-[20px] ${
          classification === "product"
            ? "font-extrabold"
            : "text-border font-thin"
        }`}
      >
        PRODUCT({filteredProductsMatchingName.length})
      </Link>
      <Link
        href={`/searchProductList/brand/${decodedsearchPrams}`}
        className={`block w-1/2 flexCenter text-[20px] ${
          classification === "brand"
            ? "font-extrabold"
            : "text-border font-thin"
        }`}
      >
        BRAND({filteredProductsMatchingBrand.length})
      </Link>
    </div>
  )
}

export default SearchResultInfo
