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
      className={`${classNames} flex items-center  w-[400px] h-[120px] rounded-lg cursor-pointer border-[1px] border-black dark:bg-white`}
    >
      <div className="w-[100px] h-full flexCenter  bg-black dark:bg-lightRed text-white mr-[20px] rounded-l-lg">
        <span className="-rotate-90">PROMOTION</span>
      </div>

      <div className="flex-1">
        <span className="text-sm text-lightRed font-bold">
          {promotingCompany}
        </span>
        <p className="w-full leading-relaxed">
          {beforeText}
          <span className="text-lightRed">{highlightedText}</span>
          {afterText}
        </p>
      </div>
    </div>
  )
}

export default MPromotionEl
