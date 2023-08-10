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
  if (maxLength <= 0 || maxLength > text.length) return text

  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "..."
  }
}
