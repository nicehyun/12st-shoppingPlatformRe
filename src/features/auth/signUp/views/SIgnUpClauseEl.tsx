import Checkbox from "../../../../common/views/Checkbox"

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

  return (
    <Checkbox
      id={clauseType}
      isChecked={isChecked}
      onClickCheckbox={onClickClause}
      checkboxLabel={
        <>
          <span className="text-lightBlack py-[5px]">
            {fomatRequired(isRequired)}
          </span>{" "}
          {label}
        </>
      }
      peer={peer}
      peerChecked={peerChecked}
    >
      {isClause && (
        <button
          className="py-[5px] text-[14px] sm:text-[10px] md:text-[12px] text-lightRed after:content-[''] after:inline-block after:w-0 after:h-0 after:ml-[5px] after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-r-[8px] after:border-r-lightRed after:rotate-180 flexCenter"
          type="button"
        >
          약관보기
        </button>
      )}
    </Checkbox>
  )
}

export default SignUpClauseEl
