import ProductSearchContent from "./ProductSearchContent"
import MyPageWriteTable from "./MyPageWriteTable"

const ProductSearch = () => {
  return (
    <>
      <MyPageWriteTable
        tableContent={<ProductSearchContent />}
        tableTitle="상품정보"
        className="border-border border-t-[1px]"
        maxWidth={500}
      />
    </>
  )
}

export default ProductSearch
