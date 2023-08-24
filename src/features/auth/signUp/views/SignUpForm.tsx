"use client"

import { ROUTE, useNavigations } from "@/common/hooks/useNavigations"
import { Gender, UserInfo } from "@/common/types/user"
import {
  resetSignUpState,
  resetStep,
  selectSignUpCheckState,
  selectSignUpIsValidState,
  seletSignUpClauseState,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { useFeedbackModal } from "../hooks/useFeedbackModal"
import useSignUpMutation from "../hooks/useSignUpMutation"
import SignUpClause from "./SIgnUpClause"
import SIgnUpUserInfo from "./SIgnUpUserInfo"

// TODO : isLoading 처리
const SignUpForm = () => {
  const { routeTo } = useNavigations()

  const dispatch = useAppDispatch()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const {
    age: isAgeAgree,
    privacy: isPrivacyAgree,
    term: isTermAgree,
    marketing,
  } = useAppSelector(seletSignUpClauseState)
  const {
    email: isEmailCheck,
    address: isAddressCheck,
    phone: isPhoneCheck,
  } = useAppSelector(selectSignUpCheckState)
  const {
    password: isPasswordValid,
    birth: isBirthValid,
    name: isNameValid,
  } = useAppSelector(selectSignUpIsValidState)

  const { isLoading: isSignUpLoading, mutateAsync: signUpMutateAsync } =
    useSignUpMutation()

  const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!isEmailCheck) {
      showFeedbackModalWithContent("이메일 중복 체크를 해주세요.")

      return
    }

    if (!isPasswordValid) {
      showFeedbackModalWithContent(
        "비밀번호는 영문, 숫자와 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주시고, 동일한 비밀번호를 입력해주세요."
      )

      return
    }

    if (!isNameValid) {
      showFeedbackModalWithContent("올바른 이름을 입력해주세요.")

      return
    }

    if (!isPhoneCheck) {
      showFeedbackModalWithContent("휴대폰 인증을 진행해 주세요.")

      return
    }

    if (!isAddressCheck) {
      showFeedbackModalWithContent("주소를 입력해주세요.")

      return
    }

    if (!isBirthValid) {
      showFeedbackModalWithContent("올바른 생년월일을 입력해주세요.")

      return
    }

    if (!isAgeAgree || !isPrivacyAgree || !isTermAgree) {
      showFeedbackModalWithContent("필수 이용 약관에 동의해 주세요.")

      return
    }

    const formData = new FormData(event.currentTarget)

    const userInfo: UserInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      additionalAddress: formData.get("additionalAddress") as string,
      gender: formData.get("gender") as Gender,
      birth:
        (((formData.get("birthYear") as string) +
          formData.get("birthMonth")) as string) + formData.get("birthDay"),
      marketingClause: marketing,
    }

    const isSignUpSuccess = await signUpMutateAsync(userInfo)

    if (!isSignUpSuccess) {
      showFeedbackModalWithContent(
        "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
      )

      return
    }

    showFeedbackModalWithContent("회원가입을 축하합니다🎉")

    dispatch(resetSignUpState())

    routeTo(ROUTE.HOME)
  }

  useEffect(() => {
    dispatch(resetSignUpState())
  }, [dispatch])
  return (
    <form
      onSubmit={handleSignUpSubmit}
      className="sm:hidden md:hidden max-w-[800px] mx-auto"
    >
      <h2 className="text-[28px] font-bold mb-[40px] text-center border-black dark:border-white tracking-[20px]">
        회원가입
      </h2>
      <h3 className="border-b-[1px] border-black dark:border-white pb-[10px] mb-[10px] text-right text-[12px] text-lightGray">
        <span className="text-lightRed mr-[5px]">*</span>필수입력사항
      </h3>

      <SIgnUpUserInfo />

      <SignUpClause />

      <div className="flexCenter">
        <button
          type="submit"
          className="rounded-[5px] w-[400px] text-[14px] mt-[50px] bg-black dark:bg-white text-white dark:text-black py-[14px] tracking-[5px]"
        >
          {/* {isLoading ? (
            <LoadingView spinnerSize="20px" isFrame={false} />
          ) : (
            "가입하기"
          )} */}
          회원가입
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
