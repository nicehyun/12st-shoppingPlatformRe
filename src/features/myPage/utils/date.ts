export const parseISOStringToDateTime = (inputISOString: string) => {
  if (inputISOString === null || inputISOString === undefined) {
    throw new Error(
      "🚨 Invalid input: inputISOString cannot be null or undefined"
    )
  }

  const dateObject = new Date(inputISOString)

  const year = dateObject.getFullYear()
  const month = dateObject.getMonth() + 1
  const date = dateObject.getDate()
  const hours = dateObject.getHours()
  const minutes = dateObject.getMinutes()

  return [year, month, date, hours, minutes]
}

/**
 * @param {string} dateTimeString -  2023 - 12 - 23 - 16 : 51 형식의 문자열
 */
export const parseDateTimeToISOString = (dateTimeString: string) => {
  const parts = dateTimeString.split(/\s*-\s*|\s*:\s*/)

  if (parts.length !== 5) {
    console.error("Invalid date-time string format:", dateTimeString)
    return null
  }

  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  const date = parseInt(parts[2], 10)
  const hours = parseInt(parts[3], 10)
  const minutes = parseInt(parts[4], 10)

  const isoString = new Date(
    year,
    month - 1,
    date,
    hours,
    minutes
  ).toISOString()

  return isoString
}
