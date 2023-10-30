interface IMyPageTableContentEl {
  content: string
  equalParts: number
  className?: string
  NoCenter?: boolean
}

const MyPageTableContentEl = ({
  content,
  equalParts,
  className,
  NoCenter = false,
}: IMyPageTableContentEl) => {
  return (
    <span
      className={`${className} ${
        NoCenter ? "my-auto" : "flexCenter"
      } w-1/${equalParts}`}
    >
      {content}
    </span>
  )
}

export default MyPageTableContentEl
