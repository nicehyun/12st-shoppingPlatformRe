import { useQuery } from "@tanstack/react-query"
import { getArrivalProducts } from "../models/products"

export const useArrivalProductsQuery = () => {
  const { data: products } = useQuery(["arrivalProducts"], getArrivalProducts)

  return { products }
}
