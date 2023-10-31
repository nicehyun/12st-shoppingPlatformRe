import { ReactNode } from "react"

interface IMyPageWriteTable {
  tableTitle: string
  tableContent: ReactNode
  className?: string
}

const MyPageWriteTable = ({
  tableTitle,
  tableContent,
  className,
}: IMyPageWriteTable) => {
  return (
    <li className={`${className} xl:flex lg:flex`}>
      <div className="xl:border-r-[1px] xl:border-border lg:border-r-[1px] lg:border-border xl:min-h-[80px] lg:min-h-[120px] w-[140px] sm:w-full md:w-full sm:py-[10px] md:py-[10px] text-[14px] sm:text-[14px] md:text-[14px] xl:flexCenter lg:flexCenter font-extrabold">
        {tableTitle}
      </div>

      <div className="flex my-auto flex-wrap leading-[30px] w-full py-[10px] xl:pl-[20px] lg:pl-[20px] max-w-[800px]">
        {tableContent}
      </div>
    </li>
  )
}

export default MyPageWriteTable
