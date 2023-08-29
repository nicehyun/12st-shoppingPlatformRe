"use client"
import SignInInput from "./SignInInput"

const SignInForm = () => {
  const testSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const response = await fetch("/api/auth/signIn", {
      method: "POST",
      body: formData,
    })

    console.log(response)
  }
  return (
    <form onSubmit={testSubmit} className={`flexCenter flex-col mb-[50px]`}>
      <h2 className="w-[400px] text-center text-[20px] font-bold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        로그인
      </h2>
      <SignInInput name="email" placeholder="이메일" />
      <SignInInput name="password" placeholder="비밀번호" />

      <button
        type="submit"
        className="w-[400px] text-[14px] tracking-[8px] h-[50px] border-lightRed border-[1px] bg-lightRed text-white"
      >
        {/* {isLoginLoading ? (
          <LoadingView spinnerSize="20px" isFrame={false} />
        ) : (
          "로그인"
        )} */}
        로그인
      </button>
    </form>
  )
}

export default SignInForm
