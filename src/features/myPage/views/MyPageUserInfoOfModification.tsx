"use client"

import AddressInfo from "@/common/views/AddressInfo"
import Button from "@/common/views/Button"
import ClauseCheckbox from "@/common/views/ClauseCheckbox"
import MyPageSectionTitle from "./MyPageSectionTitle"

const MyPageUserInfoOfModification = () => {
  const test = () => {
    const ttt = 123

    return ttt
  }
  return (
    <section>
      <MyPageSectionTitle title="회원정보 수정" />

      <ul>
        <li className="border-b-[1px] py-[20px]">
          <h4 className="font-bold mb-[20px] text-[18px]">회원정보</h4>
          <div className="mb-[20px] w-[400px]">
            <span className="inline-block w-[80px] text-lightBlack">성명</span>
            <span>승현</span>
          </div>

          <div>
            <span className="inline-block w-[80px] text-lightBlack">
              연락처
            </span>
            <span className="font-semibold">01012341234</span>
          </div>
        </li>

        <li className="border-b-[1px] py-[20px] ">
          <div className="flex flex-col w-[400px] md:w-full sm:w-full relative">
            <h4 className="font-bold mb-[20px] text-[18px]">이메일</h4>
            <span>test@test.com</span>

            <Button
              content="변경"
              classNames="border-[1px] border-border absolute right-0 bottom-0 py-[6px] px-[30px] text-[14px] font-semibold bordr-[1px] text-lightRed border-lightRed dark:bg-lightRed dark:text-white rounded-[5px]"
            />
          </div>
        </li>

        <li className="border-b-[4px] py-[20px]">
          <div className="flex flex-col w-[400px] md:w-full sm:w-full">
            <h4 className="font-bold mb-[20px] text-[18px]">주소정보</h4>

            <AddressInfo className="w-[400px] md:w-full sm:w-full" />
          </div>

          <Button
            content="저장하기"
            classNames="mt-[30px] h-[50px] w-[400px] md:w-full sm:w-full sm:h-[40px] md:h-[44px] border-[1px] text-lightRed border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
          />
        </li>

        <li className="border-b-[1px] py-[20px]">
          <h4 className="font-bold mb-[20px] text-[18px]">약관동의</h4>
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
        </li>
        <li className="py-[20px] text-[14px]">
          <Button content="회원탈퇴" classNames="underline" />
        </li>
      </ul>
    </section>
  )
}

export default MyPageUserInfoOfModification
