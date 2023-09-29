import { CheckoutList } from "@/common/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getCheckoutList } from "@/firebase/firestore/checkout"
import { useQuery } from "@tanstack/react-query"

export const useGetCheckoutListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data } = useQuery(
    ["checkoutList"],
    () => getCheckoutList(sessionQuery?.user.email ?? ""),
    {
      // TODO : AuthenticationProvider 로 세션 검사 시 enabled 옵션 제거하기
      // enabled 옵션을 사용하여 sessionQuery 값이 설정된 이후에만 쿼리를 실행
      enabled: !!sessionQuery,
      //   suspense: true,
    }
  )
  const checkoutList: CheckoutList[] = data ?? []

  const currentCheckoutList = checkoutList[0]

  return { checkoutList, currentCheckoutList }
}
