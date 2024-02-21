import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from "./validation"

export const parseClauseCheckedFromSignUpFormData = (formData: FormData) => {
  return {
    isAgeClauseCheck: formData.get("age") === "on",
    isTermClauseCheck: formData.get("term") === "on",
    isPrivacyClauseCheck: formData.get("privacy") === "on",
    isMarketingClauseCheck: formData.get("marketing") === "on",
  }
}

export const parseEmailFromSignUpFormData = (formData: FormData) => {
  return {
    email: formData.get("signUp-email") as string,
    isEmailDuplicationCheck: formData.get("emailDuplicationCheck") === "true",
  }
}

export const parsePasswordFromSignUpFormData = (formData: FormData) => {
  return {
    password: formData.get("signUp-password") as string,
    rePassword: formData.get("signUp-repassword") as string,
  }
}

export const parseNameFromSignUpFormData = (formData: FormData) => {
  return { name: formData.get("signUp-name") as string }
}

export const parsePhoneNumberFromSignUpFormData = (formData: FormData) => {
  return {
    phone: formData.get("signUp-phone") as string,
    isPhoneVerificationCheck: formData.get("phoneVerificationCheck") === "true",
  }
}

export const validCheckFromSignUpFormData = (formData: FormData) => {
  const { isAgeClauseCheck, isMarketingClauseCheck, isPrivacyClauseCheck } =
    parseClauseCheckedFromSignUpFormData(formData)

  if (!isAgeClauseCheck || !isMarketingClauseCheck || !isPrivacyClauseCheck) {
    return {
      isValid: false,
      message: "필수 약관에 동의해주세요.",
    }
  }

  const { email, isEmailDuplicationCheck } =
    parseEmailFromSignUpFormData(formData)

  if (!emailValidator(email)) {
    return {
      isValid: false,
      message: "올바른 이메일 형식을 입력해주세요.",
    }
  }

  if (!isEmailDuplicationCheck) {
    return {
      isValid: false,
      message: "이메일 중복검사를 해주세요.",
    }
  }

  const { password, rePassword } = parsePasswordFromSignUpFormData(formData)

  if (!passwordValidator(password)) {
    return {
      isValid: false,
      message:
        "비밀번호는 영문, 숫자, 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요.",
    }
  }

  if (password !== rePassword) {
    return {
      isValid: false,
      message: "비밀번호가 일치하지 않습니다. 다시 입력해 주세요.",
    }
  }

  const { name } = parseNameFromSignUpFormData(formData)

  if (!nameValidator(name)) {
    return {
      isValid: false,
      message: "올바른 이름을 입력해주세요.",
    }
  }

  const { phone, isPhoneVerificationCheck } =
    parsePhoneNumberFromSignUpFormData(formData)

  if (!phoneValidator(phone)) {
    return {
      isValid: false,
      message: "올바른 휴대폰 번호를 입력해주세요.",
    }
  }

  if (!isPhoneVerificationCheck) {
    return {
      isValid: false,
      message: "휴대폰 본인인증을 해주세요.",
    }
  }

  return {
    isValid: true,
  }
}
