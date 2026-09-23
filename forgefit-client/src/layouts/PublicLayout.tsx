import { Outlet } from 'react-router-dom';
import { Navbar } from '@/features/landing/components/Navbar';
import { Footer } from '@/features/landing/components/Footer';

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07060f] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
