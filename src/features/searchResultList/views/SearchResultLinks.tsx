"use client"

import Link from "next/link"
import { useGetSearchMatchingNameInfinityQuery } from "../hooks/useGetSearchMatchingNameInfinityQuery"
import { useGetSearchMatchingBrandInfinityQuery } from "../hooks/useGetSearchMatchingBrandInfinityQuery"
import SkeletonSearchResultLinks from "./SkeletonSearchResultLinks"

interface ISearchResultInfo {
  searchPath: string[]
}

const SearchResultLinks = ({ searchPath }: ISearchResultInfo) => {
  const [classification, searchPrams] = searchPath

  const decodedsearchPrams = decodeURIComponent(searchPrams)

  const {
    totalCount: productTotalCount,
    isLoading: isGetSearchMatchingNameLoading,
  } = useGetSearchMatchingNameInfinityQuery()
  const {
    totalCount: BrandTotalCount,
    isLoading: isGetSearchMatchingBrandLoading,
  } = useGetSearchMatchingBrandInfinityQuery()

  if (isGetSearchMatchingNameLoading || isGetSearchMatchingBrandLoading) {
    return <SkeletonSearchResultLinks />
  }

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
        PRODUCT(
        {productTotalCount})
      </Link>
      <Link
        href={`/searchProductList/brand/${decodedsearchPrams}`}
        className={`block w-1/2 flexCenter text-[20px] ${
          classification === "brand"
            ? "font-extrabold"
            : "text-border font-thin"
        }`}
      >
        BRAND(
        {BrandTotalCount})
      </Link>
    </div>
  )
}

export default SearchResultLinks
