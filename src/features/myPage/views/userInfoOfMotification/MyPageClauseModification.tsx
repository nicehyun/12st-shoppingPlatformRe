"use client"

import Button from "@/common/views/Button"
import ClauseCheckbox from "@/common/views/ClauseCheckbox"

const MyPageClauseModification = () => {
  const test = () => {
    const ttt = 123

    return ttt
  }
  return (
    <>
      <ClauseCheckbox
        clauseType="marketing"
        label="광고성 정보 수신 및 마케팅 활용 동의"
        isClause={true}
        isChecked={true}
        isRequired={false}
        peer="peer/marketing"
        peerChecked={{
          borderColor: "peer-checked/marketing:after:border-lightRed",
        }}
        onClickClauseLabel={test}
        onClickDetailClause={test}
      />
      <Button
        content="저장하기"
        classNames="mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
      />
    </>
  )
}

export default MyPageClauseModification
