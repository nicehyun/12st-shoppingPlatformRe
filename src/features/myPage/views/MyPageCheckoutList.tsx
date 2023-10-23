import MyPageCheckoutHeaderEl from "./MyPageCheckoutHeaderEl"
import MyPageSectionTitle from "./MyPageSectionTitle"

const MyPageCheckoutList = () => {
  return (
    <section className="mt-[60px]">
      <MyPageSectionTitle title="주문내역" />

      <div className="border-b-border border-b-[1px] dark:border-b-lightBlack">
        <div className="flex border-b-black dark:border-white border-b-[1px]">
          <MyPageCheckoutHeaderEl headerContent="주문일" />
          <MyPageCheckoutHeaderEl headerContent="주문내역" />
          <MyPageCheckoutHeaderEl headerContent="주문번호" />
          <MyPageCheckoutHeaderEl headerContent="결제금액" />
        </div>

        <div className="flexCenter h-[100px] font-bold text-[18px]">
          주문내역이 없습니다
        </div>
      </div>
    </section>
  )
}

export default MyPageCheckoutList
