import { highlightSplitText } from "@/features/common/utils/text"

interface MPromotionEl {
  classNames?: string
  promotingCompany: string
  content: string
  highlightedTextStart: number
  highlightedTextEnd: number
}

const MPromotionEl = ({
  classNames,
  promotingCompany,
  content,
  highlightedTextEnd,
  highlightedTextStart,
}: MPromotionEl) => {
  const { afterText, beforeText, highlightedText } = highlightSplitText(
    content,
    highlightedTextStart,
    highlightedTextEnd
  )
  return (
    <div
      className={`${classNames} w-80 h-[120px] bg-no-repeat  bg-center bg-cover rounded-lg relative cursor-pointer border-[1px] border-black`}
      style={{ backgroundImage: "url('/ticket.png')" }}
    >
      <span className="absolute top-2 right-24 text-sm text-lightRed font-bold">
        {promotingCompany}
      </span>
      <p className="absolute text-sm top-11 right-6 w-[200px] leading-relaxed">
        {beforeText}
        <span className="text-lightRed">{highlightedText}</span>
        {afterText}
      </p>
    </div>
  )
}

export default MPromotionEl
