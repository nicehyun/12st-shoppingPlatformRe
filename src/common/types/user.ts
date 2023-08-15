export type UserInfo = {
  email: string
  password: string
  name: string
  phone: string
  address: string
  additionalAddress: string
  gender: "male" | "female" | "none"
  birth: string
  marketingClause: boolean
}

export type Gender = UserInfo["gender"]
