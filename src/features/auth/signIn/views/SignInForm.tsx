import SignInInput from "./SignInInput"

const SignInForm = () => {
  return (
    <form className="flexCenter flex-col">
      <h2 className="w-[400px] text-center text-[20px] font-bold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        로그인
      </h2>
      <SignInInput onChange={() => {}} name="email" placeholder="이메일" />
      <SignInInput onChange={() => {}} name="password" placeholder="비밀번호" />

      <button
        type="submit"
        className="w-[400px] text-[14px] tracking-[8px] h-[50px] border-lightRed border-[1px] bg-lightRed"
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
