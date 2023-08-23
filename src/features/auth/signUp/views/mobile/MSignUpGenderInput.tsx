"use client"

import { Gender } from "@/common/types/user"
import RadioInput from "@/common/views/RadioInput"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import SignUpGenderInput from "../SignUpGenderInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

const MSignUpGenderInput = () => {
  return (
    <MSignUpInputLayout headingText="성별을 선택해주세요">
      <SignUpGenderInput isMobile={true} />
    </MSignUpInputLayout>
  )
}

export default MSignUpGenderInput
