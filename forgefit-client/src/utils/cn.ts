import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple Tailwind class names safely, resolving any conflicting utility classes.
 *
 * @example
 * cn('bg-blue-500 px-4', isDanger && 'bg-rose-500', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
