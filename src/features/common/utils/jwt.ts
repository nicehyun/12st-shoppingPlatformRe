import jwt, { JwtPayload } from "jsonwebtoken"

export interface ExtendedJwtPayload extends JwtPayload {
  email: string | undefined
  id: string | undefined
  name: string
  phone: string
  marketingClause: boolean
  mile: number
}

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "24h",
}

// 토큰 생성
export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY
  const token = jwt.sign(payload, secret_key!, options)
  return token
}

// 토큰 검증
export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY

    const decoded = jwt.verify(token, secret_key!)

    return decoded as ExtendedJwtPayload
  } catch (error) {
    console.log(error)
    return null
  }
}
