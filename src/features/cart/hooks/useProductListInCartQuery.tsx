import { useQuery } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useProductListInCartQuery = () => {
  const { session } = useSessionQuery()

  const {
    data: productListInCart,
    isError,
    isLoading,
    isFetching,
  } = useQuery(
    ["productListInCart"],
    () => cartAPI.getProductListInCart(session?.user.accessToken),
    {
      staleTime: 60 * 60 * 1000,
      enabled: !!session,
    }
  )

  const isInitialLoading = isLoading && isFetching

  return {
    productListInCart: productListInCart?.productList ?? [],
    isError,
    isInitialLoading,
  }
}
