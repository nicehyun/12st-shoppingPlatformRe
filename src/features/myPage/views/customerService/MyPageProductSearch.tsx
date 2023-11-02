import MyPageProductSearchContent from "./MyPageProductSearchContent"
import MyPageWriteTable from "./MyPageWriteTable"

const MyPageProductSearch = () => {
  return (
    <>
      <MyPageWriteTable
        tableContent={<MyPageProductSearchContent />}
        tableTitle="상품정보"
        className="border-border border-t-[1px]"
        maxWidth={500}
        isNoneLiTag
      />
    </>
  )
}

export default MyPageProductSearch
