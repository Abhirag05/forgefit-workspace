import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { LandingPage } from '@/pages/public/LandingPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { DashboardPage } from '@/pages/user/DashboardPage';
import { WorkoutsPage } from '@/pages/user/WorkoutsPage';
import { NutritionPage } from '@/pages/user/NutritionPage';
import { ChatbotPage } from '@/pages/user/ChatbotPage';
import { SettingsPage } from '@/pages/user/SettingsPage';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing Pages with shared Navbar & Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Standalone Authentication Pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected User Dashboard Routes with App Shell Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
