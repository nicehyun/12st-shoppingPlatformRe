import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"

export const useGetProductsQuery = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery(["products"], () => layoutAPI.getAllProducts())

  return {
    products,
    isError,
    isLoading,
  }
}
