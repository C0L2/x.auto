import Navbar from "./Navbard"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

export const PrivateLayout = () => {
  return (
    <div>
      <div className="flex h-[100vh]">
        <Sidebar />
        <div className="w-full h-full overflow-hidden">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PrivateLayout
