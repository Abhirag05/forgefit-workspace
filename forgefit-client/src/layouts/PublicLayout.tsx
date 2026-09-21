import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/features/landing/components/Navbar';
import { Footer } from '@/features/landing/components/Footer';

export const PublicLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a12] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
