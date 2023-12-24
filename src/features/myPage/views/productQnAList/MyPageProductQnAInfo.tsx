import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageProductQnAContentList from "./MyPageProductQnAContentList"

const MyPageProductQnAInfo = () => {
  return (
    <section>
      <MyPageSectionTitle title="상품 Q&A 내역" />
      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl headerContent="상품명" className="w-1/4" isStart />
        <MyPageTableHeaderEl
          headerContent="문의내용"
          isStart
          className="w-1/4"
        />
        <MyPageTableHeaderEl headerContent="작성일" className="w-1/4" />
        <MyPageTableHeaderEl headerContent="답변유무" className="w-1/4" />
      </MyPageListHeaderLayout>

      <MyPageProductQnAContentList />
    </section>
  )
}

export default MyPageProductQnAInfo
