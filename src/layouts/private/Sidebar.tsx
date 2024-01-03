import clsx from "clsx"
import React, { useCallback } from "react"
import { defaultNavItems } from "./nav-items"
import { NavLink, useLocation } from "react-router-dom"
import ControlGuard from "@/guards/ControlGuard"
import { Separator } from "@/components/ui/separator"
import { LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLogoutUserMutation } from "@/pages/login/api/queries"

function Sidebar() {
  const location = useLocation()
  const [logout] = useLogoutUserMutation()
  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return (
    <nav className="bg-gray-800 text-white w-60 p-4 flex flex-col">
      <div className="flex-1">
        <div className="flex items-center pl-5 font-bold">
          {import.meta.env.VITE_APP_NAME}
        </div>
        <Separator className="my-6 opacity-25" />
        <ul>
          {defaultNavItems.map((item) => {
            if (item.label === "divider") {
              return (
                <Separator
                  key={item.path + item.label}
                  className="my-4 opacity-25"
                />
              )
            }
            return (
              <React.Fragment key={item.label}>
                <ControlGuard allowedRoles={item.allowedRoles}>
                  <li>
                    <NavLink
                      to={item.path}
                      className={clsx(
                        "cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full hover:before:bg-white",
                        {
                          "text-white aria-[current=page]:text-blue-400":
                            location.pathname === item.path,
                        }
                      )}
                    >
                      <div>{item.label}</div>
                    </NavLink>
                  </li>
                </ControlGuard>
              </React.Fragment>
            )
          })}
        </ul>
      </div>
      <Button
        onClick={handleLogout}
        className="w-full bg-gray-500 mt-4 flex-shrink-0"
      >
        <LogOutIcon className="w-5 h-5 fill-white mr-1" />
        <b>Log out</b>
      </Button>
    </nav>
  )
}

export default Sidebar
