import { ReactNode } from "react"

interface ICheckoutInput {
  isRequired?: boolean
  label: string
  children: ReactNode
  id: string
}

const CheckoutInputLayout = ({
  isRequired = false,
  label,
  children,
  id,
}: ICheckoutInput) => {
  return (
    <div className="h-[50px] flex items-center mb-[20px]">
      <label htmlFor={id} className="w-[120px]">
        {label} {isRequired && <span className="text-lightRed">*</span>}
      </label>

      {children}
    </div>
  )
}

export default CheckoutInputLayout
