import { ReactNode } from "react"

interface IMyPageDefaultDeliveryInfoEl {
  children: ReactNode
  subtitle: string
  className?: string
}

const MyPageSectionSubTitle = ({
  children,
  subtitle,
  className,
}: IMyPageDefaultDeliveryInfoEl) => {
  return (
    <div className={className}>
      <h4 className="mb-[20px] font-semibold sm:text-[14px] md:text-[14px]">
        {subtitle}
      </h4>

      {children}
    </div>
  )
}

export default MyPageSectionSubTitle
