import { useQuery } from "@tanstack/react-query"
import { getBestSellingProducts } from "../models/products"

export const useBestSellingProductsQuery = () => {
  const { data: products } = useQuery(["bestProducts"], getBestSellingProducts)

  return { products }
}
