interface ISignUpBirthInput {
  onKeyPress?: () => {}
}

const SignUpBirthInput = ({ onKeyPress }: ISignUpBirthInput) => {
  return (
    <div className="flex-grow max-w-[400px] md:w-[300px] h-[38px] flexCenter items-center border-border border-[1px] rounded-[5px] px-[15px]">
      <input
        type="number"
        placeholder="YYYY"
        maxLength={4}
        name="birthYear"
        // value={userInput.birthYear.value}
        // onChange={userInput.birthYear.handleValueChange}
        // onBlur={userInput.birthYear.handleInputBlur}
        onKeyPress={onKeyPress}
        className="w-[96px] md:w-[60px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
      />
      <span className="text-border">/</span>
      <input
        type="number"
        placeholder="MM"
        maxLength={2}
        name="birthMonth"
        // value={userInput.birthMonth.value}
        // onChange={userInput.birthMonth.handleValueChange}
        // onBlur={userInput.birthMonth.handleInputBlur}
        onKeyPress={onKeyPress}
        className="w-[96px] md:w-[60px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
      />
      <span className="text-border">/</span>
      <input
        type="number"
        placeholder="DD"
        maxLength={2}
        name="birthDay"
        // value={userInput.birthDay.value}
        // onChange={userInput.birthDay.handleValueChange}
        // onBlur={userInput.birthDay.handleInputBlur}
        onKeyPress={onKeyPress}
        className="w-[96px] md:w-[60px] h-[34px] border-none pr-[11px] pb-[1px] pl-[15px] bg-transparent text-center placeholder:text-border"
      />
    </div>
  )
}

export default SignUpBirthInput
