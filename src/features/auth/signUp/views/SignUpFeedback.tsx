interface ISignUpFeedback {
  classNames?: string
  content: string
}

const SignUpFeedback = ({ classNames, content }: ISignUpFeedback) => {
  return (
    <p
      className={`${classNames} mt-[10px] ml-[139px] max-w-[400px] text-[12px] text-error`}
    >
      {content}
    </p>
  )
}

export default SignUpFeedback
