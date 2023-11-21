interface ILoadingProps {
  spinnerSize: {
    width: string
    height: string
  }
  height?: string
  content?: string
  isFrame?: boolean
}

// frame 미사용시 height 전달하지 않아도 되지만, frame 사용 시 height 전달해야 함.
const Loading = ({
  content = "",
  height = "",
  spinnerSize,
  isFrame = true,
}: ILoadingProps) => {
  return (
    <div
      className={`${height} ${
        isFrame && "border-[3px] border-black py-[80px]"
      } flexCenter flex-col`}
    >
      <p className={`${content && "mb-[40px] text-[24px] font-bold"}`}>
        {content}
      </p>
      <div
        className={`inline-block border-[5px] border-black/50 border-t-lightRed rounded-full animate-spin ${spinnerSize.height} ${spinnerSize.width}`}
      ></div>
    </div>
  )
}

export default Loading
