export type UserInfo = {
  email: string
  password: string
  name: string
  phone: string
  marketingClause: boolean
}

export type ResponseUserInfo = UserInfo & {
  mile: number
}
