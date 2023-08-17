import React from "react"
import SignUpGenderInput from "../SignUpGenderInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpGenderInput = () => {
  return (
    <MSignUpInputLayout headingText="성별을 선택해주세요">
      <SignUpGenderInput />
    </MSignUpInputLayout>
  )
}

export default MSignUpGenderInput
