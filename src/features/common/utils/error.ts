export const isFeedbackError = (
  response: unknown
): response is { status: number; error?: string } => {
  return (
    typeof response === "object" &&
    response !== null &&
    "status" in response &&
    typeof (response as { status: unknown }).status === "number"
  )
}

export const validatePageParam = (pageParam: number | undefined): void => {
  if (
    pageParam === undefined ||
    pageParam === null ||
    typeof pageParam !== "number" ||
    pageParam < 1
  ) {
    throw new Error("Invalid page parameter")
  }
}

export const validateAuthorization = (
  authorization: string | null | undefined
) => {
  if (!authorization) {
    throw new Error("AccessToken이 만료되었습니다.")
  }

  return { authorization }
}
