import MyPageSectionSubTitle from "../MyPageSectionSubTitle"

const MyPageMileAnnouncement = () => {
  return (
    <MyPageSectionSubTitle
      subtitle="마일리지 사용 기준 및 사용기한"
      className="mt-[80px]"
    >
      <ul className="list-disc text-[14px] sm:text-[12px] md:text-[12px]">
        <li className="ml-[18px] mb-[20px] underline">
          마일리지는 구매금액 제한 없이 10원부터 사용하실 수 있습니다. (배송비
          제외)
        </li>
        <li className="ml-[18px] underline">
          마일리지 사용기한은 없습니다. (추후 사용기한 기준이 변경될 수
          있습니다.)
        </li>
      </ul>
    </MyPageSectionSubTitle>
  )
}

export default MyPageMileAnnouncement
