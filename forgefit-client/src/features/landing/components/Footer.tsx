import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07060f] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Link to="/" className="text-base font-black tracking-widest text-white">
          FORGEFIT
        </Link>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeFit. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
