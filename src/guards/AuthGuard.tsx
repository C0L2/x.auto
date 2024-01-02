import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "@/store"
import { FC, PropsWithChildren } from "react"

interface IAuthGuard extends PropsWithChildren {
  isPrivate?: boolean
}

const AuthGuard: FC<IAuthGuard> = ({ isPrivate = false, children }) => {
  const location = useLocation()
  const { user } = useAppSelector((state) => state.userSlice)
  const from = location.state?.from?.pathname || "/"

  if (!user && isPrivate) {
    return <Navigate to={"/login"} state={{ from: location }} replace />
  }

  if (user && !isPrivate) {
    return <Navigate to={from} state={{ from: location }} replace />
  }

  return children
}

export default AuthGuard
