import { useLocation, Navigate } from "react-router-dom"
import { useAppSelector } from "@/store"
import { FC, PropsWithChildren } from "react"

interface IRolesGuard extends PropsWithChildren {
  allowedRoles: number[]
}

const RoleGuard: FC<IRolesGuard> = ({ children, allowedRoles }) => {
  const { user } = useAppSelector((state) => state.userSlice)
  const location = useLocation()

  return allowedRoles.includes(user?.role as number) ? (
    children
  ) : user?.email ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RoleGuard
