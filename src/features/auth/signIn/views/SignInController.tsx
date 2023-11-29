"use client"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import Button from "@/features/common/views/Button"

const SignInController = () => {
  const { routeTo } = useNavigations()
  return (
    <div className="flexCenter flex-col">
      <Button
        classNames="bg-white text-black border-[1px] border-black dark:border-white rounded-[12px] flexCenter text-[14px] tracking-[1.5px] mb-5 w-[400px] h-[50px]"
        onClick={() => routeTo(ROUTE.SIGNUP)}
        content="간편 회원가입"
      />

      <div className="w-[400px] text-center text-gray dark:text-lightGray text-[12px]">
        <Button
          classNames="relative mr-[10px] after:vertical-divider after:mx-[10px]"
          onClick={() => routeTo(ROUTE.FIND_EMAIL)}
          content="이메일 찾기"
        />

        <Button classNames="ml-[10px]" content="비밀번호 찾기" />
      </div>
    </div>
  )
}

export default SignInController
