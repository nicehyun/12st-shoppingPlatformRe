"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import { showBasicModal } from "@/redux/features/modalSlice"

import { useAppDispatch } from "@/redux/hooks"

export interface ISignUpClause {
  clause: {
    all: boolean
    age: boolean
    term: boolean
    privacy: boolean
    marketing: boolean
  }
  toggleClauseCheck: {
    toggleAllCheck: () => void
    toggleAgeClauseCheck: () => void
    toggleTermClauseCheck: () => void
    togglePrivacyClauseCheck: () => void
    toggleMarketingClauseCheck: () => void
  }
}

const SignUpClause = ({ clause, toggleClauseCheck }: ISignUpClause) => {
  const dispatch = useAppDispatch()

  const { all, age, marketing, privacy, term } = clause

  const {
    toggleAllCheck,
    toggleAgeClauseCheck,
    toggleMarketingClauseCheck,
    togglePrivacyClauseCheck,
    toggleTermClauseCheck,
  } = toggleClauseCheck

  const handleTermClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-term",
        modalTitle: "이용약관 동의",
        modalContent: "TermClause",
      })
    )
  }
  const handlePrivacyClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-privacy",
        modalTitle: "개인정보 수집 및 이용 동의",
        modalContent: "SignupCollectionOfUserInfoClause",
      })
    )
  }

  const handleMarketingClauseClick = () => {
    dispatch(
      showBasicModal({
        modalId: "clause-marketing",
        modalTitle: "광고성 정보 수신 및 마케팅 활용 동의",
        modalContent: "MarketingClause",
      })
    )
  }

  return (
    <div className="flex flex-col px-[10px] py-[20px]">
      <h3 className="text-[16px] pt-[18px] font-bold tracking-[1.5px] mr-[80px] mb-[50px]">
        12st 이용약관 동의
      </h3>

      <div className="flex-grow">
        <ClauseCheckbox
          clauseType="signUp-clause-all"
          label="모두 동의 (선택 정보 포함)"
          isClause={false}
          classNames="border-b-[1px] border-lightBlack"
          isChecked={all}
          peer="peer/all"
          peerChecked={{
            borderColor: "peer-checked/all:after:border-lightRed",
          }}
          onClickClauseLabel={toggleAllCheck}
        />

        <ClauseCheckbox
          clauseType="age"
          label="만 14세 이상입니다"
          isClause={false}
          isChecked={age}
          isRequired={true}
          peer="peer/age"
          peerChecked={{
            borderColor: "peer-checked/age:after:border-lightRed",
          }}
          onClickClauseLabel={toggleAgeClauseCheck}
        />

        <ClauseCheckbox
          clauseType="term"
          label="이용약관 동의"
          isClause={true}
          isChecked={term}
          isRequired={true}
          peer="peer/term"
          peerChecked={{
            borderColor: "peer-checked/term:after:border-lightRed",
          }}
          onClickClauseLabel={toggleTermClauseCheck}
          onClickDetailClause={handleTermClauseClick}
        />

        <ClauseCheckbox
          clauseType="privacy"
          label="개인정보 수집 및 이용 동의"
          isClause={true}
          isChecked={privacy}
          isRequired={true}
          peer="peer/privacy"
          peerChecked={{
            borderColor: "peer-checked/privacy:after:border-lightRed",
          }}
          onClickClauseLabel={togglePrivacyClauseCheck}
          onClickDetailClause={handlePrivacyClauseClick}
        />

        <ClauseCheckbox
          clauseType="marketing"
          label="광고성 정보 수신 및 마케팅 활용 동의"
          isClause={true}
          isChecked={marketing}
          isRequired={false}
          peer="peer/marketing"
          peerChecked={{
            borderColor: "peer-checked/marketing:after:border-lightRed",
          }}
          onClickClauseLabel={toggleMarketingClauseCheck}
          onClickDetailClause={handleMarketingClauseClick}
        />
      </div>
    </div>
  )
}

export default SignUpClause
