import RightFetchButton from "@/features/common/views/RightFetchButton"
import { useMilePlanInput } from "../../hooks/useMilePlanInput"

const MileInput = () => {
  const {
    handleUseAllMileButtonClick,
    handleUseMileValueChange,
    handleUseMileBlur,
    useMileValue,
  } = useMilePlanInput()

  return (
    <div className="flex">
      <input
        id="useMile"
        name="a"
        type="text"
        value={useMileValue}
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
