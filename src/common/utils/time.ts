export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`

  return formattedTime
}

export const getCurrentDateTime = () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDay()
  const hour = now.getHours()
  const minute = now.getMinutes()

  const dateTimeInfo = {
    year,
    month,
    day,
    hour,
    minute,
  }

  return dateTimeInfo
}
