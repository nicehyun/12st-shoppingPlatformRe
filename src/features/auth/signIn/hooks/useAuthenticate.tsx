import { ROUTE } from "@/features/common/hooks/useNavigations"
import { showRouteModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import useSessionQuery from "./useSessionQuery"

export const useAuthenticate = () => {
  const { sessionQuery } = useSessionQuery()
  const dispatch = useAppDispatch()

  const authentication = async () => {
    return new Promise((resolve) => {
      if (!sessionQuery) {
        dispatch(
          showRouteModal({
            modalId: "signIn-route-modal",
            modalTitle: "로그인",
            modalContent:
              "로그인 후 이용 가능한 기능입니다. 로그인 페이지로 이동하시겠습니까?",
            route: ROUTE.SIGNIN,
          })
        )
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }

  return {
    authentication,
  }
}
