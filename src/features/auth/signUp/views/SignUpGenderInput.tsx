"use client"

import { Gender } from "@/common/types/user"
import RadioInput from "@/common/views/RadioInput"
import { selectSignUpActiveStepState } from "@/redux/features/signUpSlice"
import { useAppSelector } from "@/redux/hooks"
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import SignUpInputLayout from "./SignUpInputLayout"

const SignUpGenderInput = () => {
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
    <SignUpInputLayout headingText="성별을 선택해주세요">
      <span className="relative inline-block">
        <RadioInput
          onChange={handleGenderSelect}
          onKeyPress={handleKeyPress}
          defaultValue="male"
          checked={gender === "male"}
          id="gender-male"
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
          id="gender-female"
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
          id="gender-none"
          name="gender"
          label="선택안함"
          peer="peer/none"
          peerChecked={{
            bg: "peer-checked/none:before:bg-lightRed",
            borderColor: "peer-checked/none:before:border-lightRed",
          }}
        />
      </span>
    </SignUpInputLayout>
  )
}

export default SignUpGenderInput
