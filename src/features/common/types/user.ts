export type UserInfo = {
  email: string
  password: string
  name: string
  phone: string
  marketingClause: boolean
}

export type UserInfoWithMile = UserInfo & {
  mile: number
}
