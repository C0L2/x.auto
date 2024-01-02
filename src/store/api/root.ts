import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/lib/base-query'

export const reduxAPI = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: [
        'GET_CONTEXT',
    ],
    endpoints: () => ({}),
})

export const APIMiddleware = reduxAPI.middleware