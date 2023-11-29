import Loading from "@/features/common/views/Loading"

const PageLoading = () => {
  return (
    <Loading
      spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
      isFrame={false}
      height="h-screen"
    />
  )
}

export default PageLoading
