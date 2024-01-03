import { times } from "lodash"
import { useGetAppointmentsQuery } from "./api/queries"
import AppointmentsList from "./components/AppointmentsList"
import FilterPanel from "./components/FilterAppointmentsPanel"
import { Skeleton } from "@/components/ui/skeleton"

const Appointments = () => {
  const { data, isLoading, isError } = useGetAppointmentsQuery()
  return (
    <div className="flex bg-slate-200 p-4 h-full ">
      <div className="flex-shrink-0 w-1/5">
        <FilterPanel />
      </div>
      <div className="flex-grow pl-4 pr-4 h-full ">
        {isLoading || isError
          ? times(7, (i) => {
              return <Skeleton key={i} className="h-10 w-full mb-3 " />
            })
          : data && <AppointmentsList appointments={data} />}
      </div>
    </div>
  )
}

export default Appointments
