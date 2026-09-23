import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

interface NavLinkItem {
  label: string;
  href: string;
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Workouts', href: '#workouts' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'AI Coach', href: '#ai-coach' },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <span className="text-xl font-extrabold tracking-wider text-white">
            FORGE<span className="text-[#ff4d4d]">FIT</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
