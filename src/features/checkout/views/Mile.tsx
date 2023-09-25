import { junkOfNoMoreThanOneDigit } from "@/common/utils/price"

import {
  resetPlannedUseMile,
  selectCheckoutPlannedUseMileState,
  setPlannedUseMile,
} from "@/redux/features/checkoutSlice"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import React, { ChangeEventHandler, useEffect } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { useGetUserMileQuery } from "../hooks/useGetUserMileQuery"

const Mile = () => {
  const dispatch = useAppDispatch()
  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )
  const { userMile, availableMiles } = useGetUserMileQuery()

  const showMileExplanationModal = () => {
    dispatch(
      showBasicModal({
        modalId: "MileExplanation",
        modalTitle: "마일리지 사용 안내",
        modalContent: "MileExplanation",
      })
    )
  }

  const handleUseAllMileButtonClick = () => {
    dispatch(setPlannedUseMile(availableMiles))
  }

  const handleUseMileValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!userMile) return

    if (availableMiles < +event.target.value) {
      dispatch(resetPlannedUseMile())
      return
    }

    dispatch(setPlannedUseMile(+event.target.value))
  }

  const handleUseMileBlur = () => {
    dispatch(
      setPlannedUseMile(junkOfNoMoreThanOneDigit(checkoutPlannedUseMileState))
    )
  }

  useEffect(() => {
    dispatch(resetPlannedUseMile())
  }, [])

  return (
    <>
      <div className="flex">
        <input
          name="useMile"
          type="text"
          value={checkoutPlannedUseMileState}
          onChange={handleUseMileValueChange}
          onBlur={handleUseMileBlur}
          className="rounded-[5px] py-[14px] px-[20px] grow max-w-[300px] h-[50px] sm:h-[40px] md:h-[44px] sm:text-[14px] md:text-[14px] bg-white dark:bg-lightBorder text-lightBlack"
        />

        <button
          type="button"
          onClick={handleUseAllMileButtonClick}
          className="bg-border w-[70px] ml-[10px] text-[14px] rounded-[5px]"
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
    </>
  )
}

export default Mile