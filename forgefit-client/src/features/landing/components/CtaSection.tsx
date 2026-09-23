import { ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CtaSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#ff4d4d]/30 bg-gradient-to-r from-[#ff4d4d]/15 via-black/40 to-[#6a00ff]/15 px-6 py-12 text-center shadow-2xl sm:px-16 sm:py-16">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#ff4d4d]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#6a00ff]/20 blur-3xl" />

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4d4d] to-[#6a00ff] shadow-lg shadow-[#ff4d4d]/30">
            <Flame className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to Forge Your Best Self?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 sm:text-base">
            Join the gamified fitness movement. Track your workouts, smash your macros, and rank up on the ForgeFit leaderboard.
          </p>

          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" className="px-8 shadow-xl shadow-[#ff4d4d]/30">
              Create Your Free Account
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
