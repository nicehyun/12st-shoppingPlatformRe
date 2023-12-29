import MyPageCheckoutList from "@/features/myPage/views/shoppingInfo/MyPageCheckoutList"
import HeartProductListInfo from "@/features/myPage/views/heartProductList/HeartProductListInfo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "마이페이지 - 쇼핑 플랫폼 12ST",
}

const MyPagePage = () => {
  return (
    <>
      <MyPageCheckoutList />
      <HeartProductListInfo />
    </>
  )
}

export default MyPagePage
