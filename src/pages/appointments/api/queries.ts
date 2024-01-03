import { reduxAPI } from '@/store/api'
import { Appointment } from '../types'

export const appointmentsApi = reduxAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAppointments: builder.query<Appointment[], void>({
            query() {
                return {
                    url: '/appointments/find-all-appointments',
                }
            },
            providesTags: ['GET_APPOINTMENTS'],
        })
    }),
    overrideExisting: true,
})

export const { useGetAppointmentsQuery } = appointmentsApi