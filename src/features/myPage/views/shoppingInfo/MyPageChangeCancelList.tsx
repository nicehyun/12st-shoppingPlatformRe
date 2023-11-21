import MyPageCancelListHeader from "./MyPageCancelListHeader"
import MyPageListNoneContents from "../MyPageListNoneContents"

const MyPageChangeCancelList = () => {
  return (
    <>
      <MyPageCancelListHeader />

      <ul>
        <MyPageListNoneContents content="교환 내역이 없습니다" />
      </ul>
    </>
  )
}

export default MyPageChangeCancelList
