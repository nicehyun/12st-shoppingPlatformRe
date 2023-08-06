export const truncateText = (text: string, maxLength: number) => {
  if (maxLength <= 0 || maxLength > text.length) return text

  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "..."
  }
}
