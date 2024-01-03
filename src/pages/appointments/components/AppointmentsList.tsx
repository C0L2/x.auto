import { Appointment } from "../types"
import AppointmentCard from "./AppointmentCard"

const AppointmentsList = ({
  appointments,
}: {
  appointments: Appointment[]
}) => {
  return (
    <>
      {appointments?.length > 0 ? (
        <div className="flex bg-white h-[400px]">
          <div className="overflow-y-visible w-full m-3">
            {appointments?.map((item) => (
              <AppointmentCard
                key={item.programare_id}
                className="transform hover:scale-[1.02] transition duration-200 ease-in-out cursor-pointer hover:rounded hover:relative hover:z-50 h-[40px]"
                appointment={item}
                // onClick={() => handleTicketClick(ticket)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center text-gray-700 mt-10 dark:text-white">
          No appointments found
        </div>
      )}
    </>
  )
}

export default AppointmentsList
