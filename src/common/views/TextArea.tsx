interface ITextArea {
  id: string
  className?: string
  placeholder?: string
  cols?: number
  rows?: number
}

const TextArea = ({
  id,
  className,
  placeholder,
  cols = 30,
  rows = 5,
}: ITextArea) => {
  return (
    <textarea
      id={id}
      name={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className={`w-full text-black dark:bg-lightBorder h-[150px] overflow-auto py-[19px] px-[14px] border-inputBorder mt-[10px] sm:text-[14px] md:text-[14px] placeholder:text-[14px] sm:placeholder:text-[12px] md:placeholder:text-[12px] leading-[20px] appearance-none resize-none rounded-[5px] dark:text- ${className}`}
    />
  )
}

export default TextArea
