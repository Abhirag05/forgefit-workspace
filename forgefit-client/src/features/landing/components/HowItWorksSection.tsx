import { Shield, Sparkles, TrendingUp, Bot } from 'lucide-react';

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: typeof Shield;
  accentColor: string;
  glowColor: string;
}

const steps: StepItem[] = [
  {
    step: '01',
    title: 'Awaken Your Stats',
    description:
      'Set up your hunter profile. Enter your body weight, height, and target goals to calibrate your personalized MET calorie burning engine.',
    icon: Shield,
    accentColor: 'text-[#00f0ff]',
    glowColor: 'border-[#00f0ff]/30 shadow-[#00f0ff]/10',
  },
  {
    step: '02',
    title: 'Complete Daily Quests',
    description:
      'Log sets, reps, and weights in the gym. Track every meal and glass of water like a daily quest in your personal system window.',
    icon: Sparkles,
    accentColor: 'text-[#ff4d4d]',
    glowColor: 'border-[#ff4d4d]/30 shadow-[#ff4d4d]/10',
  },
  {
    step: '03',
    title: 'Earn XP & Rank Up',
    description:
      'Every healthy action grants real experience points. Rise through the hunter ranks from E-Rank novice all the way to S-Rank Shadow Monarch.',
    icon: TrendingUp,
    accentColor: 'text-[#6a00ff]',
    glowColor: 'border-[#6a00ff]/30 shadow-[#6a00ff]/10',
  },
  {
    step: '04',
    title: 'Consult the AI Coach',
    description:
      'Need recovery advice or workout advice? Consult your Gemini-powered fitness coach, aware of all your daily logged telemetry.',
    icon: Bot,
    accentColor: 'text-[#f59e0b]',
    glowColor: 'border-[#f59e0b]/30 shadow-[#f59e0b]/10',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6a00ff]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6a00ff]/30 bg-[#6a00ff]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#6a00ff]">
            The Player Progression System
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
            How ForgeFit Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Transform routine fitness logging into a thrilling RPG leveling loop.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`glass-panel group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-xl ${item.glowColor}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <Icon className={`h-5 w-5 ${item.accentColor}`} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Quest Step {item.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
