import { ReactNode } from "react"

interface IPageLayout {
  children: ReactNode
}

const PageLayout = ({ children }: IPageLayout) => {
  return <div className="px-10 pt-40">{children}</div>
}

export default PageLayout
