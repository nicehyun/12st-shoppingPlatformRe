"use client"

import ClauseCheckbox from "@/features/common/views/ClauseCheckbox"
import { showBasicModal } from "@/redux/features/modalSlice"
import { nextStep, selectSignUpStepState } from "@/redux/features/signUpSlice"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import SignUpStepButton from "./SignUpStepButton"
import { useSignUpClasue } from "../hooks/useSignUpClasue"
import { useEffect } from "react"
import SignUpStepLayout from "./SignUpStepLayout"

const SignUpClause = () => {
  const dispatch = useAppDispatch()
  const signUpStep = useAppSelector(selectSignUpStepState)

  const { checkedClaseState, toggleClauseCheck, resetClauseCheck } =
    useSignUpClasue()

  const {
    age: isAgeClauseCheck,
    term: isTermClauseCheck,
    privacy: isPrivacyClauseCheck,
    marketing: isMarketingClauseCheck,
  } = checkedClaseState

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

  useEffect(() => {
    if (signUpStep === 0) {
      resetClauseCheck()
    }
  }, [signUpStep])

  return (
    <div className="flex flex-col px-[10px] py-[20px]">
      <h3 className="text-[16px] pt-[18px] font-bold tracking-[1.5px] mr-[80px] mb-[50px]">
        12st 이용약관 동의
      </h3>

      <SignUpStepLayout
        isButtonDisabled={
          !isAgeClauseCheck || !isPrivacyClauseCheck || !isTermClauseCheck
        }
        buttonContent="동의하고 가입하기"
      >
        <ClauseCheckbox
          clauseType="signUp-clause-all"
          label="모두 동의 (선택 정보 포함)"
          isClause={false}
          classNames="border-b-[1px] border-lightBlack"
          isChecked={isAgeClauseCheck}
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
          isChecked={isAgeClauseCheck}
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
          isChecked={isTermClauseCheck}
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
          isChecked={isPrivacyClauseCheck}
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
          isChecked={isMarketingClauseCheck}
          isRequired={false}
          peer="peer/marketing"
          peerChecked={{
            borderColor: "peer-checked/marketing:after:border-lightRed",
          }}
          onClickClauseLabel={toggleMarketingClauseCheck}
          onClickDetailClause={handleMarketingClauseClick}
        />
      </SignUpStepLayout>
    </div>
  )
}

export default SignUpClause
