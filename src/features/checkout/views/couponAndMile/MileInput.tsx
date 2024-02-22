import RightFetchButton from "@/features/common/views/RightFetchButton"
import { useUserMileQuery } from "../../hooks/useGetUserMileQuery"
import useCheckoutPrice from "../../hooks/useCheckoutPrice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  resetPlannedUseMile,
  selectCheckoutPlannedUseMileState,
  setPlannedUseMile,
} from "@/redux/features/checkoutSlice"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"
import { ChangeEventHandler, useEffect } from "react"
import { validCheckUseMile } from "../../models/validCheck"

const MileInput = () => {
  const dispatch = useAppDispatch()

  const { availableMiles } = useUserMileQuery()

  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const checkoutPlannedUseMile = useAppSelector(
    selectCheckoutPlannedUseMileState
  )

  const handleUseAllMileButtonClick = () => {
    dispatch(setPlannedUseMile(availableMiles))
  }

  const handleUseMileBlur = () => {
    dispatch(
      setPlannedUseMile(junkOfNoMoreThanOneDigit(checkoutPlannedUseMile))
    )
  }

  const handleUseMileValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { valid } = validCheckUseMile(
      +event.target.value,
      availableMiles,
      totalPriceOfCheckedProduct
    )

    if (valid) {
      dispatch(setPlannedUseMile(+event.target.value))
    } else {
      dispatch(resetPlannedUseMile())
    }
  }

  useEffect(() => {
    dispatch(resetPlannedUseMile())
  }, [])

  return (
    <div className="flex">
      <input
        id="useMile"
        name="a"
        type="text"
        value={checkoutPlannedUseMile}
        onChange={handleUseMileValueChange}
        onBlur={handleUseMileBlur}
        className={`rounded-[5px] py-[14px] px-[20px] grow max-w-[300px] h-[50px] sm:h-[40px] md:h-[44px] sm:text-[14px] md:text-[14px] bg-white dark:bg-lightBorder text-lightBlack `}
      />

      <RightFetchButton
        content="모두 사용"
        onClick={handleUseAllMileButtonClick}
      />
    </div>
  )
}

export default MileInput
