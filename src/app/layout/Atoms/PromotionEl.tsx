interface IPromotionEl {
  classNames?: string
  content: string
  highlightedTextStart: number
  highlightedTextEnd: number
  onClick?: () => void
}

const PromotionEl = ({
  classNames,
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
    <li className={`relative ${classNames} font-bold cursor-pointer text-xs`}>
      {beforeText}
      <span className="text-red-400">{highlightedText}</span>
      <span>{afterText}</span>
    </li>
  )
}

export default PromotionEl
