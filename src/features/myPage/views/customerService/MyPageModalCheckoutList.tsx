import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import useCheckoutNumberToProductInfoPair from "../../hooks/useCheckoutNumberToProductInfoPair"

const MyPageModalCheckoutList = () => {
  const { checkoutNumberToProductInfoPairList } =
    useCheckoutNumberToProductInfoPair()

  return (
    <div>
      <p className="text-[16px] md:text-[14px] sm:text-[14px] font-semibold">
        *문의를 원하시는 주문번호, 상품명을 선택해주세요.
      </p>

      <div className="mt-[20px]">
        <div className="flex font-extrabold h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-b-border border-t-[4px]">
          <MyPageTableHeaderEl equalParts={3} headerContent="주문번호" />
          <MyPageTableHeaderEl equalParts={3} headerContent="주문일자" />
          <MyPageTableHeaderEl equalParts={3} headerContent="상품명" />
        </div>

        {checkoutNumberToProductInfoPairList.map(
          (checkoutNumberToProductInfoPair, index) => (
            <div
              key={`checkoutNumberToProductInfoPair__${checkoutNumberToProductInfoPair.product.id}-${index}`}
              className="flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border cursor-pointer group"
            >
              <MyPageTableContentEl
                equalParts={3}
                content={checkoutNumberToProductInfoPair.checkoutNumber ?? ""}
                className="break-words group-hover:text-lightRed"
                NoCenter
              />

              <MyPageTableContentEl
                equalParts={3}
                content={`${checkoutNumberToProductInfoPair.checkoutDate?.year}-${checkoutNumberToProductInfoPair.checkoutDate?.month}-${checkoutNumberToProductInfoPair.checkoutDate?.date}`}
              />
              <MyPageTableContentEl
                equalParts={3}
                content={checkoutNumberToProductInfoPair.product.name}
                className="truncate-2"
                NoCenter
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default MyPageModalCheckoutList
