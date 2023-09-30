"use client"

import HomeProductsSection from "./HomeProductsSection"
import bestImage from "/public/images/best.png"
import { useBestSellingProducts } from "../hooks/useBestSellingProducts"
import { Pagination, Stack } from "@mui/material"
import { useState } from "react"

const HomeBestProducts = () => {
  const { products } = useBestSellingProducts()

  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const renderBestProductList = products?.slice(page - 1, page + 4) ?? []

  return (
    <>
      <HomeProductsSection
        products={renderBestProductList}
        onMoreClick={() => {}}
        sectionImage={bestImage}
        sectionTitle="12st BEST"
      />

      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}

export default HomeBestProducts
