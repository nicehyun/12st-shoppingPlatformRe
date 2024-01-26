import { UserInfo } from "@/features/common/types/user"

export type SignUpVerification = {
  isEmailChecked: boolean
  isPhoneChecked: boolean
}
export interface ISignUpRequest {
  userInfo: UserInfo
  verification: SignUpVerification
}
