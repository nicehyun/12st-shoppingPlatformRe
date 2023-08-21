interface ISignUpClauseEl {
  label: string
  clauseType: "term" | "age" | "privacy" | "marketing" | "all"
  classNames?: string
  isClause?: boolean
  isRequired?: boolean | null
  isChecked: boolean
  onClickClause: () => void
  peer: string
  peerChecked: { borderColor: string }
}

const SignUpClauseEl = ({
  clauseType,
  classNames,
  label,
  isClause = true,
  isRequired = null,
  isChecked,
  peer,
  peerChecked,
  onClickClause,
}: ISignUpClauseEl) => {
  const fomatRequired = (isRequired: boolean | null) => {
    if (isRequired === null) return ""

    if (isRequired === true) return "[필수]"

    if (isRequired === false) return "[선택]"

    return ""
  }

  // TODO : checked 설정하기

  return (
    <div
      className={`${classNames} relative p-[8px] flex items-center max-w-[400px]`}
    >
      <span className="py-[5px] mr-[10px]" onClick={onClickClause}>
        <input
          type="checkbox"
          checked={isChecked}
          name={clauseType}
          className={`checked: mr-[10px] overflow-hidden absolute top-[2px] left-[2px] w-[1px] h-[1px] border-none bg-transparent z-10 appearance-none ${peer}`}
        />

        <label
          htmlFor={clauseType}
          className={`text-[14px] sm:text-[10px] md:text-[12px] min-w-[300px] inline-block cursor-pointer py-[5px] pl-[18px] after:top-1/2 after:left-[6px] after:w-[6px] after:h-[11px] after:mt-[-8px] after:absolute after:content-[''] after:border-r-[1px] after:border-b-[1px] after:rotate-45 after:border-border ${peerChecked.borderColor}`}
        >
          <span className="text-lightBlack py-[5px]">
            {fomatRequired(isRequired)}
          </span>{" "}
          {label}
        </label>
      </span>
      {isClause && (
        <button
          className="py-[5px] text-[14px] sm:text-[10px] md:text-[12px] text-lightRed after:content-[''] after:inline-block after:w-0 after:h-0 after:ml-[5px] after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-r-[8px] after:border-r-lightRed after:rotate-180 flexCenter"
          type="button"
        >
          약관보기
        </button>
      )}
    </div>
  )
}

export default SignUpClauseEl
