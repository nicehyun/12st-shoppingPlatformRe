import { ROUTE } from "@/common/hooks/useNavigations"
import Link from "next/link"

const SignInController = () => {
  return (
    <div className="flexCenter flex-col">
      <Link
        className="border-[1px] border-black dark:border-white rounded-[12px] flexCenter text-[14px] tracking-[1.5px] mb-5 w-[400px] h-[50px]"
        href={ROUTE.SIGNUP}
      >
        간편 회원가입
      </Link>

      <div className="w-[400px] text-center text-gray dark:text-lightGray text-[12px]">
        <Link
          className="relative mr-[10px] after:vertical-divider after:mx-[10px]"
          href={ROUTE.FIND_EMAIL}
        >
          이메일 찾기
        </Link>
        <Link className="ml-[10px]" href={ROUTE.FIND_PASSWORD}>
          비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}

export default SignInController
