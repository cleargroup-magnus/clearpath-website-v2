import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-start justify-between gap-6 border-t border-border-soft bg-background px-6 py-13 md:flex-row md:items-center md:px-[72px]" style={{ paddingTop: "52px", paddingBottom: "52px" }}>
      <Logo />
      <p className="text-[13px] text-text-light">© 2026 clear.group. Growth Partner</p>
      <div className="flex gap-7">
        <a href="#services" className="text-[13px] text-text-muted transition-colors hover:text-blue">
          Services
        </a>
        <a href="#process" className="text-[13px] text-text-muted transition-colors hover:text-blue">
          Process
        </a>
        <a href="mailto:magnus@clearcruit.com" className="text-[13px] text-text-muted transition-colors hover:text-blue">
          Contact
        </a>
      </div>
    </footer>
  );
}