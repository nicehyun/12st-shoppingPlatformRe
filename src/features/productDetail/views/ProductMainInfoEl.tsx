import { ReactNode } from "react"

interface IProductMainInfoEl {
  children: ReactNode
  className?: string
}

const ProductMainInfoEl = ({ children, className }: IProductMainInfoEl) => {
  return (
    <div className={`${className} py-[14px] border-border border-b-[1px]`}>
      {children}
    </div>
  )
}

export default ProductMainInfoEl
