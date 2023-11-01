import MyPageSearchInputAndButton from "./MyPageSearchInputAndButton"
import MyPageSearchResultEl from "./MyPageSearchResultEl"

const MyPageProductSearchContent = () => {
  const productSearchContentList = [
    {
      id: "coustomweCounselingWrite-productInfo__checkoutProductName",
      value: "",
      label: "상품명",
    },
    {
      id: "coustomweCounselingWrite-productInfo__checkoutDate",
      value: "",
      label: "판매가",
    },
  ]
  return (
    <div className="w-full">
      <MyPageSearchInputAndButton
        id="coustomweCounselingWrite-productInfo__productNumber"
        placeholder="상품번호를 조회해주세요"
        buttonContent="상품번호조회"
      />

      <div className="mt-[20px] leading-[50px] text-[16px]">
        {productSearchContentList.map((productSearchContentEl) => (
          <MyPageSearchResultEl
            id={productSearchContentEl.id}
            label={productSearchContentEl.label}
            value=""
            key={productSearchContentEl.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPageProductSearchContent
