import Dashboard from "@/pages/dashboard/Dashboard"
import LoginPage from "@/pages/login/Login"
import PublicLayout from "@/layouts/public/MainLayout"
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"
import NotFound from "@/pages/not-found/Notfound"
import ManagerDashboard from "@/pages/manager-dashboard/ManagerDashboard"
import AuthGuard from "@/guards/AuthGuard"
import PrivateLayout from "@/layouts/private/MainLayout"
import RoleGuard from "@/guards/RoleGuard"

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route
        path="/"
        element={
          <AuthGuard isPrivate>
            <PrivateLayout />
          </AuthGuard>
        }
      >
        <Route
          path="/"
          element={
            <RoleGuard allowedRoles={[2]}>
              <Dashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/worker-history"
          element={
            <RoleGuard allowedRoles={[2]}>
              <Dashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/manager-dashboard"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/appointments"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/clienti"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/piese-auto"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/cars"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/workers"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
        <Route
          path="/invoices"
          element={
            <RoleGuard allowedRoles={[1]}>
              <ManagerDashboard />
            </RoleGuard>
          }
        />
      </Route>
      <Route
        element={
          <AuthGuard>
            <PublicLayout />
          </AuthGuard>
        }
      >
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </React.Fragment>
  )
)

export const Router = () => {
  return <RouterProvider router={router} />
}
