import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="w-full h-full min-h-screen flex bg-slate-100 dark:bg-darkmode-800">
      <div className="w-full flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
