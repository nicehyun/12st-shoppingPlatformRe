import { ReactNode } from "react"

interface ICheckoutSectionHeader {
  children: ReactNode
}

const CheckoutSectionHeader = ({ children }: ICheckoutSectionHeader) => {
  return (
    <header className="flex items-center justify-between py-[18px] font-bold border-b-[1px] border-border">
      {children}
    </header>
  )
}

export default CheckoutSectionHeader
