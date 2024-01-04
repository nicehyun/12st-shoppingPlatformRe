"use client"

import ProductCard from "../common/views/ProductCard"
import { Fragment } from "react"
import { useGetBestProductListWithCategoryQuery } from "./hooks/useGetBestProductListWithCategoryQuery"
import FourGridProductList from "../common/views/FourGridProductList"

interface IBestProductList {
  categoriesPath: string[] | undefined
}

const BestProductList = ({ categoriesPath }: IBestProductList) => {
  const fommatedCategoriesPath = categoriesPath ?? []

  const { bestProductListWithCategory } =
    useGetBestProductListWithCategoryQuery(fommatedCategoriesPath)

  return (
    <FourGridProductList className="mt-[50px]">
      {bestProductListWithCategory.map((product, index) => (
        <Fragment key={`best-product-${product.id}`}>
          <ProductCard productInfo={product} isPriority label={index + 1} />
        </Fragment>
      ))}
    </FourGridProductList>
  )
}

export default BestProductList
