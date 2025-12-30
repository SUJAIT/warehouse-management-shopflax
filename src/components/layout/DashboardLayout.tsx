import { Outlet, useNavigate } from "react-router-dom"
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
        <Sidebar className="h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Warehouse</SidebarGroupLabel>
              <SidebarGroupContent>
                <p className="px-3 py-2 cursor-pointer hover:bg-muted rounded">
                  Category Create
                </p>
                <p className="px-3 py-2 cursor-pointer hover:bg-muted rounded">
                  Users
                </p>
                <p className="px-3 py-2 cursor-pointer hover:bg-muted rounded">
                  Products
                </p>
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
          {/* Top Bar */}
          <header className="flex h-14 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-3 text-lg font-semibold">
              Warehouse Dashboard
            </h1>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
