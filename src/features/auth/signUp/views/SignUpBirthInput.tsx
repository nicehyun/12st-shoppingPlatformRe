"use client"

import { ChangeEvent } from "react"
import { useSignUpUserInput } from "../hooks/useSignUpUserInput"
import {
  birthDayValidatorWithMonth,
  birthMonthValidator,
  birthYearValidator,
} from "../utils/validation"
import SignUpFeedback from "./SignUpFeedback"

// TODO : Valid => 글로벌 처리, ㅑnputReset 제거
const SignUpBirthInput = () => {
  const {
    value: yearInputValue,
    handleValueChange: handleYearInputValueChange,
    handleInputBlur: handleYearInputBlur,

    hasError: hasErrorYear,
  } = useSignUpUserInput(birthYearValidator)

  const {
    value: monthInputValue,
    handleValueChange: handleMonthInputValueChange,
    handleInputBlur: handleMonthInputBlur,

    hasError: hasErrorMonth,
  } = useSignUpUserInput(birthMonthValidator)

  const birthDayValidator = birthDayValidatorWithMonth(monthInputValue)

  const {
    value: dayInputValue,
    handleValueChange: handleDayInputValueChange,
    handleInputBlur: handleDayInputBlur,

    hasError: hasErrorDay,
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
