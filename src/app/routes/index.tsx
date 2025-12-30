import { createBrowserRouter } from "react-router-dom"
import { authRoutes } from "./auth.routes"
import DashboardPage from "@/features/Dashboard/DashboardPage"
import DashboardLayout from "@/components/layout/DashboardLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRedirect />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  ...authRoutes,
])

// eslint-disable-next-line react-refresh/only-export-components
function LoginRedirect() {
  window.location.href = "/login"
  return null
}
