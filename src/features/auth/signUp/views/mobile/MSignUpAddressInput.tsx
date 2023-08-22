import { ChangeEvent } from "react"
import SignUpAddressInput from "../SignUpAddressInput"
import MSignUpInputLayout from "./MSignUpInputLayout"

export interface IMSignUpAddressInput {
  additionalAddressInputValue: string
  onChangeAdditionalAddressInputValue: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  onBlurAdditionalAddressInput: () => void
  hasErrorAdditionalAddress: boolean
  reset: () => void
}

const MSignUpAddressInput = (props: IMSignUpAddressInput) => {
  return (
    <MSignUpInputLayout headingText="주소를 입력해주세요">
      <SignUpAddressInput {...props} />
    </MSignUpInputLayout>
  )
}

export default MSignUpAddressInput
