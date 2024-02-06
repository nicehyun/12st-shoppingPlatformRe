import { ReactNode } from "react"

interface ICheckoutSection {
  children: ReactNode
}

const CheckoutSection = ({ children }: ICheckoutSection) => {
  return (
    <section className="border-t-[2px] border-black dark:border-white">
      {children}
    </section>
  )
}

export default CheckoutSection
