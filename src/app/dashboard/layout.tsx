import DashboardHeader from '@/components/dashboard/header'
import Sidebar from '@/components/dashboard/sidebar'
import DashboardFooter from '@/components/dashboard/footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <DashboardHeader />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="hidden lg:flex" />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <DashboardFooter />
    </div>
  )
}
