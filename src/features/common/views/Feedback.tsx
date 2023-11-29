interface ISignUpFeedback {
  classNames?: string
  content: string
}

const Feedback = ({ classNames, content }: ISignUpFeedback) => {
  return (
    <p
      className={`${classNames} mt-[10px] max-w-[400px] text-[12px] text-error`}
    >
      {content}
    </p>
  )
}

export default Feedback
