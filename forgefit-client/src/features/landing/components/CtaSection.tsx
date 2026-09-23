import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function CtaSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#ff416c]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#8a2387]/15 blur-3xl" />

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Start Your Fitness Journey Today
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 sm:text-base">
            Join ForgeFit to log workouts, track nutrition, and level up your physical health with scientific precision.
          </p>

          <div className="mt-8 flex justify-center">
            <Link to="/register">
              <Button variant="gradient" size="lg" className="px-10 py-3 text-base">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
