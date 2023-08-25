"use client"

import { Gender } from "@/common/types/user"
import RadioInput from "@/common/views/RadioInput"
import { selectSignUpActiveStepState } from "@/redux/features/signUpSlice"
import { useAppSelector } from "@/redux/hooks"
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { Mobile } from "../types/mobile"

const SignUpGenderInput = ({ isMobile }: Mobile) => {
  const [gender, setGender] = useState<Gender>("none")
  const selectSignUpActiveStep = useAppSelector(selectSignUpActiveStepState)

  const handleGenderSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedGender = e.target.value as Gender

    setGender(selectedGender)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }

  useEffect(() => {
    if (selectSignUpActiveStep === 0) {
      setGender("none")
      return
    }
  }, [selectSignUpActiveStep])

  return (
    <span className="relative inline-block">
      <RadioInput
        onChange={handleGenderSelect}
        onKeyPress={handleKeyPress}
        defaultValue="male"
        checked={gender === "male"}
        id={`${isMobile ? "m-gender-male" : "gender-male"}`}
        name="gender"
        label="남자"
        peer="peer/male"
        peerChecked={{
          bg: "peer-checked/male:before:bg-lightRed",
          borderColor: "peer-checked/male:before:border-lightRed",
        }}
      />

      <RadioInput
        onChange={handleGenderSelect}
        onKeyPress={handleKeyPress}
        defaultValue="female"
        checked={gender === "female"}
        id={`${isMobile ? "m-gender-female" : "gender-female"}`}
        name="gender"
        label="여자"
        peer="peer/female"
        peerChecked={{
          bg: "peer-checked/female:before:bg-lightRed",
          borderColor: "peer-checked/female:before:border-lightRed",
        }}
      />
      <RadioInput
        onChange={handleGenderSelect}
        onKeyPress={handleKeyPress}
        defaultValue="none"
        checked={gender === "none"}
        id={`${isMobile ? "m-gender-none" : "gender-none"}`}
        name="gender"
        label="선택안함"
        peer="peer/none"
        peerChecked={{
          bg: "peer-checked/none:before:bg-lightRed",
          borderColor: "peer-checked/none:before:border-lightRed",
        }}
      />
    </span>
  )
}

export default SignUpGenderInput
