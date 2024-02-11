import MyPageListTableHeader from "../MyPageListTableHeader"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"

const ProductQnAInfoSectionHeader = () => {
  return (
    <MyPageListTableHeader>
      <MyPageTableHeaderEl headerContent="상품명" className="w-1/4" isStart />
      <MyPageTableHeaderEl headerContent="문의내용" isStart className="w-1/4" />
      <MyPageTableHeaderEl headerContent="작성일" className="w-1/4" />
      <MyPageTableHeaderEl headerContent="답변유무" className="w-1/4" />
    </MyPageListTableHeader>
  )
}

export default ProductQnAInfoSectionHeader
