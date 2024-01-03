import useUrlDateInterval from "@/hooks/useUrlDateInterval"
import DatePicker from "./DatePicker"
import { Button } from "./ui/button"
import { ClassName } from "./ui/types"
import clsx from "clsx"

const DatePickerInterval = ({
  className,
  fullWidth,
}: {
  className?: ClassName
  fullWidth?: boolean
}) => {
  const { dateFrom, dateTo, updateDateParam } = useUrlDateInterval()
  return (
    <div
      className={clsx("flex q640:items-center q640:flex-row gap-3", className)}
    >
      <div className={clsx("flex gap-3 max-w-full", { grow: fullWidth })}>
        <DatePicker
          triggerClassName={clsx({ "w-full": fullWidth })}
          disableFuture
          date={dateFrom}
          setDate={(date) => updateDateParam("dateFrom", date)}
        >
          <div className="border w-full p-2 rounded cursor-pointer h-10 text-white overflow-hidden">
            {dateFrom ? new Date(dateFrom).toLocaleDateString() : "From"}
          </div>
        </DatePicker>
        <DatePicker
          triggerClassName={clsx({ "w-full": fullWidth })}
          disableFuture
          date={dateTo}
          setDate={(date) => updateDateParam("dateTo", date)}
        >
          <div className="border p-2 rounded cursor-pointer h-10 text-white overflow-hidden">
            {dateTo ? new Date(dateTo).toLocaleDateString() : "To"}
          </div>
        </DatePicker>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="text-primary h-10 dark:text-white max-w-1/3"
        onClick={() => {
          updateDateParam("dateFrom", undefined)
          updateDateParam("dateTo", undefined)
        }}
      >
        Clear
      </Button>
    </div>
  )
}
export default DatePickerInterval
