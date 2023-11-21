import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageCancelListHeader from "./MyPageCancelListHeader"

const MyPageAllCancelList = () => {
  return (
    <>
      <MyPageCancelListHeader />

      <ul>
        <MyPageListNoneContents content="취소/반품/교환 내역이 없습니다" />
      </ul>
    </>
  )
}

export default MyPageAllCancelList
