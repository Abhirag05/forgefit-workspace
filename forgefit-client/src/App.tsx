import { Button } from '@/components/common/Button';
import { Dumbbell, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
        <Dumbbell className="h-4 w-4" />
        ForgeFit Engine v1.0 Live
      </div>

      <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
        Forge Your Body. <br />
        <span className="text-emerald-400">Level Up Your Life.</span>
      </h1>

      <p className="mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
        Track workouts with scientific MET formulas, log nutrition macros, and level up with gamified fitness progression.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" size="lg">
          Get Started Free
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Live Demo
        </Button>
      </div>
    </main>
  );
}
