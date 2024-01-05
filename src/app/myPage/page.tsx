import MyPageCheckoutList from "@/features/myPage/views/shoppingInfo/MyPageCheckoutList"
import HeartProductListInfo from "@/features/myPage/views/heartProductList/HeartProductListInfo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "마이페이지 - 12ST",
  description: "쇼핑정보, 계정설정, 고객센터",
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
