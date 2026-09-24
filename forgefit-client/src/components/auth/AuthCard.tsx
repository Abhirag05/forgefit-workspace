import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07060f] px-4 py-12 sm:px-6 lg:px-8">
      {/* Top Left Back to Home Button (matching Screenshot 2) */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          aria-label="Back to Home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Purple Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7928ca]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-[#ff416c]/10 blur-3xl" />

      {/* Main Glassmorphic Auth Card */}
      <Card className="relative w-full max-w-md border-purple-500/30 bg-[#0c0a18]/90 p-8 shadow-2xl shadow-purple-950/60 backdrop-blur-xl sm:p-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-8">{children}</div>
      </Card>
    </div>
  );
}
