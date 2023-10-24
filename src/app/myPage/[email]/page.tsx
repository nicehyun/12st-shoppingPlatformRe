type Props = {
  params: {
    email: string
  }
}

const MyPageCouponSection = ({ params: { email } }: Props) => {
  return (
    <div>
      마이페이지 쿠폰 섹션
      <div>{email}</div>
    </div>
  )
}

export default MyPageCouponSection
