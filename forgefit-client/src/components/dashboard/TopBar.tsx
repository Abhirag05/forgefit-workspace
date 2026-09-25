import { Menu, LogOut, Flame } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const { user, logout } = useAuth();

  // Extract initials for avatar (e.g., "Alex Mercer" -> "AM")
  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'FF';

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/5 bg-[#07060f]/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left: Mobile Menu Toggle & Title */}
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

      {/* Right: XP Badge, Avatar, and Logout */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Level & XP Badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#7928ca]/30 bg-[#7928ca]/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#7928ca]/20">
          <Flame className="h-3.5 w-3.5 text-[#ff416c]" />
          <span>
            Level {user?.level ?? 1}{' '}
            <span className="text-zinc-400 font-normal">&bull;</span>{' '}
            {user?.experience ?? 0} XP
          </span>
        </div>

        {/* User Avatar */}
        <div
          title={user?.fullName}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/40 bg-gradient-to-tr from-[#7928ca] to-[#3b82f6] text-xs font-bold text-white shadow-md shadow-purple-950/50"
        >
          {initials}
        </div>

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
