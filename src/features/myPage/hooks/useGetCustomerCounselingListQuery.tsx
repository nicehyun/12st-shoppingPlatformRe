import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"

export const useGetCustomerCounselingListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data, isLoading, isError, isFetching } = useQuery(
    ["customerCounselingList"],
    () => myPageAPI.getCoutomerCounselingList(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  const isInitialLoading = isLoading && isFetching

  const customerCounselingList = data?.customerCounselingList ?? []

  return {
    customerCounselingList: customerCounselingList,
    isInitialLoading,
    isError,
  }
}
