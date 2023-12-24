import MyPageSearchInputAndButton from "./MyPageSearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"
import { ChangeEvent, useState } from "react"
import { useSearchProductInfoMutation } from "../../hooks/useSearchProductInfoMutation"
import { numberToLocaleString } from "@/features/common/utils/price"
import Loading from "@/features/common/views/Loading"
import { useAppDispatch } from "@/redux/hooks"
import { showFeedbackModal } from "@/redux/features/modalSlice"

const MyPageProductSearchContent = () => {
  const dispatch = useAppDispatch()
  const [productSearchInputValue, setProductSearchInputValue] = useState("")

  const {
    mutateAsync: searchProductInfoMutateAsync,
    isLoading,
    data: searchProductInfo,
  } = useSearchProductInfoMutation()

  const productSearchContentList = [
    {
      id: "coustomweCounselingWrite-productInfo__productName",
      value: searchProductInfo?.name ?? "",
      label: "상품명",
    },
    {
      id: "coustomweCounselingWrite-productInfo__price",
      value: searchProductInfo
        ? numberToLocaleString(searchProductInfo?.price)
        : "",
      label: "판매가",
    },
  ]

  const handleProductSearchInputValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(Number(event.target.value))) return

    if (event.target.value.length === 12) return

    setProductSearchInputValue(event.target.value)
  }

  const handleSearchButtonClick = async () => {
    if (searchProductInfo?.id === productSearchInputValue) return
    const searchResult = await searchProductInfoMutateAsync(
      productSearchInputValue
    )
    if (!searchResult)
      dispatch(
        showFeedbackModal({
          modalContent: "상품번호가 정확하지 않거나, 상품이 존재하지 않습니다.",
        })
      )
  }
  return (
    <div className="w-full">
      <MyPageSearchInputAndButton
        id="coustomweCounselingWrite-productInfo__productNumber"
        placeholder="상품번호를 조회해주세요"
        buttonContent={
          isLoading ? (
            <Loading
              spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
              isFrame={false}
            />
          ) : (
            "상품번호조회"
          )
        }
        onClickSearchButton={handleSearchButtonClick}
        searchInputValue={productSearchInputValue}
        onChangeSearchInputValue={handleProductSearchInputValueChange}
        isReadOnly={false}
        isDisabled={productSearchInputValue === ""}
      />

      <div className="mt-[20px] leading-[50px] text-[16px]">
        {productSearchContentList.map((productSearchContentEl) => (
          <MyPageSearchResultEl
            id={productSearchContentEl.id}
            label={productSearchContentEl.label}
            value={productSearchContentEl.value}
            key={productSearchContentEl.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPageProductSearchContent
