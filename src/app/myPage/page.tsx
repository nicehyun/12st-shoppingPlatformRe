import { Metadata } from "next"
import MyPapeLayout from "@/features/myPage/views/MyPapeLayout"

export const metadata: Metadata = {
  title: "마이페이지 - 12ST",
  description: "쇼핑정보, 계정설정, 고객센터",
}

const MyPagePage = () => {
  return (
    <>
      <MyPapeLayout />
    </>
  )
}

export default MyPagePage
