import MyPageListNoneContents from "../MyPageListNoneContents"
import CancelListHeader from "./CancelListHeader"

const AllCancelList = () => {
  return (
    <>
      <CancelListHeader />

      <ul>
        <MyPageListNoneContents content="취소/반품/교환 내역이 없습니다" />
      </ul>
    </>
  )
}

export default AllCancelList
