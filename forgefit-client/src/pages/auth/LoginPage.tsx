import { AuthCard } from '@/components/auth/AuthCard';
import { LoginForm } from '@/components/auth/LoginForm';

export function LoginPage() {
  return (
    <AuthCard
      title="Sign In"
      subtitle="Welcome back. Enter your credentials to access your fitness journey."
    >
      <LoginForm />
    </AuthCard>
  );
}
