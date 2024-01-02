import clsx from "clsx"
import React from "react"
import { defaultNavItems } from "./nav-items"
import { NavLink } from "react-router-dom"
import ControlGuard from "@/guards/ControlGuard"
import { Separator } from "@/components/ui/separator"

function Sidebar() {
  return (
    <nav className="bg-gray-800 text-white w-60 p-4">
      X-Auto
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
                    className={clsx("side-menu", {
                      "side-menu--active":
                        window.location.pathname === item.path,
                    })}
                  >
                    <div>{item.label}</div>
                  </NavLink>
                </li>
              </ControlGuard>
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
