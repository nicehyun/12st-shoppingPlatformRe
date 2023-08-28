import { ReactNode } from "react"

interface ISignUpInputLayout {
  children: ReactNode
  headingText: string
}

const SignUpInputLayout = ({ children, headingText }: ISignUpInputLayout) => {
  return (
    <div className="py-[30px]">
      <h3 className="mb-[30px] font-bold">{headingText}</h3>
      {children}
    </div>
  )
}

export default SignUpInputLayout
