import MyPageSearchInputAndButton from "./SearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"
import { useSearchProductInfoMutation } from "../../hooks/useSearchProductInfoMutation"
import { numberToLocaleString } from "@/features/common/utils/price"

const ProductSearchContent = () => {
  const {
    searchProductInfoMutateAsync,
    isLoading,
    searchProductInfo,
    handleProductSearchInputValueChange,
    productSearchInputValue,
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

  return (
    <div className="w-full">
      <MyPageSearchInputAndButton
        id="coustomweCounselingWrite-productInfo__productNumber"
        placeholder="상품번호를 조회해주세요"
        buttonContent="상품번호조회"
        onClickSearchButton={searchProductInfoMutateAsync}
        searchInputValue={productSearchInputValue}
        onChangeSearchInputValue={handleProductSearchInputValueChange}
        isReadOnly={false}
        isLoading={isLoading}
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

export default ProductSearchContent
