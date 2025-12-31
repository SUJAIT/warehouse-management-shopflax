import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { logout } from "@/features/auth/auth.service"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import clsx from "clsx"

const DashboardLayout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Warehouse</SidebarGroupLabel>

              <SidebarGroupContent className="space-y-1">
                <NavItem to="/dashboard/categories">
                  Category List
                </NavItem>

                <NavItem to="/dashboard/categories/create">
                  Category Create
                </NavItem>

                <NavItem to="/dashboard/products">
                  Products
                </NavItem>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <Button
              variant="destructive"
              className="w-full"
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-3 text-lg font-semibold">
              Warehouse Dashboard
            </h1>
          </header>

          <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout

/* -------------------------
   Reusable Sidebar Nav Item
-------------------------- */
const NavItem = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "block rounded px-3 py-2 text-sm transition",
          isActive
            ? "bg-muted font-medium"
            : "hover:bg-muted/60"
        )
      }
    >
      {children}
    </NavLink>
  )
}
