import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"

export const useProductListInCartQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const {
    data: productListInCart,
    isError,
    isLoading,
  } = useQuery(
    ["productListInCart"],
    () => cartAPI.getProductListInCart(sessionQuery?.user.email ?? ""),
    {
      // suspense: true,
      enabled: !!sessionQuery,
    }
  )

  return {
    productListInCart: productListInCart ?? [],
    isError,
    isLoading,
  }
}
