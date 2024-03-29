import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import MyPageSearchInputAndButton from "./SearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"
import { showBasicModal } from "@/redux/features/modalSlice"
import {
  resetCheckoutInfo,
  selectSelectedCheckoutInfo,
} from "@/redux/features/myPageSlice"
import { useEffect } from "react"
import { getKoreanPaymentMethod } from "../../models/payment"
import { parseISOStringToDateTime } from "../../models/date"

const CheckoutSearchContent = () => {
  const dispatch = useAppDispatch()
  const selectedCheckoutInfo = useAppSelector(selectSelectedCheckoutInfo)

  const dateTime = selectedCheckoutInfo.checkoutDate
    ? parseISOStringToDateTime(selectedCheckoutInfo.checkoutDate)
    : null

  const selectedCheckoutPaymentList = [
    getKoreanPaymentMethod(
      selectedCheckoutInfo.payment?.selectedPayment.value ?? ""
    ),
    selectedCheckoutInfo.payment?.creditName,
    selectedCheckoutInfo.payment?.period,
  ]

  const checkoutSearchContentList = [
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutProductName",
      value: selectedCheckoutInfo.product?.name ?? "",
      label: "상품명",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutDate",
      value: `${
        dateTime?.every((checkoutDateEl) => !!checkoutDateEl)
          ? dateTime
              .map(
                (checkoutDateEl, index) =>
                  `${
                    index === 0 ? "" : index === 4 ? " : " : " - "
                  }${checkoutDateEl}`
              )
              .join("")
          : ""
      }`,
      label: "주문일자",
    },
    {
      id: "coustomweCounselingWrite-checkoutInfo__checkoutPayment",
      value:
        selectedCheckoutPaymentList[0] ??
        `${selectedCheckoutPaymentList[1]} - ${selectedCheckoutPaymentList[2]}`,
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

  useEffect(() => {
    return () => {
      dispatch(resetCheckoutInfo())
    }
  }, [])
  return (
    <div className="w-full">
      <MyPageSearchInputAndButton
        isLoading={false}
        id="coustomweCounselingWrite-checkoutInfo__checkoutNumber"
        placeholder="주문번호를 조회해주세요"
        buttonContent="주문번호조회"
        onClickSearchButton={handleSearchButtonClick}
        searchInputValue={selectedCheckoutInfo.checkoutNumber ?? ""}
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

export default CheckoutSearchContent
