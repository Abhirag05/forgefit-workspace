import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
      {/* Subtle Purple & Pink Ambient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8a2387]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff416c]/10 blur-3xl" />

      <div className="mx-auto max-w-5xl">
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

      </div>
    </section>
  );
}
