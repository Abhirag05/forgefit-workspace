import React from 'react';
import { Dumbbell, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#ff4d4d] to-[#6a00ff] shadow-lg shadow-[#ff4d4d]/25">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-wider text-white">
            FORGE<span className="text-[#ff4d4d]">FIT</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#workouts"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Workouts
          </a>
          <a
            href="#nutrition"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Nutrition
          </a>
          <a
            href="#ai-coach"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            AI Coach
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
