import MyPageListNoneContents from "../MyPageListNoneContents"
import CancelListHeader from "./CancelListHeader"

const CancelList = () => {
  return (
    <>
      <CancelListHeader />

      <ul>
        <MyPageListNoneContents content="취소 내역이 없습니다" />
      </ul>
    </>
  )
}

export default CancelList
