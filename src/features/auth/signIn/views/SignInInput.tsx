interface ISignInInput {
  type?: "text" | " password"
  placeholder: string
  name: string
  classNames?: string
  onChange?: () => void
}

const SignInInput = ({
  type = "text",
  placeholder,
  name,
  classNames,
}: ISignInInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`${classNames} h-[50px] mb-[20px] px-[14px] w-[400px]`}
    />
  )
}

export default SignInInput
