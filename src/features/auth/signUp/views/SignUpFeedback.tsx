interface ISignUpFeedback {
  classNames?: string
}

const SignUpFeedback = ({ classNames }: ISignUpFeedback) => {
  return (
    <p
      className={`${classNames} mt-[10px] ml-[139px] max-w-[400px] text-[12px] text-error`}
    >
      이메일 형식을 입력해주세요.
    </p>
  )
}

export default SignUpFeedback
