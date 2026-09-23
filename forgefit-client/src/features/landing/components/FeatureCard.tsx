import type { ComponentType } from 'react';
import { Card } from '@/components/ui/Card';

export interface FeatureCardProps {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function FeatureCard({ id, icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card id={id} hoverEffect className="group scroll-mt-24">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#ff416c]/40 transition-colors">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
        {description}
      </p>
    </Card>
  );
}
