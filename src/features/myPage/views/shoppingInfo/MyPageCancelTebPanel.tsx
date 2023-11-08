"use client"

import MyPageAllCancelList from "./MyPageAllCancelList"
import MyPageCancelCancelList from "./MyPageCancelCancelList"
import MyPageChangeCancelList from "./MyPageChangeCancelList"
import MyPageReturnCancelList from "./MyPageReturnCancelList"

export type CancelType =
  | "cancel__all"
  | "cancel__cancel"
  | "cancel__return"
  | "cancel__change"

interface IMyPageCancelTebPanel {
  cancelType: CancelType
}

const MyPageCancelTebPanel = ({ cancelType }: IMyPageCancelTebPanel) => {
  const renderAllCancelListContent = () => {
    return <MyPageAllCancelList />
  }

  const renderCancelCancelListContent = () => {
    return <MyPageCancelCancelList />
  }

  const renderReturnCancelListContent = () => {
    return <MyPageReturnCancelList />
  }

  const renderChangeCancelListContent = () => {
    return <MyPageChangeCancelList />
  }

  return (
    <>
      {cancelType === "cancel__all" && renderAllCancelListContent()}
      {cancelType === "cancel__cancel" && renderCancelCancelListContent()}
      {cancelType === "cancel__return" && renderReturnCancelListContent()}
      {cancelType === "cancel__change" && renderChangeCancelListContent()}
    </>
  )
}

export default MyPageCancelTebPanel
