import Loading from "@/features/common/views/Loading"

const MyPageListLoading = () => {
  return (
    <Loading
      spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
      height="h-[200px]"
      isFrame={false}
    />
  )
}

export default MyPageListLoading
