import Input from "@/features/common/views/Input"
import MyPageWriteTable from "./MyPageWriteTable"
import TextArea from "@/features/common/views/TextArea"

const CustomerCounselingWriteContentList = () => {
  return (
    <MyPageWriteTable
      tableTitle="1:1 문의 내용"
      className="border-border border-t-[1px]"
    >
      <Input
        id="coustomweCounselingWrite-content__title"
        name="coustomweCounselingWrite-content__title"
        classNames="w-full md:w-full sm:w-full"
        maxLength={100}
        placeholder="1:1 문의 제목을 입력해주세요"
      />
      <TextArea
        id="coustomweCounselingWrite-content__content"
        cols={30}
        rows={5}
        placeholder="1:1 문의 내용을 입력해주세요"
      />
    </MyPageWriteTable>
  )
}

export default CustomerCounselingWriteContentList
