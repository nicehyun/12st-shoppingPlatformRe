import AddressInfo from "@/common/views/AddressInfo"
import Button from "@/common/views/Button"
import MyPageSectionTitle from "./MyPageSectionTitle"

const MyPageUserInfoOfModification = () => {
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
              classNames="border-[1px] border-border absolute right-0 bottom-0 py-[6px] px-[30px] text-[14px] font-semibold"
            />
          </div>
        </li>

        <li className="border-b-[4px] py-[20px]">
          <div className="flex flex-col">
            <h4 className="font-bold mb-[20px] text-[18px]">주소정보</h4>

            <AddressInfo />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default MyPageUserInfoOfModification
