import { reduxAPI } from '@/store/api'
import { ILoginForm, LoginResponse } from '@/store/types'
import { Cookies } from 'react-cookie'
import { logout, setLoading, setUser } from '@/store/slices/userSlice'

export const authApi = reduxAPI.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, ILoginForm>({
            query(data) {
                return {
                    url: 'worker/login',
                    method: 'POST',
                    body: data,
                }
            },
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const cookies = new Cookies()
                const { data } = await queryFulfilled
                cookies.set('access_token', data.access_token)
                dispatch(setUser(data.user))
            },
        }),
        logoutUser: builder.mutation<void, void>({
            query() {
                return {
                    url: 'worker/logout',
                    method: 'POST',
                }
            },
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                dispatch(setLoading(true))
                const cookies = new Cookies()
                await queryFulfilled
                cookies.remove('ai_bot_token')
                dispatch(logout())
                // window.location.replace("/login");
            },
        }),
    }),
    overrideExisting: true,
})

export const { useLoginUserMutation, useLogoutUserMutation } = authApi
