import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import MyPageSearchInputAndButton from "./MyPageSearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"
import { showBasicModal } from "@/redux/features/modalSlice"
import { selectSelectedCheckoutInfo } from "@/redux/features/myPageSlice"

const MyPageCheckoutSearchContent = () => {
  const dispatch = useAppDispatch()
  const selectedCheckoutInfo = useAppSelector(selectSelectedCheckoutInfo)

  console.log(selectedCheckoutInfo)

  const selectedCheckoutDate = [
    selectedCheckoutInfo.checkoutDate?.year,
    selectedCheckoutInfo.checkoutDate?.month,
    selectedCheckoutInfo.checkoutDate?.date,
  ]

  const myPageSearchResultPaymentValue = `${
    selectedCheckoutInfo.payment?.selectedPayment
  }${
    selectedCheckoutInfo.payment?.creditName
      ? `-${selectedCheckoutInfo.payment?.creditName}`
      : ""
  }
  ${
    selectedCheckoutInfo.payment?.period
      ? ` (${selectedCheckoutInfo.payment?.period})`
      : ""
  }`

  const checkoutSearchContentList = [
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutProductName",
      value: selectedCheckoutInfo.product?.name ?? "",
      label: "상품명",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutDate",
      value: `${
        selectedCheckoutDate.every((checkoutDateEl) => !!checkoutDateEl)
          ? `${selectedCheckoutDate[0]}-${selectedCheckoutDate[1]}-${selectedCheckoutDate[2]}`
          : ""
      }`,
      label: "주문일자",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutPayment",
      value: myPageSearchResultPaymentValue,
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
        inputValue={selectedCheckoutInfo.checkoutNumber ?? ""}
      />

      <div className="mt-[20px] leading-[50px] text-[16px]">
        {checkoutSearchContentList.map((checkoutSearchContentEl) => (
          <MyPageSearchResultEl
            id={checkoutSearchContentEl.id}
            label={checkoutSearchContentEl.label}
            value={checkoutSearchContentEl.value}
            key={checkoutSearchContentEl.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPageCheckoutSearchContent
