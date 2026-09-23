import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 text-center">
      {/* Subtle Purple & Pink Ambient Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8a2387]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 left-1/3 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff416c]/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Headline from Screenshot 1 */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-[#ffb4c2] via-[#ff6b8b] to-[#ffb4c2] bg-clip-text text-transparent">
            Transform Your Fitness Journey
          </span>
        </h1>

        {/* Subtitle from Screenshot 1 */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Track workouts, meals, and progress with our gamified fitness platform. Level up your health like never before.
        </p>

        {/* CTA Button from Screenshot 1 */}
        <div className="mt-10 flex justify-center">
          <Link to="/register">
            <Button variant="gradient" size="lg" className="px-10 py-3 text-base">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Dashboard Progress Preview Cards (Inspired by Screenshot 3) */}
        <div className="mx-auto mt-16 max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 text-left">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-sm font-semibold tracking-wide text-white">
              Your Daily Quests
            </span>
            <span className="text-xs text-[#ff416c]">Level 8 Progress</span>
          </div>

          <div className="mt-6 space-y-5">
            {/* Workout Goal */}
            <div>
              <div className="flex justify-between text-xs text-zinc-300 mb-1.5">
                <span>Workout Sessions</span>
                <span className="font-semibold text-white">3 / 5 completed</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#ff416c] to-[#7928ca]" />
              </div>
            </div>

            {/* Protein Intake */}
            <div>
              <div className="flex justify-between text-xs text-zinc-300 mb-1.5">
                <span>Daily Protein Intake</span>
                <span className="font-semibold text-white">120g / 150g</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#7928ca] to-[#3b82f6]" />
              </div>
            </div>

            {/* Hydration */}
            <div>
              <div className="flex justify-between text-xs text-zinc-300 mb-1.5">
                <span>Water Hydration</span>
                <span className="font-semibold text-white">8 / 8 glasses</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#00f0ff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
