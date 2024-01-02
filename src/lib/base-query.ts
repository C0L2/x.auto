import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Cookies } from 'react-cookie'
import { baseUrl } from './config'

const cookies = new Cookies()

export const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
        headers.set('accept', `application/json`)
        // headers.set('Content-Type', `application/json`)

        const token = cookies.get('token')

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})