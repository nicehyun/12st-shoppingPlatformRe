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
<<<<<<< HEAD
      suspense: true,
=======
      // suspense: true,
      enabled: !!sessionQuery,
>>>>>>> 120e7d35f4b4673d70b178580e9b977497e227e3
    }
  )

  return {
    productListInCart: productListInCart ?? [],
    isError,
    isLoading,
  }
}
