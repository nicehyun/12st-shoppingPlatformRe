import Button from "./Button"

interface IClauseCheckbox {
  label: string
  clauseType: string
  classNames?: string
  isClause?: boolean
  isRequired?: boolean | null
  isChecked: boolean
  onClickClauseLabel: () => void
  onClickDetailClause?: () => void
  peer: string
  peerChecked: { borderColor: string }
}

const ClauseCheckbox = ({
  clauseType,
  classNames,
  label,
  isClause = true,
  isRequired = null,
  isChecked,
  peer,
  peerChecked,
  onClickClauseLabel,
  onClickDetailClause,
}: IClauseCheckbox) => {
  const fomatRequired = (isRequired: boolean | null) => {
    if (isRequired === null) return ""

    if (isRequired === true) return "[필수]"

    if (isRequired === false) return "[선택]"

    return ""
  }

  return (
    <div
      className={`${classNames} relative w-full mr-[10px] flex justify-between py-[8px]`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        name={clauseType}
        id={clauseType}
        className={`mr-[10px] overflow-hidden absolute top-[2px] left-[2px] w-[1px] h-[1px] border-none bg-transparent z-10 appearance-none ${peer}`}
        readOnly
      />

      <label
        htmlFor={clauseType}
        onClick={onClickClauseLabel}
        className={`ml-[10px] text-[14px] sm:text-[12px] md:text-[12px] inline-block cursor-pointer py-[5px] pl-[18px] after:top-1/2 after:left-[6px] after:w-[6px] after:h-[11px] after:mt-[-8px] after:absolute after:content-[''] after:border-r-[1px] after:border-b-[1px] after:rotate-45 after:border-border ${peerChecked.borderColor} truncate pr-[80px]`}
      >
        <span className="text-lightRed py-[5px]">
          {fomatRequired(isRequired)}
        </span>{" "}
        {label}
      </label>

      {isClause && (
        <Button
          onClick={onClickDetailClause}
          classNames="absolute top-1/2 right-0 transform -translate-y-1/2 py-[5px] text-[12px] sm:text-[10px] md:text-[10px] text-lightGray after:content-[''] after:inline-block after:w-0 after:h-0 after:ml-[5px] after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-r-[8px] after:border-r-lightGray after:rotate-180 flexCenter"
          content="약관보기"
        />
      )}
    </div>
  )
}

export default ClauseCheckbox
