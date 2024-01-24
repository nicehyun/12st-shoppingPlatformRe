import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useGetCustomerCounselingListQuery = () => {
  const { session } = useSessionQuery()

  const { data, isLoading, isError, isFetching } = useQuery(
    ["customerCounselingList"],
    () => myPageAPI.getCoutomerCounselingList(session?.user.accessToken),
    {
      enabled: !!session,
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
