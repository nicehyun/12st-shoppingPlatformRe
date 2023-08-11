import { useQuery } from "@tanstack/react-query"
import { getBestSellingProducts } from "../models/bestProducts"

export const useBestSellingProducts = () => {
  const { data: products } = useQuery(["bestProducts"], getBestSellingProducts)

  return { products }
}
