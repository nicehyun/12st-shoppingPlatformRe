import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import useCheckoutNumberToProductInfoPair from "../../hooks/useCheckoutNumberToProductInfoPair"
import { useAppDispatch } from "@/redux/hooks"
import {
  SelectedCheckoutInfo,
  selectCheckoutInfo,
} from "@/redux/features/myPageSlice"
import { hideBasicModal } from "@/redux/features/modalSlice"

const MyPageModalCheckoutList = () => {
  const dispatch = useAppDispatch()
  const { checkoutNumberToCheckoutInfoPairList } =
    useCheckoutNumberToProductInfoPair()

  const handleCheckoutInfoSelect = (checkoutInfo: SelectedCheckoutInfo) => {
    dispatch(selectCheckoutInfo(checkoutInfo))
    dispatch(hideBasicModal())
  }

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

        {checkoutNumberToCheckoutInfoPairList.map(
          (checkoutNumberToCheckoutInfoPair, index) => (
            <div
              key={`checkoutNumberToCheckoutInfoPair__${checkoutNumberToCheckoutInfoPair.product.id}-${index}`}
              onClick={() =>
                handleCheckoutInfoSelect(checkoutNumberToCheckoutInfoPair)
              }
              className="flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border cursor-pointer group"
            >
              <MyPageTableContentEl
                equalParts={3}
                content={checkoutNumberToCheckoutInfoPair.checkoutNumber ?? ""}
                className="break-words group-hover:text-lightRed"
                NoCenter
              />

              <MyPageTableContentEl
                equalParts={3}
                content={`${checkoutNumberToCheckoutInfoPair.checkoutDate?.year}-${checkoutNumberToCheckoutInfoPair.checkoutDate?.month}-${checkoutNumberToCheckoutInfoPair.checkoutDate?.date}`}
              />
              <MyPageTableContentEl
                equalParts={3}
                content={checkoutNumberToCheckoutInfoPair.product.name}
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
