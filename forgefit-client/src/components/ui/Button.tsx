import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'gradient',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff416c]/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

    const variants = {
      // Pink to Violet gradient with glow from Screenshot 1
      gradient:
        'bg-gradient-to-r from-[#ff416c] to-[#8a2387] text-white shadow-lg shadow-[#ff416c]/25 hover:opacity-95 active:scale-[0.98]',
      // Pill outline from Screenshot 1 Sign In button
      outline:
        'border border-[#ff416c]/60 text-white hover:bg-[#ff416c]/10 active:scale-[0.98]',
      // Purple solid from Screenshot 2 / 3
      secondary:
        'bg-[#7928ca] text-white hover:bg-[#6a00ff] shadow-md shadow-[#7928ca]/20 active:scale-[0.98]',
      // Subtle ghost
      ghost:
        'text-zinc-300 hover:text-white hover:bg-white/5 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs gap-1.5',
      md: 'h-10 px-6 text-sm gap-2',
      lg: 'h-12 px-8 text-base gap-2.5 font-semibold',
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
