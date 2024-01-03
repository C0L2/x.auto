import clsx from "clsx"
import { Appointment } from "../types"
import { Trash2 } from "lucide-react"

const AppointmentCard = ({
  appointment,
  onClick = () => {},
  className,
}: {
  appointment: Appointment
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  className: string
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex dark:bg-slate-700 justify-between cursor-pointer border overflow-hidden bg-gray-500",
        {
          [className]: className,
        }
      )}
    >
      <div className="flex flex-row items-center p-3 intro-y w-1/2">
        <h2 className="truncate dark:text-white">
          {appointment.programare_name}
        </h2>
      </div>
      <div className="flex items-center p-3 justify-end w-1/2">
        <div className="flex flex-row items-center">
          <p className=" text-primary dark:text-white">
            Pentru data de:{" "}
            {new Date(appointment.registr_date).toLocaleDateString()}
          </p>
        </div>
        <Trash2 size={16} className="ml-2 text-red-500" />
      </div>
    </div>
  )
}

export default AppointmentCard
