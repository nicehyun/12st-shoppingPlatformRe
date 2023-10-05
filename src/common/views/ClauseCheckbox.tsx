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
      className={`${classNames} relative p-[8px] flex items-center justify-between w-full`}
    >
      <span className="py-[5px] mr-[10px] flex justify-between">
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
          className={`text-[14px] sm:text-[12px] md:text-[12px] min-w-[300px] inline-block cursor-pointer py-[5px] pl-[18px] after:top-1/2 after:left-[6px] after:w-[6px] after:h-[11px] after:mt-[-8px] after:absolute after:content-[''] after:border-r-[1px] after:border-b-[1px] after:rotate-45 after:border-border ${peerChecked.borderColor}`}
        >
          <span className="text-lightRed py-[5px]">
            {fomatRequired(isRequired)}
          </span>{" "}
          {label}
        </label>
      </span>
      {isClause && (
        <Button
          onClick={onClickDetailClause}
          classNames="py-[5px] text-[14px] sm:text-[12px] md:text-[12px] text-lightGray after:content-[''] after:inline-block after:w-0 after:h-0 after:ml-[5px] after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-r-[8px] after:border-r-lightGray after:rotate-180 flexCenter"
          content="약관보기"
        />
      )}
    </div>
  )
}

export default ClauseCheckbox
