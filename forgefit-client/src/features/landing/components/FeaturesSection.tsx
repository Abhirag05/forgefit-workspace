import { Dumbbell, Utensils, Droplets, Bot } from 'lucide-react';
import { FeatureCard, type FeatureCardProps } from './FeatureCard';

const features: FeatureCardProps[] = [
  {
    id: 'workouts',
    icon: Dumbbell,
    title: 'Workout Tracking',
    description:
      'Log sets, repetitions, and weights. Calculates precise calorie expenditure using scientific MET formulas based on your body weight.',
  },
  {
    id: 'nutrition',
    icon: Utensils,
    title: 'Macro & Nutrition',
    description:
      'Monitor calories, proteins, carbohydrates, and fats across all meals with automatic serving-size scaling.',
  },
  {
    id: 'hydration',
    icon: Droplets,
    title: 'Hydration Engine',
    description:
      'Track daily water intake glass by glass, visualize your daily progress, and maintain consistent hydration habits.',
  },
  {
    id: 'ai-coach',
    icon: Bot,
    title: 'Sensei AI Coach',
    description:
      'Personalized guidance powered by Gemini AI, answering questions on form, recovery, and meal prep based on your telemetry.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Core Features
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Everything required to track workouts, nutrition, and personal progression.
          </p>
        </div>

        {/* Clean, readable grid mapping over FeatureCard */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
