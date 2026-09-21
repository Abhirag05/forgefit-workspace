import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { LandingPage } from '@/features/landing/LandingPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes with shared Navbar & Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};
