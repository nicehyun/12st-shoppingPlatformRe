import { showRouteModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { ROUTE } from "./useNavigations"

export const useConditionalSignInRoute = () => {
  const dispatch = useAppDispatch()

  const shouldProceedWithRouting = (isCondition: boolean) => {
    if (!isCondition) {
      dispatch(
        showRouteModal({
          modalId: "signIn-route-modal",
          modalTitle: "로그인",
          modalContent:
            "로그인 후 이용 가능한 기능입니다. 로그인 페이지로 이동하시겠습니까?",
          route: ROUTE.SIGNIN,
        })
      )

      return false
    }

    return true
  }

  return { shouldProceedWithRouting }
}
