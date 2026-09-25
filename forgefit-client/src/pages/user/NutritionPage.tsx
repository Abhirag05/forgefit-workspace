import { Utensils } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function NutritionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Nutrition & Hydration
        </h1>
        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
          Monitor calories, protein, carbs, fats, and daily water hydration goals.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#7928ca]">
          <Utensils className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Macro Tracker Ready</h2>
        <p className="mt-1 max-w-sm text-xs text-zinc-400">
          This module is ready to track meals, serving sizes, and water glasses.
        </p>
      </Card>
    </div>
  );
}
