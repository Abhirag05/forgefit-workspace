import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles applied to every button
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d4d]/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

    // Variant styles matching ForgeFit signature palette
    const variants = {
      primary:
        'bg-[#ff4d4d] text-white hover:bg-[#ff3333] shadow-lg shadow-[#ff4d4d]/25 font-semibold active:scale-[0.98]',
      secondary:
        'bg-[#6a00ff] text-white hover:bg-[#7b1aff] shadow-lg shadow-[#6a00ff]/25 font-semibold active:scale-[0.98]',
      outline:
        'border border-white/15 text-zinc-200 hover:border-[#ff4d4d]/50 hover:bg-white/5 hover:text-white active:scale-[0.98]',
      ghost:
        'text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
      destructive:
        'bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-600/25 active:scale-[0.98]',
    };

    // Size styles
    const sizes = {
      sm: 'h-9 px-3 text-xs rounded-lg gap-1.5',
      md: 'h-10 px-4 text-sm rounded-xl gap-2',
      lg: 'h-12 px-6 text-base rounded-xl gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
