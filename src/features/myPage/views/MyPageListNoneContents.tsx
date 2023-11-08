import React from "react"

interface IMyPageListNoneContents {
  content?: string
}

const MyPageListNoneContents = ({
  content = "내역이 없습니다",
}: IMyPageListNoneContents) => {
  return (
    <li className="h-[300px] flexCenter border-b-[1px] border-border font-semibold sm:text-[14px] md:text-[14px]">
      {content}
    </li>
  )
}

export default MyPageListNoneContents
