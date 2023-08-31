import { getProductListInCart } from "@/firebase/firestore/cart"
import { useQuery } from "@tanstack/react-query"

export const useProductListInCartQuery = (email: string) => {
  const {
    data: productListInCart,
    isError,
    isLoading,
    error,
  } = useQuery(["productListInCart", email], () => getProductListInCart(email))

  return { productListInCart, isError, isLoading, error }
}
