import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useUserMileQuery } from "@/features/checkout/hooks/useGetUserMileQuery"
import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"

const useGetUseMileAndGetMile = () => {
  const { sessionQuery } = useSessionQuery()
  const { userMile } = useUserMileQuery()
  const { data: useMileAndGetMileInfo } = useQuery(
    ["useMileAndGetMileInfo"],
    () => myPageAPI.getUseMileAndGetMile(sessionQuery?.user.email ?? ""),
    {
      // suspense: true,
      enabled: !!sessionQuery,
    }
  )

  const totalUseMile = useMileAndGetMileInfo?.reduce(
    (prevMile, curMileInfo) => prevMile + curMileInfo.useMile,
    0
  )

  const totalGetMile = useMileAndGetMileInfo?.reduce(
    (prevMile, curMileInfo) => prevMile + curMileInfo.getMile,
    0
  )

  return { useMileAndGetMileInfo, userMile, totalGetMile, totalUseMile }
}

export default useGetUseMileAndGetMile
