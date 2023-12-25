import { useQuery } from "@tanstack/react-query"
import { layoutAPI } from "../models/layoutAPI"

export const useGetCategoriesQuery = () => {
  const { data, isError, isLoading } = useQuery(["categories"], () =>
    layoutAPI.getCategories()
  )

  const categories = data ?? []

  return {
    categories,
    isError,
    isLoading,
  }
}
