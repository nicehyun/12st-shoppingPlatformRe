import SignUpClauseEl from "./SIgnUpClauseEl"

const SignUpClause = () => {
  return (
    <div className="flex md:flex-col sm:flex-col lg:border-t-[1px] lg:border-lightBlack xl:border-t-[1px] xl:border-lightBlack px-[10px] py-[20px]">
      <h3 className="text-[16px] pt-[18px] font-bold tracking-[1.5px] mr-[80px] sm:mb-[50px] md:mb-[50px]">
        12st 이용약관 동의
      </h3>

      <div className="flex-grow">
        <SignUpClauseEl
          clauseType="all"
          label="모두 동의 (선택 정보 포함)"
          isClause={false}
          isRequired={false}
          classNames="border-b-[1px] border-lightBlack"
          isChecked={true}
          peer="peer/all"
          peerChecked={{
            borderColor: "peer-checked/all:after:border-lightRed",
          }}
        />

        <SignUpClauseEl
          clauseType="age"
          label="만 14세 이상입니다"
          isClause={false}
          isChecked={true}
          peer="peer/age"
          peerChecked={{
            borderColor: "peer-checked/age:after:border-lightRed",
          }}
        />

        <SignUpClauseEl
          clauseType="term"
          label="이용약관 동의"
          isClause={true}
          isChecked={true}
          peer="peer/term"
          peerChecked={{
            borderColor: "peer-checked/term:after:border-lightRed",
          }}
        />

        <SignUpClauseEl
          clauseType="privacy"
          label="개인정보 수집 및 이용 동의"
          isClause={true}
          isChecked={true}
          peer="peer/privacy"
          peerChecked={{
            borderColor: "peer-checked/privacy:after:border-lightRed",
          }}
        />

        <SignUpClauseEl
          clauseType="marketing"
          label="광고성 정보 수신 및 마케팅 활용 동의"
          isClause={true}
          isChecked={true}
          peer="peer/marketing"
          peerChecked={{
            borderColor: "peer-checked/marketing:after:border-lightRed",
          }}
        />
      </div>
    </div>
  )
}

export default SignUpClause
