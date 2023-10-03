import { useQuery } from "@tanstack/react-query"
import { getTopSaleProducts } from "../models/products"

export const useTopSaleProductsQuery = () => {
  const { data: products } = useQuery(["topSaleProducts"], getTopSaleProducts)

  return { products }
}
