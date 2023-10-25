import { CancelType } from "../types/myPage"
import MyPageCancelTypeButton from "./MyPageCancelTypeButton"

interface IMyPageCancelListController {
  cancelTypeState: CancelType
  onChangeCancelType: (cancelType: CancelType) => void
}

const MyPageCancelListController = ({
  onChangeCancelType,
  cancelTypeState,
}: IMyPageCancelListController) => {
  return (
    <div className="font-semibold md:text-[12px] sm:text-[12px]">
      <MyPageCancelTypeButton
        value="all"
        content="ALL"
        cancelTypeState={cancelTypeState}
        onChangeCancelType={onChangeCancelType}
      />
      <MyPageCancelTypeButton
        value="cancel"
        content="취소"
        cancelTypeState={cancelTypeState}
        onChangeCancelType={onChangeCancelType}
      />
      <MyPageCancelTypeButton
        value="return"
        content="반품"
        cancelTypeState={cancelTypeState}
        onChangeCancelType={onChangeCancelType}
      />
      <MyPageCancelTypeButton
        value="change"
        content="교환"
        cancelTypeState={cancelTypeState}
        onChangeCancelType={onChangeCancelType}
      />
    </div>
  )
}

export default MyPageCancelListController
