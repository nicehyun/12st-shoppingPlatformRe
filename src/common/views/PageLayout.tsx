import { ReactNode } from "react"

interface IPageLayout {
  children: ReactNode
}

const PageLayout = ({ children }: IPageLayout) => {
  return <div className="px-10 pt-[200px] pb-[100px]">{children}</div>
}

export default PageLayout
