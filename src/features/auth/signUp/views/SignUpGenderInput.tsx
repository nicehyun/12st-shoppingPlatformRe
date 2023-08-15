"use client"

import { Gender } from "@/common/types/user"
import RadioInput from "@/common/views/RadioInput"
import { ChangeEvent, KeyboardEvent, useState } from "react"

const SignUpGenderInput = () => {
  const [gender, setGender] = useState<Gender>("none")

  const handleGenderSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedGender = e.target.value as Gender

    setGender(selectedGender)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }

  return (
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
  )
}

export default SignUpGenderInput
