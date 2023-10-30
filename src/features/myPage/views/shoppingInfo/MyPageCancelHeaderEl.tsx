interface IMyPageCancelEl {
  className?: string
  content: string
}

const MyPageCancelHeaderEl = ({ className, content }: IMyPageCancelEl) => {
  return <span className={`${className} flexCenter`}>{content}</span>
}

export default MyPageCancelHeaderEl
