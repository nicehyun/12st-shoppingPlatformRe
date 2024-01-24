import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/dist/client/components/headers"

export async function generateAccessToken(payload: JwtPayload) {
  const secret_key = process.env.NEXTAUTH_SECRET

  const accessToken = jwt.sign(payload, secret_key!, { expiresIn: "15m" })

  return accessToken
}

export async function generateRefreshToken(payload: JwtPayload) {
  const secret_key = process.env.REFRESH_TOKEN_SECRET_KEY

  const refreshToken = jwt.sign(payload, secret_key!, {
    expiresIn: 7 * 24 * 60 * 60,
  })

  return refreshToken
}

// TODO : 배포 시 secure true로 수정
export const setRefreshTokenCookies = (value: string) => {
  cookies().set({
    name: "auth-token",
    value,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: value ? 7 * 24 * 60 * 60 : 0,
  })
}

export async function getRefreshAccessToken(refreshToken: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refreshToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    )

    const refreshedTokens = await response.json()

    return {
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
      expiresIn: refreshedTokens.expiresIn,
    }
  } catch (error) {
    console.error("Error refreshing access token: ", error)
    return {
      accessToken: null,
      refreshToken: null,
      expiresIn: 0,
    }
  }
}

export function verifyAccessToken(refreshToken: string) {
  try {
    const decodedToken = jwt.verify(refreshToken, process.env.NEXTAUTH_SECRET!)

    return decodedToken as JwtPayload
  } catch (error) {
    return null
  }
}

export function verifyRefreshToken(refreshToken: string) {
  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY!
    )

    return decodedToken as JwtPayload
  } catch (error) {
    return null
  }
}
