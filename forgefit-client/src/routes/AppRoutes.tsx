import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/features/landing/LandingPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Future routes will plug in here cleanly:
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      */}
    </Routes>
  );
};
