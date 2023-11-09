import MyPageWriteTable from "./MyPageWriteTable"
import MyPageCheckoutSearchContent from "./MyPageCheckoutSearchContent"

const MyPageCheckoutSearch = () => {
  return (
    <>
      <MyPageWriteTable
        tableContent={<MyPageCheckoutSearchContent />}
        tableTitle="주문정보"
        className="border-border border-t-[1px]"
        maxWidth={500}
        isNoneLiTag
      />
    </>
  )
}

export default MyPageCheckoutSearch
