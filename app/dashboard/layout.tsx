// Regular layout (app/dashboard/layout.js)
// - Applies to route segments in app/dashboard/*
export default function DashboardLayout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {/* <DashboardSidebar /> */}
        <h1>Dashboard Sidebar</h1>
        {children}
      </> 
    )
  }