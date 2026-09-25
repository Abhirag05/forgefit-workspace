import { Bot } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function ChatbotPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Sensei AI Coach
        </h1>
        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
          Intelligent fitness recommendations, form analysis, and recovery coaching.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#00f0ff]">
          <Bot className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white">Sensei Coach Ready</h2>
        <p className="mt-1 max-w-sm text-xs text-zinc-400">
          This module is ready to connect with the AI fitness chatbot interface.
        </p>
      </Card>
    </div>
  );
}
