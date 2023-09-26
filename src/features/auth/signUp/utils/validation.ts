export type InputValidator = (value: string) => boolean

export type DayInputValidator = (month: string, day: string) => boolean

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
  const currentYear = new Date().getFullYear()

  if (birthYearRegex.test(value)) {
    if (+value <= currentYear) {
      return true
    }
  }

  return false
}

export const birthMonthValidator: InputValidator = (value) => {
  const birthMonthRegex = /^(0[1-9]|1[0-2])$/
  return birthMonthRegex.test(value)
}

export const birthDayValidatorWithMonth = (month: string) => {
  const parsedMonth = +month

  const maxDaysByMonth: Record<number, number> = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }

  const birthDayValidator = (day: string) => {
    const parsedDay = +day

    if (parsedDay >= 1 && parsedDay <= maxDaysByMonth[parsedMonth]) {
      return true
    }

    return false
  }

  return birthDayValidator
}

export const additionalAddressValidator: InputValidator = (value) => {
  const additionalAddressRegex = /^[a-zA-Z0-9가-힣\s]+$/
  return additionalAddressRegex.test(value.trim())
}
