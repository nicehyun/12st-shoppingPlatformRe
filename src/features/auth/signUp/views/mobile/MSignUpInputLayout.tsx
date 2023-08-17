import { ReactNode } from "react"

interface IMSignUpInputLayout {
  children: ReactNode
  headingText: string
}

const MSignUpInputLayout = ({ children, headingText }: IMSignUpInputLayout) => {
  return (
    <div className="py-[30px]">
      <h3 className="mb-[30px] font-bold">{headingText}</h3>
      {children}
    </div>
  )
}

export default MSignUpInputLayout
