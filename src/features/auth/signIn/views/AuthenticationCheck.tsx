"use client"

import { ROUTE } from "@/features/common/hooks/useNavigations"
import { showRouteModal } from "@/redux/features/modalSlice"
import { selectSignInState } from "@/redux/features/signInSlice"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import useSessionQuery from "../hooks/useSessionQuery"

const AuthenticationCheck = () => {
  const { sessionQuery } = useSessionQuery()
  const seletSignInState = useAppSelector(selectSignInState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (seletSignInState.isPrevSignIn && !sessionQuery) {
      dispatch(
        showRouteModal({
          modalId: "signIn-route-modal",
          modalTitle: "로그인",
          modalContent:
            "세션이 만료되었습니다. 로그인 페이지로 이동하시겠습니까?",
          route: ROUTE.SIGNIN,
        })
      )

      return
    }
  }, [sessionQuery])

  return null
}

export default AuthenticationCheck
