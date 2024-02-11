import LoadingButton from "@/features/common/views/LoadingButton"
interface IUpdateButton {
  isLoading: boolean
  type?: "button" | "submit"
}

const UpdateButton = ({ isLoading, type = "button" }: IUpdateButton) => {
  return (
    <LoadingButton
      type={type}
      content="저장하기"
      isLoading={isLoading}
      className="mt-[30px] h-[50px] w-full sm:h-[40px] md:h-[44px] border-[1px] border-lightRed dark:bg-lightRed text-lightRed dark:text-black text-[14px] font-semibold rounded-[5px]"
    />
  )
}

export default UpdateButton
