import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const serviceLinks = [
  { to: "/services/web-development",   label: "Web Development",    tag: "Build"       },
  { to: "/services/ai-integration",    label: "AI Integration",     tag: "Intelligent" },
  { to: "/services/process-automation",label: "Process Automation", tag: "Automate"    },
  { to: "/services/systems-integration",label:"Systems Integration",tag: "Connect"     },
  { to: "/services/meta-google-ads",   label: "Meta & Google Ads",  tag: "Growth"      },
  { to: "/services/gtm-engineering",   label: "GTM Engineering",    tag: "Scale"       },
] as const;

const topLinks = [
  { to: "/about",   label: "About"   },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen]               = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;
  const onService = path.startsWith("/services/");

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b border-border-soft bg-background/90 px-6 backdrop-blur-2xl md:px-12 lg:px-[72px]">
        <Link to="/" aria-label="ClearScaler home">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {/* Services — hover dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                onService
                  ? "bg-blue-soft font-medium text-blue"
                  : "text-text-muted hover:text-text-base"
              }`}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-[18px] border border-border-soft bg-background shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-1 divide-y divide-border-soft">
                  {serviceLinks.map(({ to, label, tag }) => (
                    <Link
                      key={to}
                      to={to}
                      className="flex items-center justify-between px-5 py-3.5 text-[13px] transition-colors hover:bg-bg-soft"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="font-medium text-text-base">{label}</span>
                      <span className="rounded-full bg-blue-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>

          {/* About, Contact */}
          {topLinks.map(({ to, label }) => {
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
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background pt-[72px] md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="flex flex-col gap-1 px-6 py-6" onClick={(e) => e.stopPropagation()}>
            {/* Services accordion */}
            <li>
              <button
                className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-[17px] font-medium transition-colors ${
                  onService ? "bg-blue-soft text-blue" : "text-text-base hover:bg-bg-soft"
                }`}
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 flex flex-col gap-1 pl-4">
                  {serviceLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="flex items-center rounded-xl px-4 py-3 text-[15px] text-text-muted transition-colors hover:bg-bg-soft hover:text-text-base"
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {topLinks.map(({ to, label }) => {
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
          <div className="px-6 pb-6">
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
