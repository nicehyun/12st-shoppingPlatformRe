import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getUserMile } from "@/firebase/firestore/user"
import { useQuery } from "@tanstack/react-query"

export const useGetAvailableMileQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const { data: availableMile } = useQuery(["userMile"], () =>
    getUserMile(sessionQuery?.user.email ?? "")
  )
  return { availableMile }
}
