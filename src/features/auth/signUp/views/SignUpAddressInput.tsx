import Input from "@/common/views/Input"
import SignUpSideButton from "@/common/views/SignUpSideButton"

const SignUpAddressInput = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex">
        <Input
          type="text"
          name="address"
          id="address"
          isReadOnly={true}
          classNames="mb-[10px] w-full"
        />

        <SignUpSideButton content="재검색" classNames="ml-[10px]" />
      </div>

      <Input
        type="text"
        name="address"
        id="address"
        placeholder="나머지 주소를 입력해주세요"
      />
    </div>
  )
}

export default SignUpAddressInput
