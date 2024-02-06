import { ReactNode } from "react"

interface IDeliveryInputLayout {
  isRequired?: boolean
  label: string
  id: string
  children: ReactNode
}

const DeliveryInputLayout = ({
  isRequired = false,
  label,
  id,

  children,
}: IDeliveryInputLayout) => {
  return (
    <div className={`flex items-start mb-[20px] mr-0`}>
      <label
        htmlFor={id}
        className="min-w-[100px] sm:text-[12px] md:text-[14px] sm:pt-[6px] md:pt-[8px] pt-[11px]"
      >
        {label} {isRequired && <span className="text-lightRed">*</span>}
      </label>

      {children}
    </div>
  )
}

export default DeliveryInputLayout
