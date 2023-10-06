import { UserInfo } from "@/common/types/user"

export interface IRequestSignUp {
  userInfo: UserInfo
  requireCheck: {
    email: boolean
    phone: boolean
    ageClause: boolean
    termClause: boolean
    privacyClause: boolean
  }
}
