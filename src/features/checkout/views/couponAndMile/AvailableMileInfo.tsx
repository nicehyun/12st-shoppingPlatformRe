import Button from "@/features/common/views/Button"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useUserMileQuery } from "../../hooks/useGetUserMileQuery"
import { BsQuestionCircle } from "react-icons/bs"
import SpanSkeletonUI from "@/features/common/views/SpanSkeletonUI"

const AvailableMileInfo = () => {
  const { userMile, availableMiles, isLoading } = useUserMileQuery()
  const dispatch = useAppDispatch()
  const showMileExplanationModal = () => {
    dispatch(
      showBasicModal({
        modalId: "MileExplanation",
        modalTitle: "마일리지 사용 안내",
        modalContent: "MileExplanation",
      })
    )
  }

  if (isLoading) {
    return <SpanSkeletonUI className="w-[220px] h-[21px] mt-[10px]" />
  }

  return (
    <div className="flex mt-[10px] text-[14px]">
      <p>
        사용 가능 {availableMiles}P /{" "}
        <span className="text-lightGray">보유 {userMile}P</span>
      </p>
      <Button
        onClick={showMileExplanationModal}
        classNames="ml-[5px] text-border"
        content={<BsQuestionCircle />}
      />
    </div>
  )
}

export default AvailableMileInfo
