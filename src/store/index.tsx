import { configureStore } from "@reduxjs/toolkit"
import reducer from "@/store/reducers"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { reduxAPI } from "./api"

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
