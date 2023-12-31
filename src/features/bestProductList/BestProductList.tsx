"use client"

import ProductCard from "../common/views/ProductCard"
import { Fragment, use } from "react"

import { bestProductListAPI } from "./models/bestProductListAPI"
import { useGetBestProductListWithCategoryQuery } from "./hooks/useGetBestProductListWithCategoryQuery"

interface IBestProductList {
  categoriesPath: string[] | undefined
}

const BestProductList = ({ categoriesPath }: IBestProductList) => {
  const fommatedCategoriesPath = categoriesPath ?? []

  const { bestProductListWithCategory } =
    useGetBestProductListWithCategoryQuery(fommatedCategoriesPath)

  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
      {bestProductListWithCategory.map((product, index) => (
        <Fragment key={`best-product-${product.id}`}>
          <div className="relative">
            <ProductCard productInfo={product} />
            <span className="absolute top-0 left-0 bg-black w-[50px] h-[50px] flexCenter text-white text-[20px] font-bold">
              {index + 1}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default BestProductList
