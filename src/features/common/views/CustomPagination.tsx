import { Pagination, PaginationItem } from "@mui/material"
import { ChangeEvent } from "react"

interface ICustomPagination {
  count: number
  page: number
  onChange: (e: ChangeEvent<unknown>, page: number) => void
  className?: string
}

const CustomPagination = ({
  count,
  onChange,
  page,
  className,
}: ICustomPagination) => {
  return (
    <div className={className}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        size="medium"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            className="dark:text-white"
            sx={{
              fontSize: 12,
              "&.Mui-selected": {
                backgroundColor: "#ff4e0a",
                color: "#fff",
              },
            }}
          />
        )}
      />
    </div>
  )
}

export default CustomPagination
