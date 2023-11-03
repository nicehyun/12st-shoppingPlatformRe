import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"

export const useGetCustomerCounselingListQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const {
    data: customerCounselingList,
    isLoading,
    isError,
  } = useQuery(
    ["customerCounselingList"],
    () => myPageAPI.getCoutomerCounselingList(sessionQuery?.user.email ?? ""),
    {
      // suspense: true,
      enabled: !!sessionQuery,
    }
  )

  return {
    customerCounselingList: customerCounselingList ?? [],
    isLoading,
    isError,
  }
}
