import { ReactNode } from "react"

interface IPageLayout {
  children: ReactNode
  classNames?: string
}

const PageLayout = ({ children, classNames }: IPageLayout) => {
  return (
    <div className={`${classNames} px-10 pt-[200px] pb-[100px]`}>
      {children}
    </div>
  )
}

export default PageLayout
