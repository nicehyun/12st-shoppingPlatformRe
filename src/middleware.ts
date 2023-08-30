export { default } from "next-auth/middleware"

//TODO : 로그인 시만 사용가능한 페이지 추가하기
export const config = {
  matcher: ["/userposts/:path*"], // userposts 이하 경로 밑으로는 보호
}
