export type InputValidator = (value: string) => boolean

export const emailValidator: InputValidator = (value) => {
  const emailExp = /[\w]+@[\w]+\.[a-zA-Z]+/

  return emailExp.test(value)
}

export const passwordValidator: InputValidator = (value) => {
  const passwordExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,20}/

  return passwordExp.test(value)
}

export const nameValidator: InputValidator = (value) => {
  const englishNameRegex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/
  const koreanNameRegex = /^[가-힣]{2,4}$/
  return koreanNameRegex.test(value) || englishNameRegex.test(value)
}

export const phoneValidator: InputValidator = (value) => {
  const phoneRegex = /^(010|011|016|017|018|019)[1-9]\d{6,7}$/
  return phoneRegex.test(value)
}

export const birthYearValidator: InputValidator = (value) => {
  const birthYearRegex = /^(19|20)\d{2}$/
  return birthYearRegex.test(value)
}

export const birthMonthValidator: InputValidator = (value) => {
  const birthMonthRegex = /^(0[1-9]|1[0-2])$/
  return birthMonthRegex.test(value)
}

export const birthDayValidator: InputValidator = (value) => {
  const birthDayRegex = /^(0[1-9]|[1-2]\d|3[0-1])$/
  return birthDayRegex.test(value)
}

export const additionalAddressValidator: InputValidator = (value) => {
  const additionalAddressRegex = /^\S+$/g
  return additionalAddressRegex.test(value.trim())
}
