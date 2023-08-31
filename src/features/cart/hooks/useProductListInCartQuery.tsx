import useSessionQuery from "@/app/api/user/[email]/useSessionQuery"
import { getProductListInCart } from "@/firebase/firestore/cart"
import { useQuery } from "@tanstack/react-query"

export const useProductListInCartQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const {
    data: productListInCart,
    isError,
    isLoading,
    error,
  } = useQuery(["productListInCart", sessionQuery?.user.email], () =>
    getProductListInCart(sessionQuery?.user.email ?? "")
  )

  return {
    productListInCart: productListInCart ?? [],
    isError,
    isLoading,
    error,
  }
}
