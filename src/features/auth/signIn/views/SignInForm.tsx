"use client"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { useSignInMutaion } from "../hooks/useSIgnInMutaion"
import Input from "@/features/common/views/Input"
import LoadingButton from "@/features/common/views/LoadingButton"

const SignInForm = () => {
  const { routeTo } = useNavigations()

  console.log("ads")

  const { isLoading, signInMutateAsync } = useSignInMutaion()

  return (
    <form
      onSubmit={signInMutateAsync}
      className={`flexCenter flex-col mb-[50px]`}
    >
      <Button
        content={<FaRegArrowAltCircleLeft />}
        onClick={() => routeTo(ROUTE.HOME)}
        classNames="absolute top-[50px] left-[50px] text-[30px] hover:text-lightRed"
      />

      <h2 className="w-[400px] text-center text-[24px] md:text-[20px] sm:text-[18px] font-extrabold mb-[30px] pb-[30px] border-b-[3px] border-black dark:border-white tracking-[20px]">
        LOGIN
      </h2>

      <div className="w-[400px] mb-[10px]">
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요"
        />
      </div>

      <div className="w-[400px] mb-[20px]">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>

      <LoadingButton
        type="submit"
        isLoading={isLoading}
        content="로그인"
        className="w-[400px] text-[14px] tracking-[8px] h-[50px] bg-black dark:bg-white dark:text-black text-white"
      />
    </form>
  )
}

export default SignInForm
