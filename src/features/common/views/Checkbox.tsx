import { ReactNode } from "react"

interface ICheckbox {
  id: string
  checkboxLabel: ReactNode
  peer?: string
  peerChecked?: { borderColor: string }
  classNames?: string
  children?: ReactNode
}

const Checkbox = ({
  id,
  checkboxLabel,
  peer,
  peerChecked,
  classNames,
  children,
}: ICheckbox) => {
  return (
    <div
      className={`${classNames} relative p-[8px] flex items-center justify-between`}
    >
      <span className="py-[5px] mr-[10px] flex justify-between">
        <input
          type="checkbox"
          name={id}
          id={id}
          className={`mr-[10px] overflow-hidden absolute top-[2px] left-[2px] w-[1px] h-[1px] border-none bg-transparent z-10 appearance-none ${peer}`}
          readOnly
        />

        <label
          htmlFor={id}
          className={`sm:text-[14px] md:text-[14px] min-w-[300px] inline-block cursor-pointer py-[5px] pl-[18px] after:top-1/2 after:left-[6px] after:w-[6px] after:h-[11px] after:mt-[-8px] after:absolute after:content-[''] after:border-r-[1px] after:border-b-[1px] after:rotate-45 after:border-border ${peerChecked?.borderColor}`}
        >
          {checkboxLabel}
        </label>
      </span>

      {children}
    </div>
  )
}

export default Checkbox
