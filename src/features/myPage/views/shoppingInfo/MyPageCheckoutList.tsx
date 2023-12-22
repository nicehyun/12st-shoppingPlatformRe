import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageCheckoutListContentList from "./MyPageCheckoutListContentList"

const MyPageCheckoutList = () => {
  return (
    <section>
      <MyPageSectionTitle title="주문내역" />

      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl
          headerContent="주문일"
          isStart
          className="w-3/12"
        />
        <MyPageTableHeaderEl
          headerContent="주문번호"
          isStart
          className="mx-[20px] w-1/5"
        />
        <MyPageTableHeaderEl
          headerContent="주문내역"
          className="w-2/3 md:w-1/3 sm:w-1/4"
        />
        <MyPageTableHeaderEl
          headerContent="결제금액"
          isEnd
          className="w-3/12"
        />
      </MyPageListHeaderLayout>

      <MyPageCheckoutListContentList />
    </section>
  )
}

export default MyPageCheckoutList
