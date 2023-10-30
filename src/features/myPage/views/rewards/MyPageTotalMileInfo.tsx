import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageTotalMileInfoContent from "./MyPageTotalMileInfoContent"

const MyPageTotalMileInfo = () => {
  return (
    <MyPageSectionSubTitle subtitle="마일리지 현황" className="mt-[50px]">
      <div className="flex border-t-[1px] font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]">
        <MyPageTableContentEl content="현재 마일리지" equalParts={3} />
        <MyPageTableContentEl content="총 적립 마일리지" equalParts={3} />
        <MyPageTableContentEl content="총 사용 마일리지" equalParts={3} />
      </div>

      <MyPageTotalMileInfoContent />
    </MyPageSectionSubTitle>
  )
}

export default MyPageTotalMileInfo
