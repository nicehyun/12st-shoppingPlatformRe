import { ReactNode } from "react"

interface IFourGridProductList {
  children: ReactNode
  className?: string
}

const FourGridProductList = ({ children, className }: IFourGridProductList) => {
  return (
    <div
      className={`${className} grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px]`}
    >
      {children}
    </div>
  )
}

export default FourGridProductList
