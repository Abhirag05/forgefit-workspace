import { Activity, Dumbbell, Trophy, Bot } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: typeof Activity;
}

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Profile Setup',
    description:
      'Enter body metrics and personal targets to configure your personalized calorie expenditure algorithms.',
    icon: Activity,
  },
  {
    step: '02',
    title: 'Daily Logging',
    description:
      'Log workout sets, repetitions, weights, meals, and hydration directly through intuitive trackers.',
    icon: Dumbbell,
  },
  {
    step: '03',
    title: 'Gamified Progression',
    description:
      'Earn experience points for each completed habit, unlock higher ranks, and track weekly milestone consistency.',
    icon: Trophy,
  },
  {
    step: '04',
    title: 'AI Coach Insights',
    description:
      'Receive actionable feedback and answers to training questions from Sensei, your integrated AI coach.',
    icon: Bot,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            A simple, structured progression model designed for consistent results.
          </p>
        </div>

        {/* Unified Card grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.step} hoverEffect className="group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#ff416c] transition-colors">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <h3 className="mt-6 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
