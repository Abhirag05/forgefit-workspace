export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07060f] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <a href="#hero" className="text-base font-black tracking-widest text-white hover:opacity-90">
          FORGEFIT
        </a>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeFit. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#hero" className="transition-colors hover:text-white">
            Home
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-white">
            How It Works
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
