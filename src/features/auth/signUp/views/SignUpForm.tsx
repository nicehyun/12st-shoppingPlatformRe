import SignUpClause from "./SIgnUpClause"
import SIgnUpUserInfo from "./SIgnUpUserInfo"

// TODO : isLoading 처리
const SignUpForm = () => {
  return (
    <form className="sm:hidden md:hidden max-w-[800px] mx-auto">
      <h2 className="text-[28px] font-bold mb-[40px] text-center border-black dark:border-white tracking-[20px]">
        회원가입
      </h2>
      <h3 className="border-b-[1px] border-black dark:border-white pb-[10px] mb-[10px] text-right text-[12px] text-lightGray">
        <span className="text-lightRed mr-[5px]">*</span>필수입력사항
      </h3>

      <SIgnUpUserInfo />

      <SignUpClause />

      <div className="flexCenter">
        <button className="rounded-[5px] w-[400px] text-[14px] mt-[50px] bg-black dark:bg-white text-white dark:text-black py-[14px] tracking-[5px]">
          {/* {isLoading ? (
            <LoadingView spinnerSize="20px" isFrame={false} />
          ) : (
            "가입하기"
          )} */}
          회원가입
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
