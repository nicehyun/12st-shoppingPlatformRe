"use client"

import {
  resetBirthValid,
  selectSignUpActiveStepState,
  validateBirth,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { ChangeEvent, useEffect } from "react"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import { Mobile } from "../types/mobile"
import {
  birthDayValidatorWithMonth,
  birthMonthValidator,
  birthYearValidator,
} from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"

const SignUpBirthInput = ({ isMobile }: Mobile) => {
  const dispatch = useAppDispatch()
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const {
    value: yearInputValue,
    handleValueChange: handleYearInputValueChange,
    handleInputBlur: handleYearInputBlur,
    isValid: isYearValid,
    hasError: hasErrorYear,
    reset: resetBirthYear,
  } = useSignUpUserInput(birthYearValidator)

  const {
    value: monthInputValue,
    handleValueChange: handleMonthInputValueChange,
    handleInputBlur: handleMonthInputBlur,
    isValid: isMonthValid,
    hasError: hasErrorMonth,
    reset: resetBirthMonth,
  } = useSignUpUserInput(birthMonthValidator)

  const birthDayValidator = birthDayValidatorWithMonth(monthInputValue)

  const {
    value: dayInputValue,
    handleValueChange: handleDayInputValueChange,
    handleInputBlur: handleDayInputBlur,
    isValid: isDayValid,
    hasError: hasErrorDay,
    reset: resetBirthDay,
  } = useSignUpUserInput(birthDayValidator)

  const handleBirthInputMaxLength = (
    event: ChangeEvent<HTMLInputElement>,
    inputChangeFn: (event: ChangeEvent<HTMLInputElement>) => void,
    maxLength: number
  ) => {
    if (event.target.value.length > maxLength) return

    inputChangeFn(event)
  }

  const birthInputFeedbackContent = hasErrorYear
    ? "태어난 년도 4자리를 정확하게 입력해주세요."
    : hasErrorMonth
    ? "태어난 월을 정확하게 입력해주세요."
    : hasErrorDay
    ? "태어난 일을 정확하게 입력해주세요."
    : ""

  const isBirthInputFeedback = hasErrorYear || hasErrorMonth || hasErrorDay

  useEffect(() => {
    dispatch(resetBirthValid())

    if (isYearValid && isMonthValid && isDayValid) {
      dispatch(validateBirth())
      return
    }
  }, [isYearValid, isMonthValid, isDayValid, dispatch])

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      resetBirthYear()
      resetBirthMonth()
      resetBirthDay()
      return
    }
  }, [selectSignUpActiveStep])

  return (
    <>
      <div
        className={`flex-grow max-w-[400px] h-[38px] flexCenter items-center ${
          isBirthInputFeedback ? "border-lightRed" : "border-border"
        }  border-[1px] rounded-[5px] px-[15px]`}
      >
        <input
          type="number"
          placeholder="YYYY"
          maxLength={4}
          id={isMobile ? "m-birthYear" : "birthYear"}
          name="birthYear"
          value={yearInputValue}
          onChange={(event) =>
            handleBirthInputMaxLength(event, handleYearInputValueChange, 4)
          }
          onBlur={handleYearInputBlur}
          className="w-[96px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
        />
        <span className="text-border">/</span>
        <input
          type="number"
          placeholder="MM"
          maxLength={2}
          id={isMobile ? "m-birthMonth" : "birthMonth"}
          name="birthMonth"
          value={monthInputValue}
          onChange={(event) =>
            handleBirthInputMaxLength(event, handleMonthInputValueChange, 2)
          }
          onBlur={handleMonthInputBlur}
          className="w-[96px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
        />
        <span className="text-border">/</span>
        <input
          type="number"
          placeholder="DD"
          maxLength={2}
          name="birthDay"
          id={isMobile ? "m-birthDay" : "birthDay"}
          value={dayInputValue}
          onChange={(event) =>
            handleBirthInputMaxLength(event, handleDayInputValueChange, 2)
          }
          onBlur={handleDayInputBlur}
          className="w-[96px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
        />
      </div>
      <SignUpFeedback content={birthInputFeedbackContent} />
    </>
  )
}

export default SignUpBirthInput
