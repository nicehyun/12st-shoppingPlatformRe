import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageCancelListHeader from "./MyPageCancelListHeader"

const MyPageCancelCancelList = () => {
  return (
    <>
      <MyPageCancelListHeader />

      <ul>
        <MyPageListNoneContents content="취소 내역이 없습니다" />
      </ul>
    </>
  )
}

export default MyPageCancelCancelList
