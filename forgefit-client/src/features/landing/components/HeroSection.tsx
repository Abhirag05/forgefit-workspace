import { ArrowRight, Sparkles, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Cyber Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4d4d]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6a00ff]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Milestone Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4d4d]/20 bg-[#ff4d4d]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d4d]">
          <Sparkles className="h-3.5 w-3.5" />
          The Next-Gen Gamified Fitness Tracker
        </div>

        {/* Hero Headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          FORGE YOUR BODY. <br />
          <span className="bg-gradient-to-r from-[#ff4d4d] via-[#ff7373] to-[#6a00ff] bg-clip-text text-transparent">
            LEVEL UP YOUR LIFE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Replace tedious spreadsheets and boring logs. Track sets, reps, and nutrition with scientific MET precision, earn XP for every healthy habit, and unlock your ultimate potential.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            Start Free Today
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </div>

        {/* Live Stat Badges Preview */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-2xl p-5 text-left transition-all hover:border-[#ff4d4d]/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Daily Burn
              </span>
              <Zap className="h-4 w-4 text-[#ff4d4d]" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">2,850 kcal</p>
            <p className="mt-1 text-xs text-zinc-500">Scientific MET calculation</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-left transition-all hover:border-[#6a00ff]/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                XP & Rank
              </span>
              <Trophy className="h-4 w-4 text-[#6a00ff]" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">Level 8 Titan</p>
            <p className="mt-1 text-xs text-zinc-500">+120 XP gained today</p>
          </div>

          <div className="glass-panel rounded-2xl p-5 text-left transition-all hover:border-[#00f0ff]/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Hydration Goal
              </span>
              <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-sm shadow-[#00f0ff]" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">8 / 8 Glasses</p>
            <p className="mt-1 text-xs text-zinc-500">100% Target completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
