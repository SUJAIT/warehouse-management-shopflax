import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "@/components/layout/DashboardLayout"
import DashboardPage from "@/features/Dashboard/DashboardPage"
import { authRoutes } from "./auth.routes"
import { categoryRoutes } from "./category.routes"

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
    ...categoryRoutes,
  ],
},

  ...authRoutes,
])

function LoginRedirect() {
  window.location.href = "/login"
  return null
}
