import ProductMainInfoEl from "./ProductMainInfoEl"

interface IProductDeliveryInfo {
  deliveryFree: number
}

const ProductDeliveryInfo = ({ deliveryFree }: IProductDeliveryInfo) => {
  return (
    <ProductMainInfoEl className="font-bold text-[12px]">
      <div className="flex justify-between">
        <span className="block w-[200px]">배송비</span>

        <div>
          {deliveryFree === 0 ? (
            <span>무료배송</span>
          ) : (
            <div>
              <span className="block mb-[10px]">
                해당 브랜드 제품으로만 50000원 이상 구매시 무료배송 ( 미만시
                배송비 {deliveryFree}원 발생 )
              </span>
              <span className="block">
                제주도를 포함한 도서/산간지역은 추가배송비 3,000원
              </span>
            </div>
          )}
        </div>
      </div>
    </ProductMainInfoEl>
  )
}

export default ProductDeliveryInfo
