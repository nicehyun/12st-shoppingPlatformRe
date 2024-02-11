import MyPageWriteTable from "./MyPageWriteTable"
import CheckoutSearchContent from "./CheckoutSearchContent"

const CheckoutSearch = () => {
  return (
    <>
      <MyPageWriteTable
        tableContent={<CheckoutSearchContent />}
        tableTitle="주문정보"
        className="border-border border-t-[1px]"
        maxWidth={500}
      />
    </>
  )
}

export default CheckoutSearch
