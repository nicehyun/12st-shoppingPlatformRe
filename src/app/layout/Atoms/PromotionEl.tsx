interface IPromotionEl {
  classnames?: string
  content: string
  highlightedTextStart: number
  highlightedTextEnd: number
}

const PromotionEl = ({
  classnames,
  content,
  highlightedTextStart,
  highlightedTextEnd,
}: IPromotionEl) => {
  const beforeText = content.slice(0, highlightedTextStart)

  const highlightedText = content.slice(
    highlightedTextStart,
    highlightedTextEnd
  )

  const afterText = content.slice(highlightedTextEnd)

  return (
    <li
      className={`relative ${classnames} text-sm font-bold cursor-pointer whitespace-pre-wrap`}
    >
      {beforeText}
      <span className="text-red-400">{highlightedText}</span>
      {afterText}
    </li>
  )
}

export default PromotionEl
