import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

interface NavLinkItem {
  label: string;
  href: string;
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#07060f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo matching Screenshot 1 */}
        <Link to="/" className="text-xl font-black tracking-widest text-white hover:opacity-90">
          FORGEFIT
        </Link>

        {/* Center Nav Links */}
        <nav aria-label="Main Navigation" className="hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA matching Screenshot 1 */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
