import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageCancelListHeader from "./MyPageCancelListHeader"

const MyPageReturnCancelList = () => {
  return (
    <>
      <MyPageCancelListHeader />

      <ul>
        <MyPageListNoneContents content="반품 내역이 없습니다" />
      </ul>
    </>
  )
}

export default MyPageReturnCancelList
