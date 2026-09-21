import React from 'react';
import { Dumbbell, Utensils, Droplets, Bot } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  accentBorder: string;
}

const features: FeatureItem[] = [
  {
    icon: Dumbbell,
    title: 'Precision Workout Logging',
    description:
      'Log sets, reps, and weights. Calculates precise calorie expenditure using Metabolic Equivalent of Task (MET) formulas based on your body weight.',
    badge: 'MET Formula',
    badgeColor: 'bg-[#ff4d4d]/10 text-[#ff4d4d] border-[#ff4d4d]/20',
    accentBorder: 'hover:border-[#ff4d4d]/40',
  },
  {
    icon: Utensils,
    title: 'Nutrition & Macro Tracker',
    description:
      'Track calories, protein, carbs, and fats across breakfast, lunch, dinner, and snacks with built-in serving-size calculations.',
    badge: 'Macro Engine',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    accentBorder: 'hover:border-amber-500/40',
  },
  {
    icon: Droplets,
    title: 'Smart Hydration Logging',
    description:
      'Never forget your water intake. Log glass by glass, track daily targets, and unlock daily hydration XP bonuses.',
    badge: '8 Glasses Daily',
    badgeColor: 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/20',
    accentBorder: 'hover:border-[#00f0ff]/40',
  },
  {
    icon: Bot,
    title: 'AI Fitness Coach',
    description:
      'Integrated with Google Gemini AI. Ask questions about workout form, macro splits, or recipe ideas, tailored to your daily logged stats.',
    badge: 'Gemini AI',
    badgeColor: 'bg-[#6a00ff]/10 text-[#6a00ff] border-[#6a00ff]/20',
    accentBorder: 'hover:border-[#6a00ff]/40',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#ff4d4d]">
            Engineered for Results
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Everything You Need to Dominate Your Goals
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            ForgeFit unifies workouts, nutrition, hydration, and artificial intelligence into one unified ecosystem.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-panel group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${feature.accentBorder} hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${feature.badgeColor}`}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
