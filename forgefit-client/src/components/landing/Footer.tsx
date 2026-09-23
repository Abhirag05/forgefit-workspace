export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07060f] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <a href="#hero" className="text-base font-black tracking-widest text-white hover:opacity-90">
          FORGEFIT
        </a>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeFit. Built for performance.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#contact" className="transition-colors hover:text-white">
            Support
          </a>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-500">Privacy & Terms</span>
        </div>
      </div>
    </footer>
  );
}
