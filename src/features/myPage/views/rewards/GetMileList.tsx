import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListHeaderLayout from "../MyPageListTableHeader"
import GetMileListContents from "./GetMileListContents"

const GetMileList = () => {
  return (
    <>
      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl className="w-1/3" headerContent="적립일자" />
        <MyPageTableHeaderEl className="w-1/3" headerContent="적립마일리지" />
        <MyPageTableHeaderEl className="w-1/3" headerContent="관련주문번호" />
      </MyPageListHeaderLayout>

      <GetMileListContents />
    </>
  )
}

export default GetMileList
