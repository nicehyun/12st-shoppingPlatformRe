import CancelListHeader from "./CancelListHeader"
import MyPageListNoneContents from "../MyPageListNoneContents"

const ChangeList = () => {
  return (
    <>
      <CancelListHeader />

      <ul>
        <MyPageListNoneContents content="교환 내역이 없습니다" />
      </ul>
    </>
  )
}

export default ChangeList
