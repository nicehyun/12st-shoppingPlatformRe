import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "@/features/auth/signUp/models/signUpAPI"
import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from "../utils/validation"

import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { ISignUpRequest, SignUpVerification } from "../types/signUp"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

type ClauseChecked = {
  isAgeClauseChecked: boolean
  isTermClauseChecked: boolean
  isPrivacyClauseChecked: boolean
  isMarketingClauseChecked: boolean
}

interface ISignUpMutation {
  clause: ClauseChecked
  verification: SignUpVerification
}

export const useSignUpMutation = ({
  clause,
  verification,
}: ISignUpMutation) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { routeTo } = useNavigations()

  const { isLoading, mutateAsync } = useMutation(
    (signUpprops: ISignUpRequest) => signUpAPI.signUp(signUpprops),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const signUpMuatateAsync = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    if (isLoading) return

    const formData = new FormData(event.currentTarget)

    const {
      isAgeClauseChecked,
      isMarketingClauseChecked,
      isPrivacyClauseChecked,
      isTermClauseChecked,
    } = clause

    const { isEmailChecked, isPhoneChecked } = verification

    const emailValue = formData.get("signUp-email") as string
    const passwordValue = formData.get("signUp-password") as string
    const rePasswordValue = formData.get("signUp-repassword") as string
    const namedValue = formData.get("signUp-name") as string
    const phoneValue = formData.get("signUp-phone") as string

    if (
      !isAgeClauseChecked ||
      !isPrivacyClauseChecked ||
      !isTermClauseChecked
    ) {
      showFeedbackModalWithContent("이메일 형식을 입력해주세요.")
      return
    }

    if (!emailValidator(emailValue)) {
      showFeedbackModalWithContent("이메일 중복 확인을 해주세요.")
      return
    }

    if (!isEmailChecked) {
      showFeedbackModalWithContent("이메일 중복 확인을 해주세요.")
      return
    }

    if (!passwordValidator(passwordValue)) {
      showFeedbackModalWithContent(
        "비밀번호는 영문, 숫자, 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
      )
      return
    }

    if (rePasswordValue !== passwordValue) {
      showFeedbackModalWithContent(
        "비밀번호가 일치하지 않습니다. 다시 입력해 주세요."
      )
      return
    }

    if (!phoneValidator(phoneValue)) {
      showFeedbackModalWithContent(
        "비밀번호는 영문, 숫자, 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요."
      )
      return
    }

    if (!nameValidator(namedValue)) {
      showFeedbackModalWithContent("올바른 이름을 입력해주세요.")
      return
    }

    if (!isPhoneChecked) {
      showFeedbackModalWithContent("휴대폰 본인인증을 해주세요.")
      return
    }

    const userInfo = {
      email: emailValue,
      password: passwordValue,
      name: namedValue,
      phone: phoneValue,
      marketingClause: isMarketingClauseChecked,
    }

    const signUpResponse = await mutateAsync({ userInfo, verification })

    if (signUpResponse.status === 401) {
      showFeedbackModalWithErrorMessage(signUpResponse.error)
    }

    if (signUpResponse.status === 200) {
      showFeedbackModalWithContent("회원가입이 완료되었습니다.")

      routeTo(ROUTE.HOME)
    }
  }

  return { signUpMuatateAsync, isLoading }
}
