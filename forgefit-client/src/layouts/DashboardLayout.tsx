import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { TopBar } from '@/components/dashboard/TopBar';

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#07060f] text-white">
      {/* Persistent Left Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Sticky Header TopBar */}
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
