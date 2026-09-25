import { Settings } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Account Settings
        </h1>
        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
          Manage your athlete profile, daily caloric targets, and notification preferences.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300">
          <Settings className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Settings Ready</h2>
        <p className="mt-1 max-w-sm text-xs text-zinc-400">
          Configure profile metrics, height, weight, and fitness targets.
        </p>
      </Card>
    </div>
  );
}
