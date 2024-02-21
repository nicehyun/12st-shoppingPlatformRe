import {
  emailValidator,
  passwordValidator,
} from "../../signUp/models/validation"

export const validCheckOfSignIn = (email: string, password: string) => {
  if (!email || !password) {
    return {
      isValid: false,
      message: "이메일과 비밀번호를 입력해주세요.",
    }
  }

  if (!emailValidator(email)) {
    return {
      isValid: false,
      message: "유효한 이메일 형식이 아닙니다.",
    }
  }

  if (!passwordValidator(password)) {
    return {
      isValid: false,
      message:
        "비밀번호는 영문, 숫자, 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요.",
    }
  }

  return {
    isValid: true,
  }
}
