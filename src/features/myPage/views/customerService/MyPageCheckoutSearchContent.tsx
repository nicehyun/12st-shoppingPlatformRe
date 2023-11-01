import { useAppDispatch } from "@/redux/hooks"
import MyPageSearchInputAndButton from "./MyPageSearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"
import { showBasicModal } from "@/redux/features/modalSlice"

const MyPageCheckoutSearchContent = () => {
  const dispatch = useAppDispatch()
  const checkoutSearchContentList = [
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutProductName",
      value: "",
      label: "상품명",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutDate",
      value: "",
      label: "주문일자",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutPayment",
      value: "",
      label: "결제방법",
    },
  ]

  const handleSearchButtonClick = () => {
    dispatch(
      showBasicModal({
        modalId: "modal-customerCounselingWrite__checkoutInfoSearch",
        modalTitle: "주문조회",
        modalContent: "checkoutInfoSearch",
      })
    )
  }
  return (
    <div className="w-full">
      <MyPageSearchInputAndButton
        id="coustomweCounselingWrite-checkoutInfo__checkoutNumber"
        placeholder="주문번호를 조회해주세요"
        buttonContent="주문번호조회"
        onClickSearchButton={handleSearchButtonClick}
      />

      <div className="mt-[20px] leading-[50px] text-[16px]">
        {checkoutSearchContentList.map((checkoutSearchContentEl) => (
          <MyPageSearchResultEl
            id={checkoutSearchContentEl.id}
            label={checkoutSearchContentEl.label}
            value=""
            key={checkoutSearchContentEl.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPageCheckoutSearchContent
