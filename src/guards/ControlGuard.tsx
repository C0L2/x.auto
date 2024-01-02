import { useAppSelector } from "@/store"
import { FC, PropsWithChildren } from "react"

interface IRolesGuard extends PropsWithChildren {
  allowedRoles: number[]
}

const ControlGuard: FC<IRolesGuard> = ({ children, allowedRoles }) => {
  const { user } = useAppSelector((state) => state.userSlice)

  const isAllowed = allowedRoles.includes(user?.role as number)

  return isAllowed ? children : null
}

export default ControlGuard
