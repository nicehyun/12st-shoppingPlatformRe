"use client"

import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import MyPageCheckoutEl from "./MyPageCheckoutEl"

import MyPageSectionTitle from "../MyPageSectionTitle"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"

const MyPageCheckoutList = () => {
  const { checkoutList } = useGetCheckoutListQuery()

  return (
    <section>
      <MyPageSectionTitle title="주문내역" />

      <div className="border-b-border border-b-[1px] dark:border-b-lightBlack">
        <div className="flex border-b-black dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] font-semibold">
          <MyPageTableHeaderEl headerContent="주문일" equalParts={3} isStart />
          <MyPageTableHeaderEl headerContent="주문내역" equalParts={3} />
          <MyPageTableHeaderEl headerContent="결제금액" equalParts={3} isEnd />
        </div>

        <div>
          {checkoutList.length === 0 ? (
            <div className="flexCenter h-[100px] font-bold text-[18px]">
              주문내역이 없습니다
            </div>
          ) : (
            checkoutList.map((checkoutEl, index) => (
              <MyPageCheckoutEl
                checkoutList={checkoutEl}
                className={
                  index !== 0
                    ? "border-t-[1px] border-border dark:border-b-lightBlack"
                    : ""
                }
                key={checkoutList[index]?.checkoutNumber}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default MyPageCheckoutList
