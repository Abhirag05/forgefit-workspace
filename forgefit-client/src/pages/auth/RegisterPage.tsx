import { AuthCard } from '@/components/auth/AuthCard';
import { RegisterForm } from '@/components/auth/RegisterForm';

export function RegisterPage() {
  return (
    <AuthCard
      title="Sign Up"
      subtitle="Join ForgeFit to log workouts, track macros, and earn XP."
    >
      <RegisterForm />
    </AuthCard>
  );
}
