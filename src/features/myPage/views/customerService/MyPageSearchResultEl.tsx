import Input from "@/features/common/views/Input"

interface IMyPageSearchResultEl {
  id: string
  label: string
  placeholder?: string
  value: string
}

const MyPageSearchResultEl = ({
  id,
  label,
  placeholder,
  value,
}: IMyPageSearchResultEl) => {
  return (
    <div className="flex">
      <label className="font-extrabold text-[14px] w-[112px]" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        name={id}
        value={value}
        classNames="sm:w-full md:w-full w-full sm:text-[12px] md:text-[12px] text-[14px]"
        isReadOnly
        placeholder={placeholder}
      />
    </div>
  )
}

export default MyPageSearchResultEl
