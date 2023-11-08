import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListHeaderLayout from "../MyPageListHeaderLayout"
import MyPageUseMileList from "./MyPageUseMileList"
import MyPageGetMileList from "./MyPageGetMileList"

interface IMyPageMileTebPanel {
  mileType: "get" | "use"
}

const MyPageMileTebPanel = ({ mileType }: IMyPageMileTebPanel) => {
  return (
    <>
      <MyPageListHeaderLayout>
        <MyPageTableHeaderEl className="w-1/3" headerContent="적립일자" />
        <MyPageTableHeaderEl
          className="w-1/3"
          headerContent={
            mileType === "get"
              ? "적립마일리지"
              : mileType === "use"
              ? "사용마일리지"
              : ""
          }
        />
        <MyPageTableHeaderEl className="w-1/3" headerContent="관련주문번호" />
      </MyPageListHeaderLayout>

      {mileType === "use" && <MyPageUseMileList />}
      {mileType === "get" && <MyPageGetMileList />}
    </>
  )
}

export default MyPageMileTebPanel
