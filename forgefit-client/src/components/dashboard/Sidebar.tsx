import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  Utensils,
  Bot,
  Settings,
  X,
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Workouts', href: '/workouts', icon: Dumbbell },
  { label: 'Nutrition', href: '/nutrition', icon: Utensils },
  { label: 'Sensei AI', href: '/chatbot', icon: Bot },
  { label: 'Settings', href: '/settings', icon: Settings },
] as const;

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/5 bg-[#0a0814] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Application Sidebar"
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
          <NavLink
            to="/dashboard"
            className="text-lg font-black tracking-widest text-white hover:opacity-90"
          >
            FORGEFIT
          </NavLink>
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1.5 px-3 py-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-[#7928ca] text-white shadow-md shadow-[#7928ca]/30'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  )
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="border-t border-white/5 p-4 text-center">
          <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
            ForgeFit Athlete OS
          </p>
        </div>
      </aside>
    </>
  );
}
