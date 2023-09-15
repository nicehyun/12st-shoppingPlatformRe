import { junkOfNoMoreThanOneDigit } from "@/common/utils/price"
import BasicModal from "@/common/views/BasicModal"
import React, { ChangeEventHandler, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { useGetUserMileQuery } from "./hooks/useGetUserMileQuery"
import MileExplanation from "./MileExplanation"

const Mile = () => {
  const [useMileValue, setUseMileValue] = useState(0)
  const { userMile } = useGetUserMileQuery()
  const [isShowMileExplanationModal, setIsShowMileExplanationModal] =
    useState(false)

  const availableMiles = junkOfNoMoreThanOneDigit(userMile ?? 0)

  const showMileExplanationModal = () => {
    setIsShowMileExplanationModal(true)
  }

  const hideMileExplanationModal = () => {
    setIsShowMileExplanationModal(false)
  }

  const handleUseAllMileButtonClick = () => {
    setUseMileValue(availableMiles)
  }

  const handleUseMileValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!userMile) return

    if (availableMiles < +event.target.value) {
      setUseMileValue(0)
      return
    }

    setUseMileValue(+event.target.value)
  }

  return (
    <>
      <div className="flex">
        <input
          type="text"
          value={useMileValue}
          onChange={handleUseMileValueChange}
          className="rounded-[5px] py-[14px] px-[20px] grow h-[50px] sm:h-[40px] md:h-[44px] sm:text-[14px] md:text-[14px] dark:text-white"
        />

        <button
          type="button"
          onClick={handleUseAllMileButtonClick}
          className="bg-border w-[80px] ml-[20px] md:text-[14px] sm:text-[14px]"
        >
          모두 사용
        </button>
      </div>

      <div className="flex mt-[10px] text-[14px]">
        <p>
          사용 가능 {availableMiles}P /{" "}
          <span className="text-lightGray">보유 {userMile}P</span>
        </p>
        <button
          onClick={showMileExplanationModal}
          type="button"
          className="ml-[5px] text-border"
        >
          <BsQuestionCircle />
        </button>
      </div>

      <BasicModal
        modalTitle="마일리지 사용 안내"
        modalId="MileExplanation"
        isShowModal={isShowMileExplanationModal}
        hideModal={hideMileExplanationModal}
      >
        <MileExplanation />
      </BasicModal>
    </>
  )
}

export default Mile
