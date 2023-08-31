import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getProductListInCart } from "@/firebase/firestore/cart"
import { useQuery } from "@tanstack/react-query"

export const useProductListInCartQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const {
    data: productListInCart,
    isError,
    isLoading,
  } = useQuery(["productListInCart"], () =>
    getProductListInCart(sessionQuery?.user.email ?? "")
  )

  return {
    productListInCart: productListInCart ?? [],
    isError,
    isLoading,
  }
}
