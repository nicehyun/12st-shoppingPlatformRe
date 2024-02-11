import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListHeaderLayout from "../MyPageListTableHeader"
import UseMileListContents from "./UseMileListContents"

const UseMileList = () => {
  return (
    <>
      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl className="w-1/3" headerContent="사용일자" />
        <MyPageTableHeaderEl className="w-1/3" headerContent="사용마일리지" />
        <MyPageTableHeaderEl className="w-1/3" headerContent="관련주문번호" />
      </MyPageListHeaderLayout>

      <UseMileListContents />
    </>
  )
}

export default UseMileList
