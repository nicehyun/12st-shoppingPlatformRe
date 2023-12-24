import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageCheckoutNumberToCheckoutPairList from "./MyPageCheckoutNumberToCheckoutPairList"

const MyPageModalCheckoutList = () => {
  return (
    <div>
      <p className="text-[16px] md:text-[14px] sm:text-[14px] font-semibold">
        *문의를 원하시는 주문번호, 상품명을 선택해주세요.
      </p>

      <MyPageListHeaderLayout className="mt-[20px]">
        <MyPageTableHeaderEl className="w-1/4" headerContent="주문번호" />
        <MyPageTableHeaderEl className="w-1/4" headerContent="주문일자" />
        <MyPageTableHeaderEl className="w-1/2" headerContent="상품명" />
      </MyPageListHeaderLayout>

      <MyPageCheckoutNumberToCheckoutPairList />
    </div>
  )
}

export default MyPageModalCheckoutList
