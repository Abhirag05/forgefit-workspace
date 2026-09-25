import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LogOut, User as UserIcon, Flame, Trophy } from 'lucide-react';

export function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#07060f] p-6 text-white sm:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Top Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back, <span className="text-[#00f0ff]">{user?.fullName}</span>
            </h1>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
              Level {user?.level} Athlete &bull; {user?.experience} XP
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={logout}
            className="self-start sm:self-auto"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card hoverEffect>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff416c]/15 text-[#ff416c]">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Current Level</p>
                <p className="text-xl font-extrabold text-white">
                  Level {user?.level}
                </p>
              </div>
            </div>
          </Card>

          <Card hoverEffect>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7928ca]/15 text-[#7928ca]">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Experience Points</p>
                <p className="text-xl font-extrabold text-white">
                  {user?.experience} XP
                </p>
              </div>
            </div>
          </Card>

          <Card hoverEffect>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00f0ff]/15 text-[#00f0ff]">
                <UserIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Account Role</p>
                <p className="text-xl font-extrabold text-white">
                  {user?.role === 'ROLE_ADMIN' ? 'Administrator' : 'Standard Athlete'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
