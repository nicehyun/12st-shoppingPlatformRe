import Input from "@/common/views/Input"
import MyPageWriteTable from "./MyPageWriteTable"
import TextArea from "@/common/views/TextArea"
import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/common/views/PcConditionComponent"

const MyPageCustomerCounselingWriteContentList = () => {
  return (
    <>
      <MobileViewConditionComponent
        component={
          <>
            <MyPageWriteTable
              isNoneLiTag
              tableTitle="1:1 문의 내용"
              tableContent={
                <>
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
                </>
              }
              className="border-border border-t-[1px]"
            />
          </>
        }
      />

      <PcConditionComponent
        component={
          <>
            <MyPageWriteTable
              tableTitle="제목"
              tableContent={
                <Input
                  id="coustomweCounselingWrite-content__title"
                  name="coustomweCounselingWrite-content__title"
                  classNames="w-full"
                  maxLength={100}
                  placeholder="1:1 문의 제목을 입력해주세요"
                />
              }
              className="border-border border-t-[1px]"
              isNoneLiTag
            />
            <MyPageWriteTable
              tableTitle="내용"
              tableContent={
                <TextArea
                  id="coustomweCounselingWrite-content__content"
                  cols={30}
                  rows={5}
                  placeholder="1:1 문의 내용을 입력해주세요"
                />
              }
              className="border-border border-t-[1px] border-b-[1px]"
              isNoneLiTag
            />
          </>
        }
      />
    </>
  )
}

export default MyPageCustomerCounselingWriteContentList
