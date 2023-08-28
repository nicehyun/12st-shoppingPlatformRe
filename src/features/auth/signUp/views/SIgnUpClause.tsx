"use client"

import {
  toggleAgreeToAllClause,
  seletSignUpClauseState,
  toggleAgreeToAgeClause,
  toggleAgreeToMarketingClause,
  toggleAgreeToPrivacyClause,
  toggleAgreeToTermClause,
} from "@/redux/features/signUpSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import SignUpClauseEl from "./SIgnUpClauseEl"

const SignUpClause = () => {
  const { age, marketing, privacy, term, all } = useAppSelector(
    seletSignUpClauseState
  )

  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col px-[10px] py-[20px]">
      <h3 className="text-[16px] pt-[18px] font-bold tracking-[1.5px] mr-[80px] mb-[50px]">
        12st 이용약관 동의
      </h3>

      <div className="flex-grow">
        <SignUpClauseEl
          clauseType="all"
          label="모두 동의 (선택 정보 포함)"
          isClause={false}
          classNames="border-b-[1px] border-lightBlack"
          isChecked={all}
          peer="peer/all"
          peerChecked={{
            borderColor: "peer-checked/all:after:border-lightRed",
          }}
          onClickClause={() => dispatch(toggleAgreeToAllClause())}
        />

        <SignUpClauseEl
          clauseType="age"
          label="만 14세 이상입니다"
          isClause={false}
          isChecked={age}
          isRequired={true}
          peer="peer/age"
          peerChecked={{
            borderColor: "peer-checked/age:after:border-lightRed",
          }}
          onClickClause={() => dispatch(toggleAgreeToAgeClause())}
        />

        <SignUpClauseEl
          clauseType="term"
          label="이용약관 동의"
          isClause={true}
          isChecked={term}
          isRequired={true}
          peer="peer/term"
          peerChecked={{
            borderColor: "peer-checked/term:after:border-lightRed",
          }}
          onClickClause={() => dispatch(toggleAgreeToTermClause())}
        />

        <SignUpClauseEl
          clauseType="privacy"
          label="개인정보 수집 및 이용 동의"
          isClause={true}
          isChecked={privacy}
          isRequired={true}
          peer="peer/privacy"
          peerChecked={{
            borderColor: "peer-checked/privacy:after:border-lightRed",
          }}
          onClickClause={() => dispatch(toggleAgreeToPrivacyClause())}
        />

        <SignUpClauseEl
          clauseType="marketing"
          label="광고성 정보 수신 및 마케팅 활용 동의"
          isClause={true}
          isChecked={marketing}
          isRequired={false}
          peer="peer/marketing"
          peerChecked={{
            borderColor: "peer-checked/marketing:after:border-lightRed",
          }}
          onClickClause={() => dispatch(toggleAgreeToMarketingClause())}
        />
      </div>
    </div>
  )
}

export default SignUpClause
