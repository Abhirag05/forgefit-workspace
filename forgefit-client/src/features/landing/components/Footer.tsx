import React from 'react';
import { Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a12] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff4d4d]">
            <Flame className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-wider text-white">
            FORGE<span className="text-[#ff4d4d]">FIT</span>
          </span>
        </div>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeFit. Built for athletes, lifters, and everyday champions.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#terms" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
