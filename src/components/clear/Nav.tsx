import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b border-border-soft bg-background/90 px-6 backdrop-blur-2xl md:px-12 lg:px-[72px]">
        <Link to="/" aria-label="clear.group home">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => {
            const active = path === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    active
                      ? "bg-blue-soft font-medium text-blue"
                      : "text-text-muted hover:text-text-base"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden items-center rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-[oklch(0.55_0.22_260)] sm:inline-flex"
          >
            Book a call
          </Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-border-soft md:hidden"
          >
            <span className={`h-px w-4 bg-text-base transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-text-base transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-text-base transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-background pt-[72px] md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="flex flex-col gap-1 px-6 py-6">
            {links.map(({ to, label }) => {
              const active = path === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`flex items-center rounded-2xl px-5 py-4 text-[17px] font-medium transition-colors ${
                      active ? "bg-blue-soft text-blue" : "text-text-base hover:bg-bg-soft"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center rounded-2xl bg-blue py-4 text-[17px] font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
