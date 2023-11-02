import { ReactNode } from "react"

interface IMyPageWriteTable {
  tableTitle: string
  tableContent: ReactNode
  className?: string
  maxWidth?: number
  isNoneLiTag?: boolean
}

const MyPageWriteTable = ({
  tableTitle,
  tableContent,
  className,
  maxWidth = 800,
  isNoneLiTag = false,
}: IMyPageWriteTable) => {
  if (isNoneLiTag) {
    return (
      <div className={`${className} xl:flex lg:flex`}>
        <div className="xl:border-r-[1px] xl:border-border lg:border-r-[1px] lg:border-border xl:min-h-[80px] lg:min-h-[120px] min-w-[140px] sm:w-full md:w-full sm:py-[10px] md:py-[10px] xl:flexCenter lg:flexCenter font-extrabold">
          {tableTitle}
        </div>

        <div
          className={`flex my-auto flex-wrap flex-grow leading-[30px] py-[10px] xl:pl-[20px] lg:pl-[20px] max-w-[${maxWidth}px] text-[14px]`}
        >
          {tableContent}
        </div>
      </div>
    )
  }

  return (
    <li className={`${className} xl:flex lg:flex`}>
      <div className="xl:border-r-[1px] xl:border-border lg:border-r-[1px] lg:border-border xl:min-h-[80px] lg:min-h-[120px] min-w-[140px] sm:w-full md:w-full sm:py-[10px] md:py-[10px] xl:flexCenter lg:flexCenter font-extrabold">
        {tableTitle}
      </div>

      <div
        className={`flex my-auto flex-wrap flex-grow leading-[30px] py-[10px] xl:pl-[20px] lg:pl-[20px] max-w-[${maxWidth}px] text-[14px]`}
      >
        {tableContent}
      </div>
    </li>
  )
}

export default MyPageWriteTable
