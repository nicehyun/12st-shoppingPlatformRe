import { getProductListInCart } from "@/firebase/firestore/cart"
import { useQuery } from "@tanstack/react-query"

export const useProductListInCartQuery = (email: string) => {
  const {
    data: productListInCart,
    isError,
    isLoading,
    error,
  } = useQuery(["productListInCart", email], () =>
    fetch(`/api/user/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "123",
      },
    })
  )

  return { productListInCart, isError, isLoading, error }
}
