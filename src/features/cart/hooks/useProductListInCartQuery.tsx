import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getProductListInCart } from "@/firebase/firestore/cart"
import { useQuery } from "@tanstack/react-query"

export const useProductListInCartQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const {
    data: productListInCart,
    isError,
    isLoading,
  } = useQuery(
    ["productListInCart"],
    () => getProductListInCart(sessionQuery?.user.email ?? ""),
    {
      // enabled 옵션을 사용하여 sessionQuery 값이 설정된 이후에만 쿼리를 실행
      enabled: !!sessionQuery?.user.email,
    }
  )

  return {
    productListInCart: productListInCart ?? [],
    isError,
    isLoading,
  }
}
