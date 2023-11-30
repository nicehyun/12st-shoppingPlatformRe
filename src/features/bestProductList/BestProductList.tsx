"use client"

import { use, useState } from "react"
import { bestProductListAPI } from "./models/bestProductListAPI"
import ProductCard from "../common/views/ProductCard"
import MyPageSectionTitle from "../myPage/views/MyPageSectionTitle"
import {
  getSecondCategories,
  getThridCategories,
} from "../common/models/product"
import { dummyProductList } from "../common/models/dummyData"
import { commonAPI } from "../common/models/commonAPI"

const BestProductList = () => {
  // const bestProductList = use(bestProductListAPI.getBestProductList())
  const productList = use(commonAPI.getProductList())
  console.log(productList)

  // console.log(bestProductList)
  // const bestProductList = dummyProductList.slice(0, 100)

  // const top3ProductList = bestProductList.slice(0, 3)
  // const ProductListWithoutTop3 = bestProductList.slice(3, 100)

  // const secondCategories = getSecondCategories(bestProductList)

  // const thridCategories = getThridCategories(
  //   bestProductList,
  //   secondCategories[0]
  // )

  // console.log(secondCategories)

  // const test = fetch("http://localhost:9999/posts")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))

  return (
    <>
      <MyPageSectionTitle title="BEST" />

      <div className="border-[1px] bg-white mt-[50px] px-[10px] py-[20px]">
        {/* <div className="mb-[20px] border-b-[1px] border-border pb-[20px]">
          {firstCategories.map((category, index) => (
            <span
              key={`category-firstCategory__${category}`}
              className={`relative text-[14px] ml-[10px] ${
                index !== 0 ? "before:vertical-divider before:-mx-5" : ""
              }  mr-10 text-lightBlack`}
            >
              {category}
            </span>
          ))}
        </div> */}

        {/* <div className="mb-[20px] border-b-[1px] border-border pb-[20px]">
          {secondCategories.map((category, index) => (
            <span
              key={`category-secondCategory__${category}`}
              className={`relative text-[14px] ml-[10px] ${
                index !== 0 ? "before:vertical-divider before:-mx-5" : ""
              }  mr-10 text-lightBlack`}
            >
              {category}
            </span>
          ))}
        </div>

        <div>
          {thridCategories.map((category, index) => (
            <span
              key={`category-secondCategory__${category}`}
              className={`relative text-[14px] ml-[10px] ${
                index !== 0 ? "before:vertical-divider before:-mx-5" : ""
              }  mr-10 text-lightBlack`}
            >
              {category}
            </span>
          ))}
        </div> */}
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {[].map((product) => (
          <ProductCard productInfo={product} key={`bestProduct-${product}`} />
        ))}
      </div>
    </>
  )
}

export default BestProductList
