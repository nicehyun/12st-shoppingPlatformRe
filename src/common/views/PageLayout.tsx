import { ReactNode } from "react"

interface IPageLayout {
  children: ReactNode
  classNames?: string
}

const PageLayout = ({ children, classNames }: IPageLayout) => {
  return (
    <main className={`${classNames} px-[40px] pt-[200px] pb-[100px] `}>
      <div className="min-w-[400px]">{children}</div>
    </main>
  )
}

export default PageLayout
