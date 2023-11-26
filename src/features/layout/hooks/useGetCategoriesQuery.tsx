import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"

export const useGetCategoriesQuery = () => {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(["categories"], () => layoutAPI.getCategories())

  return {
    categories,
    isError,
    isLoading,
  }
}
