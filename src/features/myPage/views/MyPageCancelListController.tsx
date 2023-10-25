import { CancelType } from "../types/myPage"
import MyPageCancelTypeButton from "./MyPageCancelTypeButton"

interface IMyPageCancelListController {
  cancelTypeState: CancelType
  onChangeCancelType: (cancelType: CancelType) => void
}

type CancelTypeButtonList = {
  value: CancelType
  content: string
}

const MyPageCancelListController = ({
  onChangeCancelType,
  cancelTypeState,
}: IMyPageCancelListController) => {
  const cancelTypeButtonList: CancelTypeButtonList[] = [
    { value: "all", content: "ALL" },
    { value: "cancel", content: "취소" },
    { value: "return", content: "반품" },
    { value: "change", content: "교환" },
  ]
  return (
    <div className="font-semibold md:text-[12px] sm:text-[12px] text-[14px]">
      {cancelTypeButtonList.map((cancelTypeButtonEl) => (
        <MyPageCancelTypeButton
          key={`mypage-cancelType-${cancelTypeButtonEl.value}`}
          value={cancelTypeButtonEl.value}
          content={cancelTypeButtonEl.content}
          cancelTypeState={cancelTypeState}
          onChangeCancelType={onChangeCancelType}
        />
      ))}
    </div>
  )
}

export default MyPageCancelListController
