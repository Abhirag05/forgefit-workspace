import { Menu, LogOut, Flame } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/5 bg-[#07060f]/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left: Mobile Menu Toggle & Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <span className="hidden text-sm font-semibold tracking-wide text-zinc-300 sm:inline-block">
          Welcome back,{' '}
          <span className="text-white font-bold">{user?.fullName || 'Athlete'}</span>
        </span>
      </div>


      {/* Right: Avatar, and Logout */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Universal Reusable Avatar Primitive */}
        <Avatar name={user?.fullName} size="md" />

        {/* Sign Out Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={logout}
          className="h-9 px-2.5 text-zinc-400 hover:text-red-400 sm:px-3"
          aria-label="Sign Out"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </Button>
      </div>
    </header>
  );
}
