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
          className="mx-[20px] w-2/3"
        />
        <MyPageTableHeaderEl headerContent="주문내역" className="w-2/3" />
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
