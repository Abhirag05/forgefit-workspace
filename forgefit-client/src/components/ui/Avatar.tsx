import { useState } from 'react';
import { cn } from '@/utils/cn';

export interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({
  src,
  name,
  size = 'md',
  className,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Extract up to 2 uppercase initials (e.g., "Alex Mercer" -> "AM")
  const initials = name
    ? name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  const sizeClasses = {
    sm: 'h-8 w-8 text-[11px]',
    md: 'h-9 w-9 text-xs',
    lg: 'h-12 w-12 text-sm',
  };

  const showImage = src && !imageError;

  return (
    <div
      title={name || undefined}
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-purple-500/40 bg-gradient-to-tr from-[#7928ca] to-[#3b82f6] font-bold text-white shadow-md shadow-purple-950/50 select-none',
        sizeClasses[size],
        className
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={name || 'User Avatar'}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
