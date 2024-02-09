import { ReactNode } from "react"

interface IthreeGridProductList {
  children: ReactNode
  className?: string
}

const ThreeGridProductList = ({
  children,
  className,
}: IthreeGridProductList) => {
  return (
    <div
      className={`${className} grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px]`}
    >
      {children}
    </div>
  )
}

export default ThreeGridProductList
