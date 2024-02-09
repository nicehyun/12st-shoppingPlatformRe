import MyPageListNoneContents from "../MyPageListNoneContents"
import CancelListHeader from "./CancelListHeader"

const ReturnList = () => {
  return (
    <>
      <CancelListHeader />

      <ul>
        <MyPageListNoneContents content="반품 내역이 없습니다" />
      </ul>
    </>
  )
}

export default ReturnList
