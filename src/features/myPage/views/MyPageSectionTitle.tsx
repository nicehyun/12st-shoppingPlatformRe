import { AiOutlineRight } from "react-icons/ai"

interface IMyPageSectionTitle {
  title: string
  onClickDetail?: () => void
}

const MyPageSectionTitle = ({ title }: IMyPageSectionTitle) => {
  return (
    <header className="flex justify-between border-b-black border-b-[3px] dark:border-b-white pb-[20px]">
      <h3 className="text-[24px] sm:text-[18px] md:text-[18px] font-bold">
        {title}
      </h3>

      <button className="flex items-center text-[14px] sm:text-[12px] md:text-[12px] text-border dark:text-lightBlack hover:text-black dark:hover:text-white transition-3">
        더보기 <AiOutlineRight />
      </button>
    </header>
  )
}

export default MyPageSectionTitle
