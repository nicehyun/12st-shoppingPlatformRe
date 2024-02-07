import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"

interface ICutstomSelect {
  id: string
  isSelectOpen: boolean
  onCloseSelect: () => void
  onOpenSelect: () => void
  selectedValue: string
  onChangeSelect: (event: SelectChangeEvent<unknown>) => void
  noSelectedRenderValue: string
  isDisabled?: boolean
  selectArray: { renderValue: string; [key: string]: any }[]
}

const CutstomSelect = ({
  id,
  isSelectOpen,
  onCloseSelect,
  onOpenSelect,
  selectedValue,
  onChangeSelect,
  noSelectedRenderValue,
  isDisabled,
  selectArray,
}: ICutstomSelect) => {
  return (
    <Select
      id="coupon-select"
      name="coupon-select"
      open={isSelectOpen}
      onClose={onCloseSelect}
      onOpen={onOpenSelect}
      displayEmpty
      value={selectedValue}
      onChange={onChangeSelect}
      input={<OutlinedInput />}
      renderValue={(selected: string) => {
        if (selected.length === 0) {
          return noSelectedRenderValue
        }

        return selected
      }}
      disabled={isDisabled}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 4.5 + 8,
            width: "200px",
          },
        },
      }}
      sx={{
        fontSize: "14px",
        border: "1px solid rgb(180, 180, 180)",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "rgb(180, 180, 180)",
        },
      }}
      className={`h-[50px] sm:h-[40px] md:h-[44px] sm:text-[12px] md:text-[14px] w-full bg-white dark:bg-border `}
    >
      <MenuItem
        value=""
        className="text-lightBlack sm:text-[12px] md:text-[14px]"
      >
        선택안함
      </MenuItem>
      {selectArray?.map((selectEl, index) => (
        <MenuItem key={`select-${id}-${index}`} value={selectEl.renderValue}>
          {selectEl.renderValue}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CutstomSelect
