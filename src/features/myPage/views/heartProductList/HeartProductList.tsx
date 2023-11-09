"use client"

import usePagination from "@/common/hooks/usePagination"
import ProductCard from "@/common/views/ProductCard"
import MyPageListNoneContents from "../MyPageListNoneContents"

const testProducList: any[] = [
  {
    brand: "화이트워터보이즈1",
    category1: "패션의류",
    category2: "남성의류",
    category3: "바지",
    category4: "",
    deliveryFree: 0,
    discount: 17,
    discountedPrice: 23655,
    id: "10027645998",
    image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
    maker: "",
    mallName: "화이트워터보이즈",
    name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
    price: 28500,
    reviewCount: 0,
    sellCount: 57,
  },
  {
    brand: "화이트워터보이즈2",
    category1: "패션의류",
    category2: "남성의류",
    category3: "바지",
    category4: "",
    deliveryFree: 0,
    discount: 17,
    discountedPrice: 23655,
    id: "10027645998",
    image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
    maker: "",
    mallName: "화이트워터보이즈",
    name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
    price: 28500,
    reviewCount: 0,
    sellCount: 57,
  },
  {
    brand: "화이트워터보이즈3",
    category1: "패션의류",
    category2: "남성의류",
    category3: "바지",
    category4: "",
    deliveryFree: 0,
    discount: 17,
    discountedPrice: 23655,
    id: "10027645998",
    image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
    maker: "",
    mallName: "화이트워터보이즈",
    name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
    price: 28500,
    reviewCount: 0,
    sellCount: 57,
  },
  {
    brand: "화이트워터보이즈4",
    category1: "패션의류",
    category2: "남성의류",
    category3: "바지",
    category4: "",
    deliveryFree: 0,
    discount: 17,
    discountedPrice: 23655,
    id: "10027645998",
    image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
    maker: "",
    mallName: "화이트워터보이즈",
    name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
    price: 28500,
    reviewCount: 0,
    sellCount: 57,
  },
  {
    brand: "화이트워터보이즈55",
    category1: "패션의류",
    category2: "남성의류",
    category3: "바지",
    category4: "",
    deliveryFree: 0,
    discount: 17,
    discountedPrice: 23655,
    id: "10027645998",
    image: "https://shopping-phinf.pstatic.net/main_1002764/10027645998.13.jpg",
    maker: "",
    mallName: "화이트워터보이즈",
    name: "[당일발송] 5인치 밴딩 반바지 퓨어쇼츠 웨이브테크 나일론 쇼츠 화이트워터보이즈",
    price: 28500,
    reviewCount: 0,
    sellCount: 57,
  },
]

const HeartProductList = () => {
  const perPage = 2
  const { productsPagination, renderPaginationComponent } = usePagination(
    perPage,
    testProducList.length
  )

  if (testProducList.length === 0) {
    return <MyPageListNoneContents content="좋아요를 누른 상품이 없습니다" />
  }

  return (
    <div>
      <div className="flex justify-between mt-[50px]">
        {testProducList
          .slice(
            productsPagination.indexOfFirst,
            productsPagination.indexOfLast
          )
          .map((product, index) => (
            <div className={`w-1/2`} key={index}>
              <div className="">
                <ProductCard productInfo={product} />
              </div>
            </div>
          ))}
      </div>

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </div>
  )
}

export default HeartProductList
