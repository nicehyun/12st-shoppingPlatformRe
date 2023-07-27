import { highlightSplitText } from "@/common/utils/text"

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
  const { afterText, beforeText, highlightedText } = highlightSplitText(
    content,
    highlightedTextStart,
    highlightedTextEnd
  )

  return (
    <li className={`relative ${classNames} font-bold cursor-pointer text-xs`}>
      {beforeText}
      <span className="text-lightRed">{highlightedText}</span>
      {afterText}
    </li>
  )
}

export default PromotionEl
