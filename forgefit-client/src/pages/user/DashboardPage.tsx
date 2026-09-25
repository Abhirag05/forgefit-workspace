import { Link } from 'react-router-dom';
import { Plus, Utensils, Droplets, Footprints } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ProgressMetric {
  id: string;
  label: string;
  current: number;
  target: number;
  unit: string;
  displayValue: string;
  gradientClass: string;
}

const PROGRESS_METRICS: readonly ProgressMetric[] = [
  {
    id: 'weekly-goal',
    label: 'Weekly Goal',
    current: 3,
    target: 5,
    unit: 'workouts',
    displayValue: '3/5 workouts',
    gradientClass: 'from-[#ff416c] to-[#7928ca]',
  },
  {
    id: 'protein-intake',
    label: 'Protein Intake',
    current: 120,
    target: 150,
    unit: 'g',
    displayValue: '120/150g',
    gradientClass: 'from-[#7928ca] to-[#3b82f6]',
  },
  {
    id: 'sleep-quality',
    label: 'Sleep Quality',
    current: 6.5,
    target: 8,
    unit: 'hours',
    displayValue: '6.5/8 hours',
    gradientClass: 'from-[#7928ca] to-[#00f0ff]',
  },
  {
    id: 'steps',
    label: 'Steps',
    current: 8500,
    target: 10000,
    unit: 'steps',
    displayValue: '8,500/10,000',
    gradientClass: 'from-[#ff416c] to-[#7928ca]',
  },
] as const;

interface QuickAction {
  id: string;
  label: string;
  href: string;
  icon: typeof Plus;
}

const QUICK_ACTIONS: readonly QuickAction[] = [
  { id: 'workout', label: 'Log Workout', href: '/workouts', icon: Plus },
  { id: 'meal', label: 'Add Meal', href: '/nutrition', icon: Utensils },
  { id: 'water', label: 'Water Intake', href: '/nutrition', icon: Droplets },
  { id: 'steps', label: 'Add Steps', href: '/workouts', icon: Footprints },
] as const;

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 1. Main 'Your Progress' Card (Matching Screenshot 3) */}
      <Card className="p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Your Progress
          </h2>
          <button
            type="button"
            className="text-xs font-semibold text-zinc-400 transition-colors hover:text-white"
          >
            View Details
          </button>
        </div>

        {/* Progress Bars Stack */}
        <div className="mt-8 space-y-6">
          {PROGRESS_METRICS.map((metric) => {
            const percentage = Math.min(
              100,
              Math.round((metric.current / metric.target) * 100)
            );

            return (
              <div key={metric.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-200">
                    {metric.label}
                  </span>
                  <span className="font-semibold text-zinc-300">
                    {metric.displayValue}
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.gradientClass} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* 2. Four Quick Action Cards (Matching Screenshot 3) */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.id} to={action.href} className="group block">
                <Card
                  hoverEffect
                  className="flex flex-col items-center justify-center p-6 text-center transition-all group-hover:border-[#7928ca]/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7928ca]/40 bg-[#7928ca]/20 text-[#00f0ff] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#7928ca] group-hover:text-white shadow-md shadow-[#7928ca]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-4 text-sm font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                    {action.label}
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
