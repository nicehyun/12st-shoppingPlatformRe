import MyPageListHeaderLayout from "../MyPageListTableHeader"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import MyPageTableContentEl from "../MyPageTableContentEl"
import TotalMileInfoContent from "./TotalMileInfoContent"

const TotalMileInfo = () => {
  return (
    <MyPageSectionSubTitle subtitle="마일리지 현황" className="mt-[50px]">
      <MyPageListHeaderLayout>
        <MyPageTableContentEl content="현재 마일리지" className="w-1/3" />
        <MyPageTableContentEl content="총 적립 마일리지" className="w-1/3" />
        <MyPageTableContentEl content="총 사용 마일리지" className="w-1/3" />
      </MyPageListHeaderLayout>

      <TotalMileInfoContent />
    </MyPageSectionSubTitle>
  )
}

export default TotalMileInfo
