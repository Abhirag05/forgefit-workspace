import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';

export function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!fullName || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setIsSubmitting(true);
      await register({ fullName, email, password });
      navigate('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Registration failed. Try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Alert */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Full Name */}
      <Input
        id="fullName"
        type="text"
        label="Full Name"
        placeholder="e.g. Alex Mercer"
        autoComplete="name"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      {/* Email Address */}
      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="you@domain.com"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password with Eye Toggle */}
      <Input
        id="password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        placeholder="Create a strong password"
        autoComplete="new-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightElement={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-zinc-400 transition-colors hover:text-white"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        }
      />

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="gradient"
          size="md"
          isLoading={isSubmitting}
          className="w-full"
        >
          Sign Up
        </Button>
      </div>

      {/* Switch to Login */}
      <p className="text-center text-xs text-zinc-400">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-medium text-[#00f0ff] transition-colors hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
