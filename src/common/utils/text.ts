export const highlightSplitText = (
  content: string,
  highlightedTextStart: number,
  highlightedTextEnd: number
) => {
  if (
    highlightedTextStart < 0 ||
    highlightedTextStart >= content.length ||
    highlightedTextEnd < highlightedTextStart ||
    highlightedTextEnd > content.length
  ) {
    return {
      beforeText: "",
      highlightedText: content,
      afterText: "",
    }
  }

  const beforeText = content.slice(0, highlightedTextStart)
  const highlightedText = content.slice(
    highlightedTextStart,
    highlightedTextEnd
  )
  const afterText = content.slice(highlightedTextEnd)

  return {
    beforeText,
    highlightedText,
    afterText,
  }
}

export const truncateText = (text: string, maxLength: number) => {
  if (maxLength <= 0 || maxLength >= text.length || text.length < maxLength + 3)
    return text

  return text.slice(0, maxLength - 3) + "..."
}

export const sliceText = (text: string, endIndex: number) => {
  return text.slice(0, endIndex)
}

export const numberToLocaleString = (number: number) =>
  number.toLocaleString("ko-kr")
