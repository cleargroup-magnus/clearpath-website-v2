import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-between border-b border-border-soft bg-background/85 px-6 backdrop-blur-2xl md:px-12 lg:px-[72px]">
      <a href="#" aria-label="clear.group home">
        <Logo />
      </a>
      <ul className="flex items-center gap-4 md:gap-8">
        <li className="hidden sm:block">
          <a href="#services" className="text-sm text-text-muted transition-colors hover:text-blue">
            Services
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#process" className="text-sm text-text-muted transition-colors hover:text-blue">
            Process
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="#why" className="text-sm text-text-muted transition-colors hover:text-blue">
            Why us
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <a
            href="https://calendly.com/magnus-clearcruit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-[oklch(0.55_0.22_260)]"
          >
            Book a call
          </a>
        </li>
      </ul>
    </nav>
  );
}
